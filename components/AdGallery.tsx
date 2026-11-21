"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

const clips = ["generation (3)", "generation (16)", "generation (53)", "hf_20261101_160947_503dfc19-9b3f-46b1-b7a2-5bff8f2d67ce"];

export default function AdGallery() {
  const [opened, setOpened] = useState<number[]>([]);
  const [failed, setFailed] = useState<number[]>([]);
  const stage = useRef<HTMLDivElement>(null);
  return <div ref={stage} className="grid gap-5 sm:grid-cols-2">
    {clips.map((name, index) => {
      const label = `Fashion video ad ${index + 1}`;
      const base = "/videos/fashion-ads/" + encodeURIComponent(name);
      return <figure key={name} className="overflow-hidden rounded-2xl bg-cream">
        <div className="relative grid aspect-[4/5] place-items-center bg-black">
          {opened.includes(index) ? <video controls playsInline autoPlay preload="none" aria-label={label}
            className="h-full w-full object-contain" src={base + ".mp4"} poster={base + ".webp"}
            onError={() => setFailed(previous => [...previous, index])}
            onPlay={event => {
              const current = event.currentTarget;
              stage.current?.querySelectorAll("video").forEach(video => { if (video !== current) video.pause(); });
            }} /> :
            <button type="button" onClick={() => setOpened(previous => [...previous, index])} aria-label={"Play " + label}
              className="relative grid h-full w-full place-items-center">
              <img alt="" loading="lazy" src={base + ".webp"} className="absolute inset-0 h-full w-full object-contain" />
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-black"><Play aria-hidden="true" /></span>
            </button>}
          {failed.includes(index) && <p role="status" className="absolute rounded-lg bg-black px-4 py-2 text-white">This video could not load.</p>}
        </div>
        <figcaption className="px-5 py-3 font-medium">{label}</figcaption>
      </figure>;
    })}
  </div>;
}
