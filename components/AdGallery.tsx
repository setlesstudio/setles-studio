"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const titles = [
  "Burgundy handbag on a city doorstep",
  "Graphic tee and gold-print skirt on the street",
  "Burgundy coat and knee-high boots at the crosswalk",
  "Black biker jacket in the studio",
];

export default function AdGallery() {
  const [active, setActive] = useState<number | null>(null);
  return <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
    {titles.map((title, index) => {
      const base = "/videos/fashion-ads/ad-" + (index + 1);
      return <figure key={base} className="overflow-hidden rounded-2xl bg-cream">
        <div className="relative aspect-[9/16] bg-black">
          {active === index ? <video className="h-full w-full object-contain" src={base + ".mp4"}
            poster={base + ".webp"} controls autoPlay playsInline aria-label={title} /> :
            <button type="button" aria-label={"Play " + title} onClick={() => setActive(index)}
              className="relative grid h-full w-full place-items-center">
              <img loading="lazy" src={base + ".webp"} alt="" width={640} height={1138} className="absolute inset-0 h-full w-full object-contain" />
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-black"><Play aria-hidden="true" /></span>
            </button>}
        </div>
        <figcaption className="px-5 py-3 font-medium">{title}</figcaption>
      </figure>;
    })}
  </div>;
}
