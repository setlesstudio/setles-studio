import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/data";
import { getAllBlogs, getBlogBySlug } from "@/lib/sanity-queries";
import { parseMarkdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { blogTitle, breadcrumbData } from "@/lib/seo";

export const revalidate = 60;

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
  const title = blogTitle(post.title, post.metaTitle);
  const description = post.metaDescription || post.excerpt;

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

  const allBlogs = await getAllBlogs();
  const index = allBlogs.findIndex(
    (b: any) => (b.slug?.current || b.slug) === params.slug
  );
  const nextPost = allBlogs[index + 1] || null;

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: post.image || `${site.url}/images/og-default.jpg`,
        datePublished: post.publishedAt,
        dateModified: post._updatedAt || post.publishedAt,
        author: { "@type": "Organization", name: "SetlesStudio Team", url: `${site.url}/about` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}/blog/${params.slug}`,
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${params.slug}` },
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
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {post.excerpt}
          </p>
          <p className="mt-6 text-sm text-ink-soft/70">
            {formatDate(post.publishedAt)} · SetlesStudio Team
          </p>
        </header>

        {post.image && (
          <div className="container-site mt-12 max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-4xl border border-ink/5 bg-cream">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="container-site mt-14 max-w-5xl pb-24">
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

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug?.current || nextPost.slug}`}
              className="card group flex items-center justify-between gap-6 p-7"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Read next
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-brand">
                  {nextPost.title}
                </p>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
              />
            </Link>
          )}
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
