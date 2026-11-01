import { client } from "@/sanity/client";

export async function getAllBlogs() {
  return client.fetch(
    `*[_type == "blog" && status == "Published"] | order(publishedAt desc) {
      _id, _updatedAt, title, slug, excerpt, category, readTime, publishedAt, image, metaTitle, metaDescription, status
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && status == "Published" && slug.current == $slug][0] {
      _id, _updatedAt, title, slug, excerpt, category, readTime, publishedAt, image, body, metaTitle, metaDescription, status
    }`,
    { slug },
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
