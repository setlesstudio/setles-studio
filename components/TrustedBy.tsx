"use client";

import Image from "next/image";
import { trustedBy } from "@/lib/data";

export default function TrustedBy() {
  const half = Math.ceil(trustedBy.length / 2);
  const row1 = [...trustedBy.slice(0, half), ...trustedBy.slice(0, half)];
  const row2 = [...trustedBy.slice(half), ...trustedBy.slice(half)];

  return (
    <section className="overflow-hidden bg-cream py-14">
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-soft/50">
        Trusted by brands worldwide
      </p>

      <div className="mt-8 space-y-8">
        <div className="relative">
          <div className="flex w-max animate-marquee [animation-duration:45s] items-center gap-3 pr-3">
            {row1.map((brand, i) => (
              <div
                key={`r1-${brand.name}-${i}`}
                className="flex h-20 w-52 shrink-0 items-center justify-center px-4"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
        </div>

        <div className="relative">
          <div className="flex w-max animate-marquee [animation-direction:reverse] [animation-duration:50s] items-center gap-3 pr-3">
            {row2.map((brand, i) => (
              <div
                key={`r2-${brand.name}-${i}`}
                className="flex h-20 w-52 shrink-0 items-center justify-center px-4"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
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
