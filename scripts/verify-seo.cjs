const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");

function load(relative, mocks = {}) {
  const filename = path.join(root, relative);
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  const mod = new Module(filename, module);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  const originalRequire = mod.require.bind(mod);
  mod.require = name => Object.hasOwn(mocks, name) ? mocks[name] : originalRequire(name);
  mod._compile(compiled, filename);
  return mod.exports;
}

async function main() {
  const site = { name: "SetlesStudio", url: "https://www.setlesstudio.com" };
  const seo = load("lib/seo.ts", { "@/lib/data": { site } });
  assert.equal(seo.brandedTitle("Contact | SetlesStudio | SetlesStudio"), "Contact | SetlesStudio");
  assert.equal(seo.blogTitle("Fabric Texture Guide", "Fabric Texture Gu"), "Fabric Texture Guide | SetlesStudio");
  assert.equal(seo.blogTitle("Fabric Texture Guide", "Custom SEO Title"), "Custom SEO Title | SetlesStudio");
  assert.equal(seo.breadcrumbData([{ name: "Blog", path: "/blog" }]).itemListElement[0].item, `${site.url}/blog`);

  const FAQ = load("components/FAQ.tsx").default;
  const faq = renderToStaticMarkup(React.createElement(FAQ, { faqs: [{ q: "First?", a: "First answer" }, { q: "Second?", a: "Second answer" }] }));
  assert.match(faq, /Second answer/);
  assert.match(faq, /hidden=""/);
  assert.match(faq, /aria-controls=/);

  const StructuredData = load("components/StructuredData.tsx").default;
  const script = renderToStaticMarkup(React.createElement(StructuredData, { data: { name: "</script><img src=x>" } }));
  assert.equal((script.match(/<\/script>/g) || []).length, 1);
  const json = JSON.parse(script.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, ""));
  assert.equal(json.name, "</script><img src=x>");

  const imageCopy = load("lib/image-descriptions.ts");
  const PageHero = load("components/PageHero.tsx", { "@/lib/image-descriptions": imageCopy, "./Reveal": ({ children }) => children }).default;
  const hero = renderToStaticMarkup(React.createElement(PageHero, { eyebrow: "Service", title: "Photography", image: "/desktop.jpg", imageMobile: "/mobile.jpg", imageAlt: "Fashion model" }));
  assert.equal((hero.match(/<img\b/g) || []).length, 1);
  assert.match(hero, /<source media="\(max-width: 767px\)"/);
  assert.match(hero, /q=85/);

  const markdown = load("lib/markdown.ts", { "@/lib/image-descriptions": imageCopy });
  assert.doesNotMatch(markdown.parseMarkdownToHtml("# An article section"), /<h1/);

  const sitemap = load("app/sitemap.ts", {
    "@/lib/data": { site, services: [{ id: "studio" }] },
    "@/lib/sanity-queries": { getAllBlogs: async () => [
      { status: "Published", slug: { current: "live" }, _updatedAt: "2026-10-30T00:00:00Z" },
      { status: "Draft", slug: { current: "draft" } },
      { status: "Published", slug: "invalid-date", publishedAt: "invalid" },
    ] },
  }).default;
  const entries = await sitemap();
  assert.ok(entries.some(entry => entry.url.endsWith("/blog/live") && entry.lastModified instanceof Date));
  assert.ok(!entries.some(entry => entry.url.endsWith("/blog/draft")));
  assert.ok(entries.filter(entry => !entry.url.includes("/blog/")).every(entry => !entry.lastModified));
  assert.equal(entries.find(entry => entry.url.endsWith("/blog/invalid-date")).lastModified, undefined);

  const api = load("app/api/sanity/blog/route.ts");
  for (const method of ["GET", "POST", "DELETE"]) {
    const response = api[method]();
    assert.equal(response.status, 403);
    assert.equal(response.headers.get("cache-control"), "no-store");
  }
  console.log("SEO checks passed: titles, breadcrumbs, FAQ HTML, JSON-LD escaping, responsive hero, headings, sitemap, and closed admin API.");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
