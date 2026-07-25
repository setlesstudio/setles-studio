export const pageSchema = {
  name: "page",
  title: "Page SEO",
  type: "document",
  fields: [
    { name: "pageId", title: "Page ID", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "metaTitle", title: "Meta Title", type: "string" },
    { name: "metaDescription", title: "Meta Description", type: "text" },
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroText", title: "Hero Text", type: "text" },
    { name: "heroImage", title: "Hero Image URL", type: "string" },
  ],
};
