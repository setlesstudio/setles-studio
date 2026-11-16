"use client";

import ImageSlot from "./ImageSlot";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Category = "All work" | "Fashion" | "Handbags" | "Footwear" | "Lifestyle" | "Campaigns" | "Beauty & skincare";

type GalleryImage = { src: string; alt: string; caption: string; role: "Original product" | "AI model result" | "AI lifestyle result" };
type Collection = { id: string; title: string; category: Exclude<Category, "All work">; summary: string; service: string; href: string; images: GalleryImage[] };

const collections: Collection[] = [
  {
    id: "coral-tote",
    title: "Coral tote — from product photo to campaign",
    category: "Handbags",
    summary: "A clean product reference developed into coordinated studio and lifestyle handbag imagery.",
    service: "AI Handbag Photography",
    href: "/services/bags-accessories-realistic-ai-photography",
    images: [
      { src: "/images/coral-tote-product.webp", alt: "Original coral canvas tote bag product photograph on a clean background", caption: "Original product photograph", role: "Original product" },
      { src: "/images/ai-handbag-standing-model.webp", alt: "AI fashion model standing with a coral tote bag in a green tropical setting", caption: "Standing model result", role: "AI model result" },
      { src: "/images/ai-handbag-seated-model.webp", alt: "AI fashion model seated with a coral tote bag in a studio setting", caption: "Seated model result", role: "AI model result" },
      { src: "/images/ai-handbag-studio-chair.webp", alt: "Coral tote bag styled beside a seated AI fashion model on a studio chair", caption: "Studio lifestyle result", role: "AI lifestyle result" },
    ],
  },
  {
    id: "burgundy-look",
    title: "Burgundy outfit — coordinated fashion looks",
    category: "Fashion",
    summary: "A burgundy top and pleated skirt translated into polished model and location imagery.",
    service: "AI Fashion Photography",
    href: "/services/realistic-ai-studio-photography",
    images: [
      { src: "/images/ai-fashion-burgundy-outfit.webp", alt: "Original burgundy top and white pleated skirt outfit reference", caption: "Original outfit reference", role: "Original product" },
      { src: "/images/burgundy-outfit-doorway.webp", alt: "AI fashion model wearing a burgundy top and white pleated skirt by a dark green doorway", caption: "Editorial doorway look", role: "AI model result" },
      { src: "/images/burgundy-outfit-flower-shop.webp", alt: "AI fashion model wearing a burgundy and white outfit outside a flower shop", caption: "Lifestyle campaign look", role: "AI lifestyle result" },
    ],
  },
  {
    id: "lime-heels",
    title: "Lime heels — footwear on-model imagery",
    category: "Footwear",
    summary: "Product-led footwear imagery paired with clear on-model styling and editorial poses.",
    service: "AI Footwear Photography",
    href: "/services/footwear-realistic-ai-photography",
    images: [
      { src: "/images/green-heels-product.webp", alt: "Original lime green pointed-toe high heel shoes photographed on a light background", caption: "Original footwear product", role: "Original product" },
      { src: "/images/ai-green-heels-seated.webp", alt: "AI fashion model seated in lime green heels with orange top and green shorts", caption: "Seated model result", role: "AI model result" },
      { src: "/images/ai-green-heels-kneeling.webp", alt: "AI fashion model kneeling to showcase lime green pointed-toe heels", caption: "Editorial footwear result", role: "AI lifestyle result" },
    ],
  },
  {
    id: "plum-activewear",
    title: "Plum activewear — consistent studio set",
    category: "Fashion",
    summary: "Original garment views paired with consistent on-model studio imagery for ecommerce.",
    service: "AI Fashion Photography",
    href: "/services/realistic-ai-studio-photography",
    images: [
      { src: "/images/plum-set-product.webp", alt: "Original plum activewear set photographed as a flat lay", caption: "Original garment reference", role: "Original product" },
      { src: "/images/plum-set-on-model.webp", alt: "AI fashion model wearing a plum activewear set in a studio", caption: "On-model studio result", role: "AI model result" },
      { src: "/images/plum-set-on-model-white.webp", alt: "AI fashion model wearing plum activewear against a clean white studio background", caption: "Clean catalog result", role: "AI model result" },
    ],
  },
  {
    id: "pink-lounge",
    title: "Pink lounge set — lifestyle storytelling",
    category: "Lifestyle",
    summary: "A product-led fashion set presented in a styled lifestyle environment.",
    service: "AI Lifestyle Fashion Photography",
    href: "/services/lifestyle-realistic-ai-photography",
    images: [
      { src: "/images/pink-outfit-product.webp", alt: "Original pink apparel set photographed as a product reference", caption: "Original outfit reference", role: "Original product" },
      { src: "/images/pink-outfit-standing-model.webp", alt: "AI fashion model wearing a pink outfit in a full-length studio photograph", caption: "Standing model result", role: "AI model result" },
      { src: "/images/pink-outfit-seated-model.webp", alt: "AI fashion model wearing a pink outfit in a seated fashion pose", caption: "Seated model result", role: "AI lifestyle result" },
    ],
  },
  {
    id: "fashion-campaign",
    title: "Editorial fashion campaign",
    category: "Campaigns",
    summary: "A coordinated fashion story created for brand campaigns and social content.",
    service: "AI Fashion Campaign Photography",
    href: "/services/luxury-fashion-ai-campaign",
    images: [
      { src: "/images/campaign-desert-knit-dress-product.jpg", alt: "Original cream knit dress product reference on a plain background", caption: "Original garment reference", role: "Original product" },
      { src: "/images/campaign-desert-knit-dress-2.jpeg", alt: "AI fashion model wearing a cream knit dress in a desert editorial setting", caption: "Desert campaign result", role: "AI model result" },
      { src: "/images/campaign-floral-blue-dress-2.jpeg", alt: "AI fashion model in a floral blue dress on architectural outdoor steps", caption: "Editorial campaign result", role: "AI lifestyle result" },
    ],
  },
];

const filters: Category[] = ["All work", "Fashion", "Handbags", "Footwear", "Lifestyle", "Campaigns", "Beauty & skincare"];

export default function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All work");
  const visible = useMemo(
    () => collections.filter((collection) => active === "All work" || collection.category === active),
    [active],
  );

  return (
    <div>
      <div className="mb-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter portfolio by service category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${active === filter ? "border-brand bg-brand text-white" : "border-ink/10 bg-white text-ink-soft hover:border-brand/50 hover:text-brand"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {active === "Beauty & skincare" ? (
        <section className="mx-auto max-w-4xl rounded-3xl border border-brand/15 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand"><Sparkles size={25} /></div>
          <p className="eyebrow mt-5">New service category</p>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">AI beauty & skincare product photography</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-soft">We’re adding dedicated skincare and beauty product examples to this gallery. Ask us about serum, sunscreen, skincare packaging and cosmetic campaign imagery while this collection is being prepared.</p>
          <a href="/contact" className="btn-primary mt-6 inline-flex items-center gap-2">Discuss a beauty project <ArrowUpRight size={16} /></a>
        </section>
      ) : (
        <div className="space-y-14">
          {visible.map((collection, index) => (
            <motion.section
              key={collection.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-3xl border border-ink/10 bg-white p-4 shadow-sm sm:p-6 lg:p-8"
              aria-labelledby={`collection-${collection.id}`}
            >
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">{collection.category} · Project {String(index + 1).padStart(2, "0")}</p>
                  <h3 id={`collection-${collection.id}`} className="mt-2 font-display text-xl font-semibold sm:text-2xl">{collection.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{collection.summary}</p>
                </div>
                <a href={collection.href} className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:underline">{collection.service} <ArrowUpRight size={16} /></a>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                {collection.images.map((image, imageIndex) => (
                  <figure key={image.src} className="min-w-0">
                    <div className="relative overflow-hidden rounded-2xl bg-cream">
                      <ImageSlot
                        src={image.src}
                        alt={image.alt}
                        label={image.caption}
                        className="aspect-[4/5] w-full"
                        sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 46vw"
                        quality={72}
                        priority={index === 0 && imageIndex < 2}
                      />
                    </div>
                    <figcaption className="mt-2">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${image.role === "Original product" ? "bg-ink/5 text-ink-soft" : "bg-brand/10 text-brand"}`}>{image.role}</span>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-sm">{image.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      )}
    </div>
  );
}
