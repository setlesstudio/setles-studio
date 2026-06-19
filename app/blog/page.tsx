import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { client, urlFor } from "@/sanity/client";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI fashion content, ecommerce visual strategy, and the production techniques behind realistic brand imagery.",
};

const POSTS_QUERY = `{
  "featured": *[_type == "blogSettings"][0].featuredPost-> {
    _id, title, "slug": slug.current, excerpt, publishedAt, category, readTime, image
  },
  "posts": *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, publishedAt, category, readTime, image
  }
}`;

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const { featured: pinnedPost, posts } = await client.fetch<{
    featured: SanityDocument | null;
    posts: SanityDocument[];
  }>(POSTS_QUERY, {}, { next: { revalidate: 60 } });

  // Use pinned featured post, or fall back to the most recent
  const featured = pinnedPost ?? posts[0] ?? null;
  const rest = featured ? posts.filter((p) => p._id !== featured._id) : posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights on <span className="text-brand">AI fashion content</span>{" "}
            and ecommerce strategy
          </>
        }
        text="Production techniques, industry breakdowns, and the thinking behind content that converts."
        image="/images/blog-page-banner-picture.jpeg"
        imageMobile="/images/blog-page-banner-picture-mobile.jpeg"
        imageAlt="outdoor-model-image"
      />

      <section className="container-site py-24">
        {/* Featured */}
        {featured && (
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="card group grid overflow-hidden lg:grid-cols-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5 lg:aspect-auto lg:min-h-[420px]">
                {featured.image ? (
                  <Image
                    src={urlFor(featured.image).width(800).height(560).url()}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-sm text-ink-soft/70">
                  {formatDate(featured.publishedAt)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Read article{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post._id} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/5">
                    {post.image ? (
                      <Image
                        src={urlFor(post.image).width(600).height(338).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CTABand
        title="Prefer results over reading?"
        text="Send one product image and get a free sample of our work."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free sample of your AI fashion photography.")}`, label: "Request Free Sample" }}
        image="/images/blog-page-banner-image.jpeg"
        imageMobile="/images/blog-page-banner-mobile.jpeg"
      />
    </>
  );
}
