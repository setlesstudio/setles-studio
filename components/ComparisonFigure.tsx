import type { ReactNode } from "react";

export default function ComparisonFigure({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure className="flex min-w-0 flex-col gap-2">
      {children}
      <figcaption className="text-sm leading-relaxed text-ink-soft">{caption}</figcaption>
    </figure>
  );
}
