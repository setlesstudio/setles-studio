"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto grid max-w-4xl gap-4">
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
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold">{f.q}</span>
              <Plus
                size={18}
                className={`shrink-0 text-brand transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
