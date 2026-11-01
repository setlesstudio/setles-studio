"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  faqs: FAQItem[];
  className?: string;
};

export default function FAQ({ faqs, className = "" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className={`mx-auto grid max-w-4xl gap-4 ${className}`}>
      {faqs.map((f, i) => {
        const isOpen = open === i;

        return (
          <div
            key={f.q}
            className={`card overflow-hidden transition-colors ${
              isOpen ? "border-brand/30" : ""
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${id}-answer-${i}`}
              id={`${id}-question-${i}`}
            >
              <span className="font-semibold">{f.q}</span>
              <Plus
                size={18}
                className={`shrink-0 text-brand transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>

              <p
                id={`${id}-answer-${i}`}
                aria-labelledby={`${id}-question-${i}`}
                hidden={!isOpen}
                className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft"
              >
                {f.a}
              </p>
          </div>
        );
      })}
    </div>
  );
}
