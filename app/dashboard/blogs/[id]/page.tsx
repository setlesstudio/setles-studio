"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Check,
  Globe,
  Sparkles,
  Eye,
  AlertCircle,
  HelpCircle,
  FileText
} from "lucide-react";
import { CharacterCounterInput } from "@/components/DashboardComponents";
import { parseMarkdownToHtml } from "@/lib/markdown";

export default function BlogEditorPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === "new";

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("AI Fashion");
  const [readTime, setReadTime] = useState("5 min read");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [status, setStatus] = useState<"Draft" | "Published">("Published");

  const [publishedAt, setPublishedAt] = useState("");
  const [savedAlert, setSavedAlert] = useState(false);
  const [previewTab, setPreviewTab] = useState<"editor" | "preview">("editor");
  const [loading, setLoading] = useState(!isNew);

  // Load existing blog from Sanity
  useEffect(() => {
    if (!isNew) {
      fetch("/api/sanity/blog")
        .then((r) => r.json())
        .then((blogs) => {
          const existing = blogs.find(
            (b: any) =>
              (typeof b.slug === "string" ? b.slug : b.slug?.current) === id
          );
          if (existing) {
            setTitle(existing.title || "");
            setSlug(typeof existing.slug === "string" ? existing.slug : existing.slug?.current || "");
            setCategory(existing.category || "AI Fashion");
            setReadTime(existing.readTime || "5 min read");
            setExcerpt(existing.excerpt || "");
            setImage(existing.image || "");
            setBody(existing.body || "");
            setMetaTitle(existing.metaTitle || "");
            setMetaDescription(existing.metaDescription || "");
            setStatus(existing.status || "Published");
            setPublishedAt(existing.publishedAt || "");
          } else {
            router.push("/dashboard/blogs");
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          router.push("/dashboard/blogs");
        });
    }
  }, [id, isNew, router]);

  // Auto-generate slug and meta tags on title change
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (isNew) {
      const autoSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      setSlug(autoSlug);

      // Populate meta title draft
      setMetaTitle(val.length > 50 ? val.substring(0, 50) : `${val} | SetlesStudio`);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !slug) {
      alert("Title and Slug are required.");
      return;
    }

    const finalPublishedAt = publishedAt || new Date().toISOString();
    const finalImage = image || "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture_thkuwm.jpg";

    // Save to Sanity only
    try {
      const res = await fetch("/api/sanity/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          category,
          readTime,
          publishedAt: finalPublishedAt,
          image: finalImage,
          bodyContent: body,
          metaTitle: metaTitle || title,
          metaDescription: metaDescription || excerpt,
          status,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Sanity save failed");
    } catch (err: any) {
      alert(`Failed to save: ${err.message}`);
      return;
    }

    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      router.push("/dashboard/blogs");
    }, 800);
  };

  const getSEOAdvice = () => {
    const advice = [];
    if (metaTitle.length < 30) advice.push("Title is too short (aim for 40-60 characters).");
    if (metaTitle.length > 60) advice.push("Title is too long (keep under 60 characters).");
    if (metaDescription.length < 100) advice.push("Description is too short (aim for 120-160 characters).");
    if (metaDescription.length > 160) advice.push("Description is too long (keep under 160 characters).");
    if (!metaDescription.toLowerCase().includes(category.toLowerCase())) {
      advice.push(`Try adding the focus keyword "${category}" to your meta description.`);
    }
    return advice;
  };

  const adviceList = getSEOAdvice();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/[0.06] pb-5">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/blogs"
            className="p-2 hover:bg-white rounded-xl border border-ink/5 text-ink-soft hover:text-ink transition-all shadow-sm"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="font-display text-xl font-bold text-ink">
              {isNew ? "New Article Creator" : "Edit Blog Article"}
            </h1>
            <p className="text-xs text-ink-soft mt-0.5">
              Draft your article, configure reading specifications, and design SERP outputs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {savedAlert && (
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 animate-pulse">
              <Check size={14} /> Saved Successfully
            </span>
          )}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
            className="py-2.5 px-3 rounded-xl border border-ink/10 bg-white focus:outline-none focus:border-brand text-xs font-bold text-ink cursor-pointer"
          >
            <option value="Draft">Draft Status</option>
            <option value="Published">Published Status</option>
          </select>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
          >
            <Save size={14} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Editor Content split columns */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left 2 Columns: Main form inputs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Editor/Preview tabs */}
          <div className="flex gap-2 p-1.5 bg-white border border-ink/[0.06] rounded-2xl max-w-xs">
            <button
              onClick={() => setPreviewTab("editor")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                previewTab === "editor"
                  ? "bg-brand text-white shadow-sm"
                  : "text-ink-soft hover:bg-cream/40"
              }`}
            >
              Compose Content
            </button>
            <button
              onClick={() => setPreviewTab("preview")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                previewTab === "preview"
                  ? "bg-brand text-white shadow-sm"
                  : "text-ink-soft hover:bg-cream/40"
              }`}
            >
              Live Preview
            </button>
          </div>

          {previewTab === "editor" ? (
            <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm space-y-5">
              {/* Row 1: Title & Slug */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                    Article Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter post title..."
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                    Slug / URL Path
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="article-slug-path"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Category & Read Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                    Article Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 bg-cream/20 focus:outline-none focus:border-brand text-sm text-ink cursor-pointer"
                  >
                    <option value="AI Fashion">AI Fashion</option>
                    <option value="eCommerce">eCommerce</option>
                    <option value="Fashion Strategy">Fashion Strategy</option>
                    <option value="Creative Production">Creative Production</option>
                    <option value="Product Updates">Product Updates</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40"
                  />
                </div>
              </div>

              {/* Cover Image URL */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Paste URL or path (e.g. /images/after-window.webp)"
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40"
                />
                {image && (
                  <div className="mt-3 relative aspect-[16/9] max-w-sm rounded-2xl overflow-hidden border border-ink/5 bg-cream">
                    <img src={image} alt="Cover Preview" className="object-cover w-full h-full" />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                  Short Excerpt / Teaser
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  placeholder="Provide a brief summary card description..."
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40 resize-y"
                  required
                />
              </div>

              {/* Body Content Markdown Editor */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                  Article Body (Markdown Syntax Supported)
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={14}
                  placeholder="### Use Markdown syntax like headings, lists, bold text...&#10;&#10;Write the content here..."
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm font-mono text-ink placeholder:text-ink-soft/40 resize-y leading-relaxed"
                />
              </div>
            </div>
          ) : (
            /* Live Simulated Preview rendered using SetlesStudio blog theme */
            <div className="bg-white rounded-3xl border border-ink/[0.06] p-8 shadow-sm max-w-4xl mx-auto space-y-6">
              <header className="border-b border-ink/[0.08] pb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  {category} • {readTime}
                </span>
                <h1 className="mt-3 font-display text-2xl sm:text-4xl font-bold leading-tight text-ink">
                  {title || "Untitled Article"}
                </h1>
                <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed">
                  {excerpt || "Excerpt description draft matches here."}
                </p>
                <p className="mt-5 text-xs text-ink-soft/50 font-medium">
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • SetlesStudio Editorial
                </p>
              </header>

              {image && (
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-cream border border-ink/5">
                  <img src={image} alt="Preview Cover" className="object-cover w-full h-full" />
                </div>
              )}

              <article className="prose prose-sm sm:prose-base max-w-none pt-4 text-ink-soft leading-relaxed space-y-4">
                {body ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: parseMarkdownToHtml(body),
                    }}
                  />
                ) : (
                  <p className="italic text-ink-soft/40">Article body is empty. Compose some content to preview.</p>
                )}
              </article>
            </div>
          )}
        </div>

        {/* Right 1 Column: SEO Panel & Google SERP Simulator */}
        <div className="space-y-6">
          {/* Google Search Engine Preview Simulator */}
          <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm">
            <h3 className="font-display text-sm font-bold text-ink mb-4 flex items-center gap-1.5">
              <Globe className="text-brand" size={16} /> Google Search Simulator
            </h3>
            <div className="p-4 bg-cream/30 rounded-2xl border border-ink/[0.03] space-y-1.5 font-sans">
              <div className="text-xs text-ink-soft/75 truncate flex items-center gap-1.5">
                <span>https://setlesstudio.com</span>
                <span>›</span>
                <span className="truncate text-ink-soft">blog</span>
                <span>›</span>
                <span className="truncate font-medium">{slug || "slug-path"}</span>
              </div>
              <div className="text-blue-800 font-display text-base font-semibold leading-snug hover:underline cursor-pointer line-clamp-2">
                {metaTitle || title || "Untitled Post | SetlesStudio"}
              </div>
              <div className="text-[12px] text-ink-soft leading-relaxed line-clamp-3">
                {metaDescription || excerpt || "Write a metadata description for search engine listings here."}
              </div>
            </div>
          </div>

          {/* SEO Input Config */}
          <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm space-y-4">
            <h3 className="font-display text-sm font-bold text-ink">SEO Tag Settings</h3>

            <CharacterCounterInput
              label="Meta Title"
              value={metaTitle}
              onChange={setMetaTitle}
              placeholder="Google Title Tag..."
              min={40}
              max={60}
            />

            <CharacterCounterInput
              label="Meta Description"
              value={metaDescription}
              onChange={setMetaDescription}
              placeholder="Search listing snippet copy..."
              min={120}
              max={160}
              type="textarea"
            />
          </div>

          {/* SEO Checklist Advisor */}
          <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm space-y-3.5">
            <h3 className="font-display text-sm font-bold text-ink">SEO Verification Checklist</h3>

            {adviceList.length > 0 ? (
              <div className="space-y-2.5">
                {adviceList.map((advice, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-amber-700 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100/50 leading-normal">
                    <AlertCircle size={14} className="shrink-0 mt-0.5 text-amber-500" />
                    <span>{advice}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-start gap-2.5 text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <Check size={16} className="shrink-0 text-emerald-600 mt-0.5" />
                <div>
                  <p className="font-bold">Perfect Optimization!</p>
                  <p className="text-[10px] text-emerald-600/80 mt-0.5">Your metadata lengths and keywords meet absolute SEO standards.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
