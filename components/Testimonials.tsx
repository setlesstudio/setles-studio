"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials as defaultTestimonials } from "@/lib/data";
import { getStoredTestimonials, TestimonialTile } from "@/lib/dashboard-store";

function TestimonialCard({ t }: { t: TestimonialTile }) {
  return (
    <figure className="card w-[85vw] shrink-0 p-6 sm:w-[340px] text-left">
      <span className="font-display text-5xl leading-none text-brand">&ldquo;</span>
      <blockquote className="mt-1 text-[15px] leading-relaxed text-ink-soft">
        {t.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {t.image ? (
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <Image src={t.image} alt="" unoptimized={!t.image.startsWith("/images/")} width={36} height={36} className="h-9 w-9 object-cover rounded-full" />
            </div>
          ) : (
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft font-display font-semibold text-brand text-xs">
              {t.name.charAt(0)}
            </span>
          )}
          <div>
            <p className="text-sm font-bold text-ink">{t.name}</p>
            <p className="text-xs text-ink-soft/70">{t.role}</p>
          </div>
        </div>
        <div className="flex shrink-0 gap-0.5 text-brand" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [list, setList] = useState<TestimonialTile[]>([]);

  useEffect(() => {
    setList(getStoredTestimonials());

    const handleUpdate = () => {
      setList(getStoredTestimonials());
    };
    window.addEventListener("setles_db_update", handleUpdate);
    return () => window.removeEventListener("setles_db_update", handleUpdate);
  }, []);

  const items = list.length > 0 ? list : defaultTestimonials;
  const split = Math.ceil(items.length / 2);
  const first = items.slice(0, split);
  const second = items.length > 1 ? items.slice(split).reverse() : first;
  const row1 = [...first, ...first];
  const row2 = [...second, ...second];

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee [animation-duration:60s] gap-4 pr-4">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee [animation-direction:reverse] [animation-duration:65s] gap-4 pr-4">
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </div>
  );
}
