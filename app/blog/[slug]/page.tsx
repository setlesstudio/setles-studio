import { coverSizes, imageDescription } from "@/lib/image-descriptions";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/data";
import { getAllBlogs, getBlogBySlug } from "@/lib/sanity-queries";
import { parseMarkdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articleHeading, articleSeo } from "@/lib/article-seo";
import StructuredData from "@/components/StructuredData";
import { blogTitle, breadcrumbData } from "@/lib/seo";

export const revalidate = 60;

const comparisonSlug = "ai-fashion-photography-vs-traditional-photoshoot-which-one-actually-fits-your-brand";

const furtherReading: Record<string, Array<{ slug: string; title: string }>> = {
  [comparisonSlug]: [
    { slug: "ai-fashion-photography-cuts-ecommerce-content-costs", title: "How much AI fashion photography costs" },
    { slug: "ai-fashion-product-photography-studio-or-lifestyle", title: "Choose studio or lifestyle photography for a collection" },
  ],
  "ai-fashion-photography-for-clothing-brands-2026-guide": [
    { slug: "ai-fashion-fabric-texture-fix-guide", title: "How to improve fabric texture in AI fashion images" },
    { slug: "ai-video-ads-for-fashion-brands", title: "How to plan AI video ads for a fashion brand" },
  ],
  "ai-fashion-product-photography-studio-or-lifestyle": [
    { slug: "clothing-photography-guide-shoot-like-a-pro-studio", title: "Plan a professional clothing photography workflow" },
    { slug: "ecommerce-product-photography-tips-2026-increase-sales", title: "Improve ecommerce product photography" },
  ],
  "ai-video-ads-for-fashion-brands": [
    { slug: "ai-fashion-product-photography-studio-or-lifestyle", title: "Choose the right still images before building video ads" },
    { slug: "ai-fashion-photography-cuts-ecommerce-content-costs", title: "Compare AI fashion photography production costs" },
  ],
  "ai-fashion-fabric-texture-fix-guide": [
    { slug: "clothing-photography-guide-shoot-like-a-pro-studio", title: "Prepare clothing references for better photography" },
    { slug: "ai-fashion-photography-for-clothing-brands-2026-guide", title: "Read the AI fashion photography guide for clothing brands" },
  ],
  "ai-fashion-photography-cuts-ecommerce-content-costs": [
    { slug: "ai-fashion-product-photography-studio-or-lifestyle", title: "Decide when studio or lifestyle images add value" },
    { slug: "ecommerce-product-photography-tips-2026-increase-sales", title: "Improve ecommerce product image planning" },
  ],
  "clothing-photography-guide-shoot-like-a-pro-studio": [
    { slug: "ai-fashion-fabric-texture-fix-guide", title: "Improve fabric texture in AI fashion images" },
    { slug: "ai-fashion-product-photography-studio-or-lifestyle", title: "Compare studio and lifestyle photography" },
  ],
  "ecommerce-product-photography-tips-2026-increase-sales": [
    { slug: "clothing-photography-guide-shoot-like-a-pro-studio", title: "Build a better clothing photography workflow" },
    { slug: "ai-fashion-photography-cuts-ecommerce-content-costs", title: "Understand AI fashion photography costs" },
  ],
};

function articleDescription(slug: string, post: { metaDescription?: string; excerpt?: string }) {
  const approved = articleSeo[slug];
  const current = post.metaDescription?.trim();
  return approved && (!current || current === approved.oldDescription)
    ? approved.description
    : current || post.excerpt;
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((b: any) => ({ slug: b.slug?.current || b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);
  if (!post || post.status !== "Published") notFound();

  const canonicalUrl = `https://www.setlesstudio.com/blog/${params.slug}`;
  const blogImage = post.image || "https://www.setlesstudio.com/images/portfolio-page-banner.jpeg";
  const approved = articleSeo[params.slug];
  const title = approved && (!post.metaTitle || post.metaTitle.trim() === approved.oldTitle) ? approved.title : blogTitle(post.title, post.metaTitle);
  const description = articleDescription(params.slug, post);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "SetlesStudio",
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@SetlesStudio",
      creator: "@SetlesStudio",
      images: [blogImage],
    },
  };
}

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);
  if (!post || post.status !== "Published") notFound();

  const heading = articleHeading(params.slug, post.title);
  const allBlogs = await getAllBlogs();
  const index = allBlogs.findIndex(
    (b: any) => (b.slug?.current || b.slug) === params.slug
  );
  const relatedPages: Record<string, { href: string; title: string }> = {
    "ai-fashion-product-photography-studio-or-lifestyle": { href: "/services/lifestyle-realistic-ai-photography", title: "Explore AI lifestyle photography for fashion brands" },
    "ai-fashion-photography-cuts-ecommerce-content-costs": { href: "/pricing", title: "Compare AI fashion and product photography pricing" },
    "ai-video-ads-for-fashion-brands": { href: "/services/realistic-ai-video-ads-ugc", title: "Explore AI video ads for fashion brands" },
    "ai-fashion-fabric-texture-fix-guide": { href: "/services/realistic-ai-studio-photography", title: "Explore AI fashion photography for clothing brands" },
    "clothing-photography-guide-shoot-like-a-pro-studio": { href: "/services/realistic-ai-studio-photography", title: "Explore AI fashion photography for clothing brands" },
    "ecommerce-product-photography-tips-2026-increase-sales": { href: "/services", title: "Explore AI fashion and product photography services" },
  };
  const nextPost = allBlogs[index + 1];
  const related = relatedPages[params.slug] || (nextPost && { href: "/blog/" + (nextPost.slug?.current || nextPost.slug), title: articleHeading(nextPost.slug?.current || nextPost.slug, nextPost.title) });

  const recommended = (furtherReading[params.slug] ?? [])
    .filter(({ slug }) => allBlogs.some((blog: { slug: string | { current?: string } }) =>
      (typeof blog.slug === "string" ? blog.slug : blog.slug?.current) === slug))
    .map(({ slug, title }) => ({ href: `/blog/${slug}`, title }));
  const readingLinks = related
    ? [related, ...recommended.filter(({ href }) => href !== related.href)]
    : recommended;

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: heading,
        description: articleDescription(params.slug, post),
        image: post.image || `${site.url}/images/og-default.jpg`,
        datePublished: post.publishedAt,
        dateModified: post._updatedAt || post.publishedAt,
        author: post.author ? { "@type": "Person", name: post.author.split(",")[0], url: `${site.url}/about` } : { "@type": "Organization", name: "SetlesStudio Team", url: `${site.url}/about` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}/blog/${params.slug}`,
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: heading, path: `/blog/${params.slug}` },
      ])} />
      <article className="pt-36">
        <header className="container-site max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-brand"
          >
            <ArrowLeft size={15} /> All articles
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <span className="text-ink-soft/70">{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {post.excerpt}
          </p>
          <p className="mt-6 text-sm text-ink-soft/70">
            {formatDate(post.publishedAt)} · {post.author || "SetlesStudio Team"}
          </p>
        </header>

        {post.image && (
          <div className="container-site mt-12 max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-4xl border border-ink/5 bg-cream">
              <img
                src={post.image}
                  {...coverSizes(post.image, "(min-width: 1024px) 960px, 100vw")}
                alt={imageDescription(post.image, post.title)}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="container-site mt-14 max-w-5xl pb-24">
          {params.slug === comparisonSlug && (
            <section aria-labelledby="studio-shoot-question" className="mb-12 space-y-5 text-ink-soft">
              <h2 id="studio-shoot-question" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Can an AI fashion photoshoot replace a traditional studio shoot?
              </h2>
              <p>For catalog images, often yes. A clear flat lay can give you enough detail to create an on-model front view and a lifestyle image for a collection launch. Book a physical shoot when the buying decision depends on how a skirt moves, how sheer a blouse looks in daylight, or where a hem falls on someone wearing a particular size.</p>
              <h3 className="font-display text-xl font-semibold text-ink">One navy workout set, three ways to see it</h3>
              <p>Start with the tank and shorts on their own. In the outdoor front view, follow the neckline and compare the length of the shorts with the original. In the reading scene, notice how the seated pose changes what you can see of the waistband. The front view helps a shopper inspect the design. The seated image gives the same outfit a setting for a campaign.</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { src: "/images/product-image.png", alt: "Navy workout tank and matching shorts laid flat", caption: "Original flat lay" },
                  { src: "/images/navy-activewear-outdoors.webp", alt: "AI model wearing the navy set outdoors with a brown tote", caption: "On-model front view" },
                  { src: "/images/navy-activewear-reading.webp", alt: "Seated AI model reading beside a garden door in the navy set", caption: "Lifestyle campaign view" },
                ].map(({ src, alt, caption }) => (
                  <figure key={src}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 30vw, 92vw" className="object-contain" />
                    </div>
                    <figcaption className="mt-2 text-sm">{caption}</figcaption>
                  </figure>
                ))}
              </div>
              <p>For your first test, choose one garment with a detail a customer would recognize immediately, such as an asymmetrical strap or an embroidered logo. Send a close-up of that detail with the flat lay. Compare both references with the finished image before approving the rest of the collection. For sizing questions, use measurements from the actual garment.</p>
              <Link className="inline-block font-semibold text-brand underline" href="/services/realistic-ai-studio-photography">See our on-model photography for clothing brands</Link>
            </section>
          )}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink-soft prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-img:rounded-2xl prose-img:mx-auto prose-img:max-h-[60vh] sm:prose-img:max-h-[75vh] prose-img:object-contain leading-relaxed space-y-4 [&_.flex:has(img)]:flex-col sm:[&_.flex:has(img)]:flex-row [&_.grid:has(img)]:grid-cols-1 sm:[&_.grid:has(img)]:grid-cols-2 [&_.flex:has(img)]:gap-6 [&_.grid:has(img)]:gap-6 [&_.flex_img]:w-full sm:[&_.flex_img]:w-auto [&_.flex_img]:h-auto [&_.grid_img]:w-full sm:[&_.grid_img]:w-auto [&_.grid_img]:h-auto">
            {post.body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownToHtml(post.body),
                }}
              />
            ) : (
              <p className="italic text-ink-soft/40">
                This article has no content.
              </p>
            )}
          </div>

          <hr className="my-14 border-ink/10" />

          {readingLinks.map(({ href, title }) => (
            <Link
              key={href}
              href={href}
              className="card group mb-4 flex items-center justify-between gap-6 p-7 last:mb-0"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Explore next
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-brand">
                  {title}
                </p>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </article>

      <CTABand
        title="Want this level of content for your brand?"
        primary={{
          href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`,
          label: "Book a Free Consultation",
        }}
      />
    </>
  );
}
