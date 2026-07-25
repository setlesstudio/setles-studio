"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Grid,
  TrendingUp,
  Compass,
  ArrowRight,
  Plus,
  Sparkles,
  Eye
} from "lucide-react";
import {
  getStoredBlogs,
  getStoredPages,
  getStoredServices,
  getStoredPricing
} from "@/lib/dashboard-store";
import { MetricCard, Panel, SEOStatusBadge } from "@/components/DashboardComponents";

export default function DashboardOverview() {
  const [blogCount, setBlogCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [pricingCount, setPricingCount] = useState(0);
  const [seoScore, setSeoScore] = useState(100);
  const [pagesList, setPagesList] = useState<any[]>([]);

  useEffect(() => {
    // Load counts
    const blogs = getStoredBlogs();
    const storedPages = getStoredPages();
    const services = getStoredServices();
    const pricing = getStoredPricing();

    setBlogCount(blogs.length);
    setServicesCount(services.length);
    setPricingCount(pricing.length);
    setPagesList(storedPages);

    // Calculate simulated SEO score based on title & description completions
    let totalFields = storedPages.length * 2 + blogs.length * 2;
    let completedFields = 0;

    storedPages.forEach(p => {
      if (p.metaTitle && p.metaTitle.trim().length > 10) completedFields++;
      if (p.metaDescription && p.metaDescription.trim().length > 20) completedFields++;
    });

    blogs.forEach(b => {
      if (b.metaTitle && b.metaTitle.trim().length > 10) completedFields++;
      if (b.metaDescription && b.metaDescription.trim().length > 20) completedFields++;
    });

    const score = totalFields > 0 ? Math.round((completedFields / totalFields) * 100) : 100;
    setSeoScore(score);
  }, []);

  const getSEOBadge = (score: number) => {
    if (score >= 90) return { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Excellent" };
    if (score >= 70) return { bg: "bg-amber-50 text-amber-700 border-amber-200", label: "Good" };
    return { bg: "bg-rose-50 text-rose-700 border-rose-200", label: "Needs Review" };
  };

  const seoStatus = getSEOBadge(seoScore);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative rounded-3xl bg-ink p-8 text-white overflow-hidden shadow-xl">
        <div className="absolute top-[-30%] right-[-10%] w-[40%] aspect-square rounded-full bg-brand/20 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            SetlesStudio CMS
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            Hello, Administrator
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
            Welcome to your content studio. Modify blog articles, adjust landing page hero sections, configure search engine metadata, and rebuild page service tiles. All changes persist in your local browser storage.
          </p>
        </div>
      </div>

      {/* Grid of stats */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Articles"
          value={blogCount}
          icon={FileText}
          linkText="Manage Blogs"
          linkHref="/dashboard/blogs"
        />

        <MetricCard
          title="Active Services"
          value={servicesCount}
          icon={Grid}
          linkText="Manage Tiles"
          linkHref="/dashboard/pages/services"
        />

        <MetricCard
          title="Pricing Plans"
          value={pricingCount}
          icon={Compass}
          linkText="Manage Packages"
          linkHref="/dashboard/pages/pricing"
        />

        <MetricCard
          title="SEO Health Score"
          value={`${seoScore}%`}
          icon={TrendingUp}
          badge={{ bg: seoStatus.bg, text: "text-ink font-bold", label: seoStatus.label }}
        />
      </div>

      {/* Main Content Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left 2 Columns: Pages list & SEO audit */}
        <div className="lg:col-span-2 space-y-6">
          <Panel
            title="Page Editor & SEO Audit"
            description="Quick status review of core website pages."
            action={
              <Link href="/dashboard/pages" className="text-xs font-bold text-brand hover:underline">
                View All
              </Link>
            }
          >
            <div className="space-y-3.5">
              {pagesList.map((page) => {
                const isComplete = page.metaTitle?.trim().length > 10 && page.metaDescription?.trim().length > 20;
                return (
                  <div key={page.pageId} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-cream/40 rounded-2xl border border-ink/[0.03] gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-ink truncate">{page.title}</h4>
                      <p className="text-xs text-ink-soft mt-0.5 font-mono truncate">{page.metaTitle || "No meta title set"}</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 w-full sm:w-auto">
                      <SEOStatusBadge isComplete={isComplete} />
                      <Link
                        href={`/dashboard/pages/${page.pageId}`}
                        className="p-1.5 hover:bg-white rounded-lg text-ink-soft hover:text-brand border border-transparent hover:border-ink/5 transition-all shadow-sm"
                        title="Customize Content"
                      >
                        <Eye size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Panel>
        </div>

        {/* Right 1 Column: Quick Action Hub & Recent Activity */}
        <div className="space-y-6">
          <Panel title="Quick Actions">
            <div className="space-y-3">
              <Link
                href="/dashboard/blogs/new"
                className="flex items-center justify-between w-full p-4 bg-brand text-white hover:bg-brand-dark rounded-2xl transition-colors font-semibold text-sm shadow-md shadow-brand/10"
              >
                Create New Post
                <Plus size={16} className="shrink-0 ml-2" />
              </Link>
              <Link
                href="/dashboard/pages/home"
                className="flex items-center justify-between w-full p-4 border border-ink/10 hover:border-brand hover:text-brand rounded-2xl transition-colors font-semibold text-sm bg-white text-ink"
              >
                Customize Home Content
                <ArrowRight size={14} className="shrink-0 ml-2" />
              </Link>
              <Link
                href="/dashboard/pages/services"
                className="flex items-center justify-between w-full p-4 border border-ink/10 hover:border-brand hover:text-brand rounded-2xl transition-colors font-semibold text-sm bg-white text-ink"
              >
                Manage Product Tiles
                <ArrowRight size={14} className="shrink-0 ml-2" />
              </Link>
            </div>
          </Panel>

          <Panel title="CMS Sandbox Instructions">
            <div className="text-xs text-ink-soft space-y-3 leading-relaxed">
              <p>
                <strong>1. Edit & Persistence:</strong> You can add or edit blog articles, customize hero copy on pages, and change pricing packages in real time.
              </p>
              <p>
                <strong>2. Character Guidance:</strong> SEO meta-tag fields will visual-assist you in keeping titles between 50-60 chars and descriptions between 150-160 chars.
              </p>
              <p>
                <strong>3. Real-Time Testing:</strong> Use the live mock visualizer next to the page forms to see your changes instantly formatted with SetlesStudio design aesthetics.
              </p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
