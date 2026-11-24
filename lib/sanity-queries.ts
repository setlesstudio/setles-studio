import { client } from "@/sanity/client";

import plumGuide from "@/content/plum-outfit-guide.json";

import burgundyGuide from "@/content/burgundy-look.json";

import comparison from "@/content/fashion-shoot-comparison.json";

const comparisonSlug = "ai-fashion-photography-vs-traditional-photoshoot-which-one-actually-fits-your-brand";
const comparisonPublishedAt = "2026-11-24T18:48:05.421Z";

function revisedComparison(post: { slug?: { current?: string }; _updatedAt?: string } | null) {
  return post?.slug?.current === comparisonSlug && post._updatedAt && post._updatedAt <= comparisonPublishedAt;
}

const studioGuides = [plumGuide, burgundyGuide];

const apparelArticleSlug = "apparel-photography-stop-losing-sales-to-bad-photos";
const legacyApparelSlug = `${apparelArticleSlug}-`;

export async function getAllBlogs() {
  const posts = await client.fetch(
    `*[_type == "blog" && status == "Published"] | order(publishedAt desc) {
      _id, _updatedAt, title, "slug": slug{..., "current": select(current == $legacy => $clean, current)}, excerpt, category, readTime, publishedAt, image, metaTitle, metaDescription, status
    }`,
    { legacy: legacyApparelSlug, clean: apparelArticleSlug },
    { next: { revalidate: 60 } }
  );
  const publishedSlugs = new Set(posts.map((post: { slug?: { current?: string } }) => post.slug?.current));
  const additional = studioGuides.filter(guide => !publishedSlugs.has(guide.slug.current));
  const revisedPosts = posts.map((post: typeof posts[number]) => revisedComparison(post) ? { ...post, title: comparison.title, excerpt: comparison.excerpt, image: comparison.image, metaTitle: comparison.metaTitle, metaDescription: comparison.metaDescription } : post);
  return [...revisedPosts, ...additional].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export async function getBlogBySlug(slug: string) {
  const fetchPost = (value: string) => client.fetch(
    `*[_type == "blog" && status == "Published" && slug.current == $slug][0] {
      _id, _updatedAt, title, slug, excerpt, category, readTime, publishedAt, image, body, metaTitle, metaDescription, status
    }`,
    { slug: value },
    { next: { revalidate: 60 } }
  );
  const post = await fetchPost(slug);
  if (revisedComparison(post)) return { ...post, ...comparison };
  if (slug === "ai-fashion-photography-for-clothing-brands-2026-guide" && post?.body?.includes("(Note: swap the placeholder paths above")) {
    const body = post.body.replace(
      /AI fashion photography works best as part of a broader photography strategy,[\s\S]*?\(Note: swap the placeholder paths above[^)]*\)/,
      "Start with a clear front and back view of each garment. Our [clothing reference photo guide](/blog/how-to-photograph-clothing-for-an-ai-model-shoot) shows what to send for a neckline, seam or embroidered detail. Choose [on-model studio photography](/services/realistic-ai-studio-photography) for product pages or [lifestyle fashion photography](/services/lifestyle-realistic-ai-photography) for a collection launch."
    );
    return { ...post, body };
  }
  const guide = studioGuides.find(item => item.slug.current === slug);
  if (!post && guide) return guide;
  return !post && slug === apparelArticleSlug ? fetchPost(legacyApparelSlug) : post;
}

export async function getPageSEO(pageId: string) {
  return client.fetch(
    `*[_type == "page" && pageId == $pageId][0] {
      pageId, title, metaTitle, metaDescription, heroTitle, heroText, heroImage
    }`,
    { pageId },
    { next: { revalidate: 60 } }
  );
}
