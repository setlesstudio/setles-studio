import { client } from "@/sanity/client";

const apparelArticleSlug = "apparel-photography-stop-losing-sales-to-bad-photos";
const legacyApparelSlug = `${apparelArticleSlug}-`;

export async function getAllBlogs() {
  return client.fetch(
    `*[_type == "blog" && status == "Published"] | order(publishedAt desc) {
      _id, _updatedAt, title, "slug": slug{..., "current": select(current == $legacy => $clean, current)}, excerpt, category, readTime, publishedAt, image, metaTitle, metaDescription, status
    }`,
    { legacy: legacyApparelSlug, clean: apparelArticleSlug },
    { next: { revalidate: 60 } }
  );
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && status == "Published" && slug.current in [$slug, $fallback]] | order(slug.current == $slug desc)[0] {
      _id, _updatedAt, title, slug, excerpt, category, readTime, publishedAt, image, body, metaTitle, metaDescription, status
    }`,
    { slug, fallback: slug === apparelArticleSlug ? legacyApparelSlug : slug },
    { next: { revalidate: 60 } }
  );
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
