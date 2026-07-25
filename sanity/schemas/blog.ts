export const blogSchema = {
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "category", title: "Category", type: "string" },
    { name: "readTime", title: "Read Time", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "image", title: "Cover Image URL", type: "string" },
    { name: "body", title: "Body (Markdown)", type: "text" },
    { name: "metaTitle", title: "Meta Title", type: "string" },
    { name: "metaDescription", title: "Meta Description", type: "text" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Draft", "Published"] },
      initialValue: "Published",
    },
  ],
};
