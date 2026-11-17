"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { portfolioCollections } from "@/lib/portfolio-collections";

const filters = ["All projects", "Beauty & skincare", "Handbags", "Footwear", "Fashion", "Activewear", "Lifestyle"] as const;
type Category = typeof filters[number];

export default function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All projects");
  const visible = portfolioCollections.filter(collection => active === "All projects" || collection.category === active);
  const imageCount = visible.reduce((count, collection) => count + collection.images.length, 0);

  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter portfolio by category">
        {filters.map(filter => (
          <button key={filter} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${active === filter ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink-soft hover:border-brand/50 hover:text-brand"}`}>
            {filter}
          </button>
        ))}
      </div>
      <p className="mb-8 text-center text-xs tracking-wide text-ink-soft" role="status" aria-live="polite">
        {visible.length} collections · {imageCount} images · Product references first
      </p>
      <div className="space-y-8" data-portfolio-collections>
        {visible.map(collection => (
          <section key={collection.id} className="rounded-3xl border border-ink/10 bg-[#fbfaf8] p-4 sm:p-6 lg:p-7" aria-labelledby={`collection-${collection.id}`} data-collection={collection.id}>
            <div className="mx-auto mb-5 flex max-w-5xl flex-col gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">{collection.category}</p>
                <h3 id={`collection-${collection.id}`} className="mt-2 font-display text-xl font-semibold sm:text-2xl">{collection.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">Product reference, followed by model styling and campaign imagery.</p>
              </div>
              <Link href={collection.href} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:text-ink">
                Explore this service <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 md:gap-x-4" data-project-grid>
              {collection.images.map(image => (
                <figure key={image.src} data-reference={image.reference}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#f4f3f0] ring-1 ring-ink/10">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 250px, 44vw" quality={82} loading="lazy" className="object-contain" />
                  </div>
                  <figcaption className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-ink-soft">
                    {image.reference && <span className="shrink-0 rounded bg-ink px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">Product</span>}
                    <span>{image.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

