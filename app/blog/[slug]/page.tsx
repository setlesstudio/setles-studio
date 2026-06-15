import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PortableText, type SanityDocument } from "next-sanity";
import CTABand from "@/components/CTABand";
import { client, urlFor } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  category,
  readTime,
  image,
  body
}`;

const NEXT_POST_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0] {
  title,
  "slug": slug.current
}`;

const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`;

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(SLUGS_QUERY);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [post, nextPost] = await Promise.all([
    client.fetch<SanityDocument>(POST_QUERY, { slug }, { next: { revalidate: 60 } }),
    client.fetch<SanityDocument>(NEXT_POST_QUERY, { slug }, { next: { revalidate: 60 } }),
  ]);

  if (!post) notFound();

  const coverImageUrl = post.image
    ? urlFor(post.image).width(1200).height(675).url()
    : null;

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

        {coverImageUrl && (
          <div className="container-site mt-12 max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-4xl">
              <Image
                src={coverImageUrl}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 1000px, 100vw"
              />
            </div>
          </div>
        )}

        <div className="container-site mt-14 max-w-5xl pb-24">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink-soft prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-img:rounded-2xl">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
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
        primary={{ href: "/contact", label: "Book a Free Consultation" }}
      />
    </>
  );
}
