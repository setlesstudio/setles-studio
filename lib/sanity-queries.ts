import { client } from "@/sanity/client";

import plumGuide from "@/content/plum-outfit-guide.json";

import burgundyGuide from "@/content/burgundy-look.json";

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
  return [...posts, ...additional].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
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
