import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const index = posts.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const post = posts[index];
  const next = posts[(index + 1) % posts.length];

  return (
    <>
      <article className="pt-36">
        <header className="container-site max-w-4xl">
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
            {formatDate(post.date)} · SetlesStudio Team
          </p>
        </header>

        <div className="container-site mt-12 max-w-5xl">
          {/* Cover slot: set post.image in lib/data.ts */}
          <ImageSlot
            src={post.image}
            alt={post.title}
            label="Article cover image"
            className="aspect-[16/9] w-full rounded-4xl"
            priority
          />
        </div>

        <div className="container-site mt-14 max-w-4xl pb-24">
          <div className="space-y-6 text-[17px] leading-[1.85] text-ink-soft">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <hr className="my-14 border-ink/10" />

          <Link
            href={`/blog/${next.slug}`}
            className="card group flex items-center justify-between gap-6 p-7"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand">
                Read next
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-brand">
                {next.title}
              </p>
            </div>
            <ArrowRight
              size={20}
              className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>

      <CTABand
        title="Want this level of content for your brand?"
        primary={{ href: "/contact", label: "Book a Free Consultation" }}
      />
    </>
  );
}
