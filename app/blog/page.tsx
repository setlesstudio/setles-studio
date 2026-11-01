import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/data";
import { getAllBlogs, getPageSEO } from "@/lib/sanity-queries";
import type { Metadata } from "next";
import { brandedTitle } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageSEO("blog");
  const title = pageData?.metaTitle && !/^Blog(?: \|.*)?$/i.test(pageData.metaTitle) ? pageData.metaTitle : "AI Fashion Photography Guides & Tips | SetlesStudio";
  const description = pageData?.metaDescription && pageData.metaDescription !== "Insights on AI fashion content, hyper-realistic product visuals, photoshoot cost reduction, and ecommerce growth strategy." ? pageData.metaDescription : "Read practical guides to AI fashion photography, garment accuracy, production costs, and ecommerce product imagery from SetlesStudio.";

  return {
    title: brandedTitle(title),
    description,
    alternates: {
      canonical: "https://www.setlesstudio.com/blog",
    },
    openGraph: {
      title,
      description,
      url: "https://www.setlesstudio.com/blog",
      siteName: "SetlesStudio",
      images: [
        {
          url: "https://www.setlesstudio.com/images/portfolio-page-banner.jpeg",
          width: 1200,
          height: 630,
          alt: "SetlesStudio Blog",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@SetlesStudio",
      creator: "@SetlesStudio",
      images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
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

export default async function BlogPage() {
  const [blogs, pageData] = await Promise.all([
    getAllBlogs(),
    getPageSEO("blog"),
  ]);

  const featured = blogs[0] || null;
  const rest = blogs.slice(1);

  const heroTitle = pageData?.heroTitle || "Insights on AI fashion content and ecommerce strategy";
  const heroText = pageData?.heroText || "Production techniques, industry breakdowns, and the thinking behind content that converts.";
  const heroImage = pageData?.heroImage || "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture_thkuwm.jpg";

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={heroTitle}
        text={heroText}
        image={heroImage}
        imageMobile="https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture-mobile_aatqie.jpg"
        imageAlt="outdoor-model-image"
        animateReveal
      />

      <section className="container-site py-24">
        {featured ? (
          <Link
            href={`/blog/${featured.slug?.current || featured.slug}`}
            className="card group grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5 lg:aspect-auto lg:min-h-[420px]">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-ink/30">
                  No cover image
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand">
                <span>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-ink/20" />
                <span className="text-ink-soft/70">{featured.readTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug group-hover:text-brand sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft text-sm sm:text-base">
                {featured.excerpt}
              </p>
              <p className="mt-6 text-sm text-ink-soft/70">
                {formatDate(featured.publishedAt)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                Read article{" "}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ) : (
          <div className="text-center py-10 bg-cream/30 rounded-3xl border border-ink/[0.05]">
            <p className="text-ink-soft font-bold">No published blogs found.</p>
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post: any, i: number) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current || post.slug}`}
                className="card group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/5">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-ink/30">
                      No cover image
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-ink/20" />
                    <span className="text-ink-soft/70">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs text-ink-soft/70">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <CTABand
        title="Prefer results over reading?"
        text="Send one product image and get a free sample of our work."
        primary={{
          href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free sample of your AI fashion photography.")}`,
          label: "Request Free Sample",
        }}
        image="/images/blog-page-banner-image.jpeg"
        imageMobile="/images/blog-page-banner-mobile.jpeg"
      />
    </>
  );
}
