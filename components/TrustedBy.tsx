"use client";

import Image from "next/image";
import { trustedByRow1, trustedByRow2 } from "@/lib/data";

export default function TrustedBy() {
  const row1 = [...trustedByRow1, ...trustedByRow1];
  const row2 = [...trustedByRow2, ...trustedByRow2];

  return (
    <section className="overflow-hidden bg-cream py-14">
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-soft/50">
        Trusted by brands worldwide
      </p>

      <div className="mt-8 space-y-8">
        <div className="relative">
          <div className="flex w-max animate-marquee items-center gap-12">
            {row1.map((brand, i) => (
              <div
                key={`r1-${brand.name}-${i}`}
                className={`flex shrink-0 items-center justify-center ${brand.name === "Xanderlocket" ? "h-28 w-64" : "h-20 w-52"}`}
              >
                <div className="relative h-full w-full">
                  <Image src={brand.logo} alt={brand.name} fill unoptimized sizes="256px" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
        </div>

        <div className="relative">
          <div className="flex w-max animate-marquee-reverse items-center gap-12">
            {row2.map((brand, i) => (
              <div
                key={`r2-${brand.name}-${i}`}
                className="flex h-20 w-52 shrink-0 items-center justify-center"
              >
                <div className="relative h-full w-full">
                  <Image src={brand.logo} alt={brand.name} fill unoptimized sizes="208px" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
