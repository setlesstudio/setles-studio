"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Search, Filter, Edit2, Trash2, Sparkles, FileText, AlertTriangle, X } from "lucide-react";
import { DashboardHeader, SEOStatusBadge } from "@/components/DashboardComponents";

interface BlogPost {
  _id: string;
  title: string;
  slug: any;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  status: string;
  metaTitle: string;
  metaDescription: string;
}

export default function BlogManagerPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmBlog, setConfirmBlog] = useState<BlogPost | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/sanity/blog");
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
      const cats = Array.from(new Set((Array.isArray(data) ? data : []).map((b: BlogPost) => b.category))).filter(Boolean) as string[];
      setCategories(cats);
    } catch (err) {
      console.error("Failed to load blogs:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const getSlugString = (slug: any) =>
    typeof slug === "string" ? slug : slug?.current || "";

  const handleDelete = async () => {
    if (!confirmBlog) return;
    const slug = getSlugString(confirmBlog.slug);
    setDeleting(true);
    try {
      const res = await fetch("/api/sanity/blog", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      setBlogs((prev) => prev.filter((b) => b._id !== confirmBlog._id));
    } catch (err: any) {
      alert(`Delete failed: ${err.message}`);
    } finally {
      setDeleting(false);
      setConfirmBlog(null);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || blog.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    } catch { return dateStr; }
  };

  return (
    <div className="space-y-6">
      {/* Custom Delete Confirmation Modal */}
      {confirmBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl border border-ink/[0.06] p-8 max-w-sm w-full mx-4 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 rounded-2xl bg-red-50 flex items-center justify-center">
                <AlertTriangle size={20} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-ink">Delete Article?</h3>
                <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                  <span className="font-semibold text-ink">&ldquo;{confirmBlog.title}&rdquo;</span> will be permanently deleted and cannot be recovered.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setConfirmBlog(null)}
                className="flex-1 py-2.5 rounded-xl border border-ink/10 text-xs font-bold text-ink-soft hover:bg-cream/40 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      <DashboardHeader
        title="Blog Manager"
        description="Write, modify, and optimize SEO tags for articles in SetlesStudio."
        action={
          <Link
            href="/dashboard/blogs/new"
            className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-dark px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-brand/20 shrink-0 cursor-pointer"
          >
            <Plus size={16} />
            New Article
          </Link>
        }
      />

      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-2xl border border-ink/[0.06] p-4 shadow-sm">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-soft/45">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search article titles or excerpts..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm transition-colors text-ink placeholder:text-ink-soft/45"
          />
        </div>
        <div className="flex items-center gap-2 md:w-64 shrink-0">
          <span className="text-ink-soft text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0">
            <Filter size={12} /> Filter:
          </span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full py-2.5 px-3 rounded-xl border border-ink/10 bg-white focus:outline-none focus:border-brand text-sm text-ink cursor-pointer"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white p-5 rounded-3xl border border-ink/[0.06] shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center">
            <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ink/[0.06] bg-cream/40 text-xs font-bold uppercase tracking-wider text-ink-soft/75">
                  <th className="py-4.5 px-6">Article Details</th>
                  <th className="py-4.5 px-6">Category</th>
                  <th className="py-4.5 px-6">Status</th>
                  <th className="py-4.5 px-6">SEO Verification</th>
                  <th className="py-4.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/[0.05]">
                {filteredBlogs.map((blog) => {
                  const isSeoComplete =
                    blog.metaTitle?.trim().length >= 10 &&
                    blog.metaDescription?.trim().length >= 20;
                  const slugStr = getSlugString(blog.slug);

                  return (
                    <tr key={blog._id} className="hover:bg-cream/20 transition-colors text-sm group">
                      <td className="py-5 px-6 max-w-sm">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 shrink-0 rounded-lg bg-cream flex items-center justify-center text-ink-soft/60 group-hover:text-brand transition-colors">
                            <FileText size={18} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-ink truncate group-hover:text-brand transition-colors">{blog.title}</h4>
                            <p className="text-xs text-ink-soft mt-1 truncate leading-relaxed">{blog.excerpt || "No excerpt defined."}</p>
                            <div className="flex items-center gap-2 mt-1.5 text-[10px] text-ink-soft/70">
                              <span>{formatDate(blog.publishedAt)}</span>
                              <span>•</span>
                              <span>{blog.readTime || "3 min read"}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cream text-ink-soft border border-ink/[0.04]">
                          {blog.category || "General"}
                        </span>
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap">
                        {blog.status === "Published" ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-0.5">Published</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-0.5">Draft</span>
                        )}
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap">
                        <SEOStatusBadge isComplete={isSeoComplete} />
                      </td>
                      <td className="py-5 px-6 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2.5">
                          <Link
                            href={`/dashboard/blogs/${slugStr}`}
                            className="p-2 hover:bg-cream rounded-xl text-ink-soft hover:text-brand border border-transparent hover:border-ink/5 transition-all"
                            title="Edit Article"
                          >
                            <Edit2 size={14} />
                          </Link>
                          <button
                            onClick={() => setConfirmBlog(blog)}
                            className="p-2 hover:bg-red-50 rounded-xl text-ink-soft hover:text-red-600 border border-transparent hover:border-red-100 transition-all cursor-pointer"
                            title="Delete Article"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center max-w-sm mx-auto">
            <div className="h-12 w-12 rounded-2xl bg-cream text-brand flex items-center justify-center mx-auto mb-4 border border-ink/[0.04]">
              <Sparkles size={20} />
            </div>
            <h3 className="font-display text-base font-bold text-ink">No Articles Found</h3>
            <p className="text-xs text-ink-soft mt-1 leading-relaxed">No articles found. Create a new blog post to get started.</p>
            <button
              onClick={() => { setSearch(""); setCategoryFilter("All"); }}
              className="mt-4 text-xs font-bold text-brand hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
