import { MetadataRoute } from "next";
import { services, site } from "@/lib/data";
import { getAllBlogs } from "@/lib/sanity-queries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = site.url.replace(/\/$/, "");

  // 1. Core Published Static Pages
  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/pricing",
    "/about",
    "/contact",
    "/learn",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // 2. Dynamic Service Pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
  }));

  // 3. Dynamic Blog Pages (from Sanity CMS - only published articles)
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getAllBlogs();
    if (Array.isArray(blogs)) {
      blogRoutes = blogs
        .filter(
          (post: any) =>
            post?.status === "Published" &&
            (post?.slug?.current || post?.slug)
        )
        .map((post: any) => {
          const slug = post.slug?.current || post.slug;
          const date = post.publishedAt ? new Date(post.publishedAt) : new Date();
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: date,
          };
        });
    }
  } catch (err) {
    console.error("Failed to load blog posts for sitemap:", err);
  }

  // Note: <priority> and <changefreq> are omitted as modern search engines (Google) ignore them.
  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
