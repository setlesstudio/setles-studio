"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  category: Exclude<Category, "All projects">;
  summary: string;
  service: string;
  href: string;
  images: GalleryImage[];
};

const collections: Collection[] = [
{
  "id": "beauty-skincare",
  "title": "AI Product Photography for Beauty and Skincare Brands",
  "category": "Beauty & skincare",
  "summary": "Sunscreen product references, model portraits and perfume campaigns, arranged in the same order as our beauty and skincare service gallery.",
  "service": "Explore beauty and skincare photography",
  "href": "/services/ai-beauty-skincare-photography",
  "images": [
    {
      "src": "/images/skincare-sunscreen-product-reference.webp",
      "alt": "Solaris sunscreen tube on a clean white background",
      "caption": "Sunscreen product reference",
      "role": "Original product",
      "width": 560,
      "height": 560
    },
    {
      "src": "/images/ai-skincare-sunscreen-model.webp",
      "alt": "AI model in an orange floral dress holding Solaris sunscreen beside her face among palm leaves",
      "caption": "Sunscreen with model",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-skincare-sunscreen-sunlit.webp",
      "alt": "AI model with orange flower earrings holding a yellow sunscreen tube at her shoulder in sunlight",
      "caption": "Sunlit skincare campaign",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-skincare-sunscreen-portrait.webp",
      "alt": "AI model holding sunscreen with her face tilted toward the sun against tropical greenery",
      "caption": "Sunscreen lifestyle portrait",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/beauty-perfume-product-reference.webp",
      "alt": "Aetherea Mystic Amber perfume bottle with a black cap on a white background",
      "caption": "Perfume product reference",
      "role": "Original product",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-beauty-perfume-model-cheek.webp",
      "alt": "AI model in a burgundy coat holding Mystic Amber perfume beside her cheek",
      "caption": "Perfume beauty portrait",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-beauty-perfume-model-front.webp",
      "alt": "Front-facing AI model holding an amber perfume bottle against a white studio background",
      "caption": "Studio fragrance portrait",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-perfume-amber-shadow-campaign.webp",
      "alt": "Mystic Amber perfume bottle surrounded by dark botanical shadows on an amber background",
      "caption": "Amber shadow campaign",
      "role": "AI lifestyle result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-beauty-perfume-model-studio.webp",
      "alt": "AI model in a burgundy jacket presenting a perfume bottle with both hands",
      "caption": "On-model perfume photography",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-beauty-perfume-model-profile.webp",
      "alt": "Side profile of an AI beauty model holding Mystic Amber perfume near her face",
      "caption": "Fragrance profile portrait",
      "role": "AI model result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-perfume-lily-product-campaign.webp",
      "alt": "Amber perfume bottle on a pedestal surrounded by white lilies and golden mist",
      "caption": "Floral perfume campaign",
      "role": "AI lifestyle result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-perfume-fashion-campaign.webp",
      "alt": "AI model wearing sunglasses behind an oversized perfume bottle in an orange studio set",
      "caption": "Creative fragrance campaign",
      "role": "AI lifestyle result",
      "width": 560,
      "height": 750
    },
    {
      "src": "/images/ai-perfume-bottle-hands-detail.webp",
      "alt": "Hands with burgundy nails holding an amber perfume bottle against a white background",
      "caption": "Perfume packaging detail",
      "role": "AI lifestyle result",
      "width": 560,
      "height": 750
    }
  ]
},
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
  if (projectId === "beauty-skincare") {
    return (
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" data-beauty-gallery>
        {images.map((image) => (
          <figure key={image.src}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#f7f7f5] ring-1 ring-ink/10">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 250px, 46vw" quality={80} loading="lazy" className="object-contain" />
            </div>
            <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

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
    </div>
  );
}

