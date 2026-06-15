import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI fashion content, ecommerce visual strategy, and the production techniques behind realistic brand imagery.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

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
        image="/images/blog-page-banner.png"
        imageAlt="multiple-models-outdoor"
      />

      <section className="container-site py-24">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="card group grid overflow-hidden lg:grid-cols-2"
          >
            <ImageSlot
              src={featured.image}
              alt={featured.title}
              label="Featured post cover"
              className="min-h-[280px]"
            />
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
                {formatDate(featured.date)}
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

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="card group flex h-full flex-col overflow-hidden"
              >
                <ImageSlot
                  src={post.image}
                  alt={post.title}
                  label="Post cover"
                  className="aspect-[16/9] w-full"
                />
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
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Prefer results over reading?"
        text="Send one product image and get a free sample of our work."
        primary={{ href: "/contact?intent=sample", label: "Request Free Sample" }}
      />
    </>
  );
}
