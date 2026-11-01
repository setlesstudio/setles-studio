import { site } from "@/lib/data";

export function brandedTitle(title: string) {
  const clean = title.replace(/(?:\s*\|\s*Setles\s*Studio)+\s*$/i, "").trim();
  return `${clean} | ${site.name}`;
}

// Older dashboard versions cut metadata titles in the middle of a word.
// Preserve intentional custom titles, but recover clipped copies of the headline.
export function blogTitle(headline: string, metaTitle?: string) {
  const title = headline.trim();
  const meta = metaTitle?.trim();
  return brandedTitle(!meta || (meta.length < title.length && title.startsWith(meta)) ? title : meta);
}

export function breadcrumbData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}
