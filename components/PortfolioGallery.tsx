"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlot from "./ImageSlot";

type Item = {
  src: string;
  alt: string;
  category: "Studio" | "Lifestyle" | "Campaign" | "Footwear" | "Bags";
  tall?: boolean;
};

const items: Item[] = [
  { src: "/images/after-walk.jpg", alt: "Navy activewear set, lifestyle street scene", category: "Lifestyle", tall: true },
  { src: "/images/studio-pink.png", alt: "Pink SALTY activewear set, studio shot", category: "Studio" },
  { src: "/images/studio-pink-2.jpeg", alt: "Pink SALTY activewear set, studio shot", category: "Studio" },
  { src: "/images/luxury-stairs.jpg", alt: "Fuchsia two piece campaign on stairs", category: "Campaign", tall: true },
  { src: "/images/heels-product.jpeg", alt: "Black heels editorial product shot", category: "Footwear" },
  { src: "/images/footwear-heels.png", alt: "Black heels editorial product shot", category: "Footwear" },
  { src: "/images/footwear-heels-2.jpeg", alt: "Closeup Black heels editorial product shot", category: "Footwear" },
  { src: "/images/footwear-heels-3.jpeg", alt: "Closeup Black heels editorial product shot", category: "Footwear" },
  { src: "/images/after-window.jpg", alt: "Navy activewear set, window lifestyle scene", category: "Lifestyle", tall: true },
  { src: "/images/lifestyle-men.png", alt: "Menswear knit set, café lifestyle scene", category: "Lifestyle", tall: true },
  { src: "/images/bags-dress.png", alt: "Straw handbag with embroidered dress", category: "Bags" },
  { src: "/images/bags-shoot.jpeg", alt: "Luxury bag editorial shoot", category: "Bags" },
  { src: "/images/bags-shoot-2.jpeg", alt: "Luxury bag styled shoot", category: "Bags" },
  { src: "/images/bags-shoot-1.jpeg", alt: "Luxury bag product shoot", category: "Bags" },
  { src: "/images/bags-shoot-with-model.jpeg", alt: "Luxury bag on model", category: "Bags", tall: true },
  { src: "/images/studio-long-coat-man.png", alt: "Man in long coat, studio product shot", category: "Studio" },
  { src: "/images/lifestyle-beach-pink-dress.png", alt: "Pink dress, beach lifestyle scene", category: "Lifestyle", tall: true },
  { src: "/images/studio-white-shirt-gray-shorts-man.png", alt: "Man in white shirt and gray shorts, studio shot", category: "Studio" },
  { src: "/images/multiple-models-environment.png", alt: "Multiple models in outdoor environment, campaign shoot", category: "Campaign", tall: true },
  { src: "/images/lifestyle-robe-balcony.png", alt: "Woman in patterned robe on balcony with coffee", category: "Lifestyle", tall: true },
  { src: "/images/lifestyle-pink-swimsuit-coast.png", alt: "Woman in pink swimsuit on coastal rocks", category: "Lifestyle", tall: true },
  { src: "/images/lifestyle-plaid-shirt-indoor.png", alt: "Woman in red plaid shirt, indoor lifestyle scene", category: "Lifestyle", tall: true },
  { src: "/images/campaign-men-bomber-outdoor.png", alt: "Man in black bomber jacket, outdoor campaign", category: "Campaign", tall: true },
  { src: "/images/campaign-men-bomber-outdoor-2.jpeg", alt: "Man in black bomber jacket, outdoor campaign", category: "Campaign", tall: true },
];

const filters = ["All", "Studio", "Lifestyle", "Campaign", "Footwear", "Bags"] as const;

export default function PortfolioGallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [minHeight, setMinHeight] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const visible = items.filter((i) => active === "All" || i.category === active);

  function handleFilterChange(f: (typeof filters)[number]) {
    if (galleryRef.current) {
      setMinHeight(galleryRef.current.offsetHeight);
    }
    setActive(f);
    const newCount = f === "All" ? items.length : items.filter((i) => i.category === f).length;
    const clearAfter = (newCount * 0.06 + 0.5 + 0.2) * 1000;
    setTimeout(() => setMinHeight(0), clearAfter);
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => handleFilterChange(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === f
                ? "bg-brand text-white"
                : "bg-white text-ink-soft hover:text-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div ref={galleryRef} layout style={{ minHeight: minHeight || undefined }} className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <motion.figure
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.15 } }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl"
            >
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ImageSlot
                  src={item.src}
                  alt={item.alt}
                  label={item.alt}
                  className={`w-full ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              </motion.div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  {item.category}
                </span>
                <p className="text-sm font-semibold text-white">{item.alt}</p>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
