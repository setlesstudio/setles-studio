"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Grid,
  FolderOpen
} from "lucide-react";
import {
  getStoredPages,
  getStoredServices,
  getStoredPricing,
  getStoredTestimonials,
  getStoredValueProps
} from "@/lib/dashboard-store";
import { DashboardHeader, SEOStatusBadge } from "@/components/DashboardComponents";

export default function PagesAndTilesManager() {
  const [pages, setPages] = useState<any[]>([]);
  const [counts, setCounts] = useState({
    services: 0,
    pricing: 0,
    testimonials: 0,
    valueProps: 0,
  });

  useEffect(() => {
    setPages(getStoredPages());
    setCounts({
      services: getStoredServices().length,
      pricing: getStoredPricing().length,
      testimonials: getStoredTestimonials().length,
      valueProps: getStoredValueProps().length,
    });
  }, []);

  const getPageInfo = (pageId: string) => {
    switch (pageId) {
      case "home":
        return {
          description: "Main website landing page. Showcases value propositions, service categories, before/after imagery, and brand banners.",
          tiles: [
            { label: "Value Props", count: counts.valueProps },
            { label: "Services Preview", count: counts.services }
          ],
        };
      case "about":
        return {
          description: "Introduction to SetlesStudio. Explains our mission, team experts, and technology workflows.",
          tiles: [
            { label: "Team Members", count: 4 }
          ],
        };
      case "services":
        return {
          description: "Deep dive of all fashion content offerings. Includes studio photography, lifestyle campaigns, footwear, video ads.",
          tiles: [
            { label: "Apparel Services", count: counts.services }
          ],
        };
      case "pricing":
        return {
          description: "Flexible packages (Starter, Growth, Premium) for ecommerce brands, plus customer testimonials and FAQ entries.",
          tiles: [
            { label: "Pricing Packages", count: counts.pricing },
            { label: "Client Testimonials", count: counts.testimonials }
          ],
        };
      case "contact":
        return {
          description: "Get in touch form, consulting booking triggers, and WhatsApp links. Previews free sample requests.",
          tiles: [],
        };
      default:
        return { description: "General page settings.", tiles: [] };
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <DashboardHeader
        title="Pages & Tiles"
        description="Customize website landing page layouts, edit page headings, and build custom modular tiles/cards."
      />

      {/* Pages Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => {
          const info = getPageInfo(page.pageId);
          const isSeoValid = page.metaTitle?.trim().length >= 10 && page.metaDescription?.trim().length >= 20;

          return (
            <div
              key={page.pageId}
              className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-brand-soft text-brand flex items-center justify-center">
                    <FolderOpen size={18} />
                  </div>
                  <SEOStatusBadge isComplete={isSeoValid} />
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold text-ink mt-4">{page.title}</h3>
                <p className="text-xs font-mono text-brand font-semibold mt-1">
                  /{page.pageId === "home" ? "" : page.pageId}
                </p>
                <p className="text-xs text-ink-soft mt-3 leading-relaxed">
                  {info.description}
                </p>

                {/* Sub-Tiles */}
                {info.tiles.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-ink/[0.05] space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-ink-soft/70">Modular Tiles</h4>
                    <div className="flex flex-wrap gap-2">
                      {info.tiles.map((tile, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10px] font-bold bg-cream text-ink-soft rounded-lg px-2.5 py-1 border border-ink/[0.03]"
                        >
                          <Grid size={8} /> {tile.label}: {tile.count}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-ink/[0.05]">
                <Link
                  href={`/dashboard/pages/${page.pageId}`}
                  className="flex items-center justify-between w-full text-xs font-bold text-brand hover:text-brand-dark transition-all"
                >
                  Configure Content & SEO
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
