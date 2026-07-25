import { client } from "@/sanity/client";

export async function getAllBlogs() {
  return client.fetch(
    `*[_type == "blog" && status == "Published"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, readTime, publishedAt, image, metaTitle, metaDescription, status
    }`
  );
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id, title, slug, excerpt, category, readTime, publishedAt, image, body, metaTitle, metaDescription, status
    }`,
    { slug }
  );
}

export async function getPageSEO(pageId: string) {
  return client.fetch(
    `*[_type == "page" && pageId == $pageId][0] {
      pageId, title, metaTitle, metaDescription, heroTitle, heroText, heroImage
    }`,
    { pageId }
  );
}
