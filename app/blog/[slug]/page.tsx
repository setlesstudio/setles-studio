"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/data";
import { getStoredBlogs, BlogPost } from "@/lib/dashboard-store";
import { parseMarkdownToHtml } from "@/lib/markdown";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return d;
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [nextPost, setNextPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const blogs = getStoredBlogs().filter((b) => b.status === "Published");
      const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();
      const current = blogs.find(
        (b) =>
          b.slug?.toLowerCase().trim() === cleanSlug ||
          b.id?.toLowerCase().trim() === cleanSlug
      );
      if (current) {
        setPost(current);
        const index = blogs.indexOf(current);
        const next = blogs[index + 1] || blogs[0] || null;
        if (next && next.id !== current.id) {
          setNextPost(next);
        }
      }
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
        <h2 className="font-display text-2xl font-bold text-ink">Article Not Found</h2>
        <p className="text-sm text-ink-soft mt-2 text-center max-w-sm">
          The article you are looking for does not exist or has been set to draft.
        </p>
        <Link href="/blog" className="mt-6 btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
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
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink-soft prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-img:rounded-2xl leading-relaxed space-y-4">
            {post.body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownToHtml(post.body),
                }}
              />
            ) : (
              <p className="italic text-ink-soft/40">This article has no content.</p>
            )}
          </div>

          <hr className="my-14 border-ink/10" />

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
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
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`, label: "Book a Free Consultation" }}
      />
    </>
  );
}
