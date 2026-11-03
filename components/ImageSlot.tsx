import { imageDescription } from "@/lib/image-descriptions";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

/**
 * Renders an image when `src` is provided, or a clearly labelled placeholder
 * slot when it's an empty string. To add an image later: drop the file in
 * /public/images and set the path in lib/data.ts (or the page) — no other
 * code changes needed.
 */
export default function ImageSlot({
  src,
  alt,
  label = "Image slot",
  className = "",
  imageClassName = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  quality = 75,
  loading,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  loading?: "lazy" | "eager";
}) {
  if (!src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-[repeating-linear-gradient(45deg,#f6f1ea_0px,#f6f1ea_14px,#fbf8f3_14px,#fbf8f3_28px)] ${className}`}
        role="img"
        aria-label={`${label} — placeholder`}
      >
        <div className="flex flex-col items-center gap-2 p-6 text-center">
          <ImageIcon className="h-7 w-7 text-ink/25" />
          <span className="text-xs font-semibold uppercase tracking-widest text-ink/35">
            {label}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt ? imageDescription(src, alt) : ""}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        loading={priority ? undefined : loading ?? "lazy"}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
