/**
 * Utility to parse Markdown and raw HTML content into formatted HTML strings for blog posts.
 * Supports HTML links (<a href="...">...</a>), Markdown links ([text](url)), bold, italic, headings, lists, and tables.
 */
export function parseMarkdownToHtml(markdownText: string): string {
  if (!markdownText) return "";

  // Split into block paragraphs by double linebreaks
  const blocks = markdownText.split(/\n\n+/);

  const htmlBlocks = blocks.map((block) => {
    let trimmed = block.trim();
    if (!trimmed) return "";

    // 1. Headings
    if (trimmed.startsWith("### ")) {
      const title = processInlineFormatting(trimmed.substring(4));
      return `<h3 class="font-display font-semibold text-xl text-ink mt-8 mb-3 leading-snug">${title}</h3>`;
    }
    if (trimmed.startsWith("## ")) {
      const title = processInlineFormatting(trimmed.substring(3));
      return `<h2 class="font-display font-semibold text-2xl text-ink mt-10 mb-4 leading-tight">${title}</h2>`;
    }
    if (trimmed.startsWith("# ")) {
      const title = processInlineFormatting(trimmed.substring(2));
      return `<h1 class="font-display font-bold text-3xl text-ink mt-10 mb-4 leading-tight">${title}</h1>`;
    }

    // 2. Unordered or Ordered Lists
    const lines = trimmed.split("\n");
    const isList = lines.every((line) => /^(?:[0-9]+\.|-|\*)\s+/.test(line.trim()));
    if (isList) {
      const itemsHtml = lines
        .map((line) => {
          const itemText = line.trim().replace(/^(?:[0-9]+\.|-|\*)\s+/, "");
          return `<li class="leading-relaxed">${processInlineFormatting(itemText)}</li>`;
        })
        .join("");
      return `<ul class="list-disc pl-6 space-y-2 my-4 text-ink-soft">${itemsHtml}</ul>`;
    }

    // 3. Tables
    if (trimmed.includes("|") && lines.length > 1) {
      const rows = lines.filter((l) => l.includes("|") && !l.includes("---"));
      if (rows.length > 0) {
        const tableHtml = rows
          .map((row, idx) => {
            const cells = row.split("|").filter((c, i, a) => i > 0 && i < a.length - 1);
            const cellTag = idx === 0 ? "th" : "td";
            const cellClasses = idx === 0 
              ? "py-3 px-4 bg-cream/60 font-bold text-ink text-left border-b border-ink/10" 
              : "py-3 px-4 border-b border-ink/5 text-ink-soft";
            const cellsHtml = cells
              .map((c) => `<${cellTag} class="${cellClasses}">${processInlineFormatting(c.trim())}</${cellTag}>`)
              .join("");
            return `<tr>${cellsHtml}</tr>`;
          })
          .join("");
        return `<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse border border-ink/10 rounded-2xl overflow-hidden">${tableHtml}</table></div>`;
      }
    }

    // 4. Paragraph
    const paraHtml = processInlineFormatting(trimmed).replace(/\n/g, "<br/>");
    return `<p class="text-ink-soft leading-relaxed my-4">${paraHtml}</p>`;
  });

  return htmlBlocks.filter(Boolean).join("");
}

function processInlineFormatting(text: string): string {
  if (!text) return "";
  let formatted = text;

  // Replace Markdown links: [Link Title](https://example.com) or [Link Title](/services)
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, linkText, url) => {
      const isExternal = url.startsWith("http");
      const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${url}" ${targetAttr} class="text-brand font-semibold underline decoration-brand/30 hover:decoration-brand hover:text-brand-dark transition-all">${linkText}</a>`;
    }
  );

  // Style raw HTML links <a href="...">...</a> if not already styled
  formatted = formatted.replace(
    /<a\s+(?:(?!\bclass=)[^>])*(?:href=["']([^"']+)["'])[^>]*>(.*?)<\/a>/gi,
    (_, url, linkText) => {
      const isExternal = url.startsWith("http");
      const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${url}" ${targetAttr} class="text-brand font-semibold underline decoration-brand/30 hover:decoration-brand hover:text-brand-dark transition-all">${linkText}</a>`;
    }
  );

  // Bold **text**
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-ink">$1</strong>');

  // Italic *text*
  formatted = formatted.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

  return formatted;
}
