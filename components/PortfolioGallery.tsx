"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Category = "All projects" | "Fashion" | "Handbags" | "Footwear" | "Activewear" | "Lifestyle" | "Campaigns" | "Beauty & skincare";
type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  role: "Original product" | "AI model result" | "AI lifestyle result";
  width: number;
  height: number;
};
type Collection = {
  id: string;
  title: string;
  category: Exclude<Category, "All projects" | "Beauty & skincare">;
  summary: string;
  service: string;
  href: string;
  images: GalleryImage[];
};

const collections: Collection[] = [
  {
    id: "coral-tote",
    title: "Coral tote, reimagined for a fashion campaign",
    category: "Handbags",
    summary: "One product reference, styled into a coordinated set of model and lifestyle visuals.",
    service: "Explore AI handbag photography",
    href: "/services/bags-accessories-realistic-ai-photography",
    images: [
      { src: "/images/coral-tote-product.webp", alt: "Original coral canvas tote bag photographed against a clean background", caption: "Original product", role: "Original product", width: 1335, height: 1297 },
      { src: "/images/ai-handbag-standing-model.webp", alt: "Fashion model carrying a coral tote bag in a lush tropical garden", caption: "Tropical campaign", role: "AI model result", width: 2752, height: 1536 },
      { src: "/images/ai-handbag-seated-model.webp", alt: "Fashion model seated with a coral tote bag in a clean studio", caption: "Seated model styling", role: "AI model result", width: 1792, height: 2400 },
      { src: "/images/ai-handbag-studio-chair.webp", alt: "Coral tote bag styled beside a seated fashion model on a studio chair", caption: "Studio lifestyle", role: "AI lifestyle result", width: 2752, height: 1536 },
    ],
  },
  {
    id: "burgundy-look",
    title: "Burgundy and ivory, from outfit reference to editorial",
    category: "Fashion",
    summary: "A coordinated outfit presented first as a reference, then in polished on-model and location imagery.",
    service: "Explore AI fashion photography",
    href: "/services/realistic-ai-studio-photography",
    images: [
      { src: "/images/ai-fashion-burgundy-outfit.webp", alt: "Original burgundy top and ivory pleated skirt outfit reference with matching handbag", caption: "Original outfit", role: "Original product", width: 572, height: 785 },
      { src: "/images/burgundy-outfit-doorway.webp", alt: "Fashion model wearing a burgundy top and ivory pleated skirt beside a dark green doorway", caption: "Street-style editorial", role: "AI model result", width: 1792, height: 2400 },
      { src: "/images/burgundy-outfit-flower-shop.webp", alt: "Fashion model wearing a burgundy and ivory outfit in a flower-shop setting", caption: "Lifestyle campaign", role: "AI lifestyle result", width: 1792, height: 2400 },
    ],
  },
  {
    id: "lime-heels",
    title: "Lime heels, shown in detail and on-model",
    category: "Footwear",
    summary: "A footwear-led collection that keeps the shoe clearly visible in both product and styling images.",
    service: "Explore AI footwear photography",
    href: "/services/footwear-realistic-ai-photography",
    images: [
      { src: "/images/green-heels-product.webp", alt: "Pair of lime green pointed-toe high heels photographed on a light background", caption: "Original footwear", role: "Original product", width: 1792, height: 2400 },
      { src: "/images/ai-green-heels-seated.webp", alt: "Fashion model seated in lime green pointed-toe heels with an orange top and green shorts", caption: "Seated styling", role: "AI model result", width: 2752, height: 1536 },
      { src: "/images/ai-green-heels-kneeling.webp", alt: "Fashion model kneeling to showcase lime green pointed-toe high heels", caption: "Editorial pose", role: "AI lifestyle result", width: 2752, height: 1536 },
    ],
  },
  {
    id: "plum-activewear",
    title: "Plum activewear, consistent across every view",
    category: "Activewear",
    summary: "A clean product reference paired with studio model views and close-up garment details.",
    service: "Explore AI studio photography",
    href: "/services/realistic-ai-studio-photography",
    images: [
      { src: "/images/plum-set-product.webp", alt: "Original plum activewear set displayed as a clean product flat lay", caption: "Original product", role: "Original product", width: 765, height: 1024 },
      { src: "/images/plum-set-on-model.webp", alt: "Model wearing a coordinated plum activewear set in a studio", caption: "On-model studio", role: "AI model result", width: 1792, height: 2400 },
      { src: "/images/plum-set-on-model-white.webp", alt: "Model wearing plum activewear against a bright white studio background", caption: "Clean catalog view", role: "AI model result", width: 1792, height: 2400 },
      { src: "/images/plum-set-neckline-detail.webp", alt: "Close-up detail of the neckline and fabric of a plum activewear top", caption: "Garment detail", role: "AI lifestyle result", width: 765, height: 1024 },
    ],
  },
  {
    id: "pink-lounge",
    title: "Pink lounge set, styled for ecommerce and lifestyle",
    category: "Lifestyle",
    summary: "A product-first fashion story with complementary model poses and lifestyle-ready imagery.",
    service: "Explore AI lifestyle photography",
    href: "/services/lifestyle-realistic-ai-photography",
    images: [
      { src: "/images/pink-outfit-product.webp", alt: "Original pink outfit photographed as a product reference", caption: "Original outfit", role: "Original product", width: 765, height: 1024 },
      { src: "/images/pink-outfit-standing-model.webp", alt: "Fashion model wearing a pink outfit in a full-length studio photograph", caption: "Full-length model", role: "AI model result", width: 1792, height: 2400 },
      { src: "/images/pink-outfit-seated-model.webp", alt: "Fashion model wearing a pink outfit in a seated editorial pose", caption: "Seated editorial", role: "AI lifestyle result", width: 1792, height: 2400 },
    ],
  },
  {
    id: "fashion-campaign",
    title: "Editorial fashion campaign",
    category: "Campaigns",
    summary: "A coordinated fashion story designed for campaign pages, brand storytelling and social content.",
    service: "Explore AI fashion campaigns",
    href: "/services/luxury-fashion-ai-campaign",
    images: [
      { src: "/images/campaign-desert-knit-dress-product.jpg", alt: "Original cream knit dress product reference", caption: "Original garment", role: "Original product", width: 765, height: 1024 },
      { src: "/images/campaign-desert-knit-dress-2.jpeg", alt: "Fashion model wearing a cream knit dress in a warm desert editorial setting", caption: "Desert editorial", role: "AI model result", width: 1792, height: 2400 },
      { src: "/images/campaign-floral-blue-dress-2.jpeg", alt: "Fashion model in a floral blue dress on architectural outdoor steps", caption: "Outdoor campaign", role: "AI lifestyle result", width: 1792, height: 2400 },
    ],
  },
];

const filters: Category[] = ["All projects", "Fashion", "Handbags", "Footwear", "Activewear", "Lifestyle", "Campaigns", "Beauty & skincare"];

function ProjectGallery({ images, projectId }: { images: GalleryImage[]; projectId: string }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
      {images.map((image, index) => (
        <figure key={image.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 shadow-[0_5px_24px_rgba(25,25,25,0.045)]">
          <div className="overflow-hidden rounded-xl bg-[#f7f5f1]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1280px) 28vw, (min-width: 640px) 46vw, 94vw"
              quality={82}
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3">
            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${image.role === "Original product" ? "bg-[#242424] text-white" : "bg-[#f1ede7] text-[#62584d]"}`}>
              {image.role === "Original product" ? "01 · Original" : image.role === "AI model result" ? "AI model" : "AI lifestyle"}
            </span>
            <span className="text-xs text-ink-soft">{image.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All projects");
  const visible = useMemo(
    () => collections.filter((collection) => active === "All projects" || collection.category === active),
    [active],
  );

  return (
    <div>
      <div className="-mx-1 mb-8 overflow-x-auto px-1 pb-2">
        <div className="flex min-w-max items-center justify-center gap-2" role="group" aria-label="Filter portfolio by category">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${active === filter ? "border-[#252525] bg-[#252525] text-white shadow-sm" : "border-ink/10 bg-white text-ink-soft hover:border-brand/50 hover:text-brand"}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {active === "Beauty & skincare" ? (
        <section className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f4eee7] text-[#8a624b]"><Sparkles size={22} /></div>
            <div>
              <p className="eyebrow">New service</p>
              <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">AI beauty & skincare product photography</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">Product-led imagery for skincare, sunscreen, serums and cosmetics. Share your packaging and creative direction to discuss a tailored visual set.</p>
            </div>
          </div>
          <a href="/contact" className="btn-primary inline-flex shrink-0 items-center justify-center gap-2">Discuss a beauty project <ArrowUpRight size={16} /></a>
        </section>
      ) : (
        <div className="space-y-10">
          {visible.map((collection, index) => (
            <motion.section
              key={collection.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.06 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-ink/10 bg-[#fbfaf8] p-4 sm:p-6 lg:p-7"
              aria-labelledby={`collection-${collection.id}`}
            >
              <div className="mb-5 flex flex-col gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft ring-1 ring-ink/10">{collection.category}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/35">Project {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 id={`collection-${collection.id}`} className="font-display text-xl font-semibold leading-tight sm:text-2xl">{collection.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">{collection.summary}</p>
                </div>
                <a href={collection.href} className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-ink">
                  {collection.service} <ArrowUpRight size={16} />
                </a>
              </div>
              <ProjectGallery images={collection.images} projectId={collection.id} />
            </motion.section>
          ))}
        </div>
      )}
    </div>
  );
}
