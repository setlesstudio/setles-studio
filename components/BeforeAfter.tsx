"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

/**
 * Draggable before/after reveal. "Before" is the flat product photo,
 * "after" is the finished AI model shot.
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt = "Flat product photo before AI production",
  afterAlt = "Finished AI model shot",
  className = "",
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative select-none overflow-hidden rounded-3xl ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      {/* After (full) */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
        className="object-cover"
      />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="absolute inset-0 bg-cream">
          <Image
            src={before}
            alt={beforeAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-contain p-8"
          />
        </div>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-lg transition-transform group-hover:scale-105">
          <ChevronsLeftRight size={20} />
        </div>
      </div>

      {/* Accessible slider control */}
      <input
        type="range"
        min={4}
        max={96}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-x-0 bottom-0 z-20 h-10 w-full cursor-ew-resize opacity-0"
      />

      <span className="absolute left-4 top-4 z-10 rounded-full bg-ink/75 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
