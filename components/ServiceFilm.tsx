"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function ServiceFilm({ src, poster, title }: { src: string; poster: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return playing ? (
    <video src={src} poster={poster} aria-label={title} controls playsInline autoPlay
      className="block h-full w-full object-contain" />
  ) : (
    <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${title} sample`}
      className="relative grid h-full w-full place-items-center">
      <img src={poster} alt="" loading="lazy" width="640" height="1138" className="absolute inset-0 h-full w-full object-contain" />
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-white text-ink"><Play size={19} fill="currentColor" aria-hidden="true" /></span>
    </button>
  );
}
