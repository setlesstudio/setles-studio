import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

const serviceBanners: Record<string, { src: string; alt: string; description: string; cta?: string }> = {
  "realistic-ai-studio-photography": {
    src: "/images/plum-studio-original-banner.webp",
    alt: "AI model wearing a plum scalloped top and matching leggings in a white studio",
    description: "Explore studio model images, outfit references and clothing details.",
  },
  "ai-beauty-skincare-photography": {
    src: "/images/ai-skincare-sunscreen-banner.webp",
    alt: "AI beauty model holding yellow Solaris sunscreen among tropical palm leaves",
    description: "See sunscreen, skincare and perfume product images, model portraits and campaigns.",
  },
  "lifestyle-realistic-ai-photography": {
    src: "/images/pink-outfit-lifestyle-banner.webp",
    alt: "AI model in a pink hoodie and trousers seated in a brown armchair",
    description: "Discover fashion imagery styled in natural, everyday settings.",
  },
  "luxury-fashion-ai-campaign": {
    src: "/images/ai-fashion-campaign-photography.webp",
    alt: "AI fashion model wearing a white halter knit dress seated on a desert rock",
    description: "View editorial fashion concepts and coordinated campaign imagery.",
  },
  "footwear-realistic-ai-photography": {
    src: "/images/ai-footwear-photography.webp",
    alt: "AI model wearing lime-green pointed heels with an orange top and green shorts",
    description: "Explore footwear product references, styling and on-model views.",
  },
  "realistic-ai-video-ads-ugc": {
    src: "/videos/fashion-ads/ad-1.webp",
    alt: "Model holding a burgundy handbag on a city doorstep",
    description: "Watch fashion video ads and product-focused motion examples.",
    cta: "View Video Examples",
  },
  "bags-accessories-realistic-ai-photography": {
    src: "/images/ai-handbag-photography-banner.webp",
    alt: "AI model carrying a coral tote bag among tropical leaves and red flowers",
    description: "See handbag product photography, model styling and lifestyle scenes.",
  },
};

export default function PortfolioGallery() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2" data-service-banners>
      {services.map((service, index) => {
        const banner = serviceBanners[service.id];
        if (!banner) return null;
        return (
          <Link key={service.id} href={`/services/${service.id}`} prefetch={false}
            aria-label={`${banner.cta ?? "View Gallery"}: ${service.title}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            <div className="relative aspect-video overflow-hidden bg-[#f3f1ed]">
              <Image src={banner.src} alt={banner.alt} fill sizes="(min-width: 1200px) 560px, (min-width: 768px) 46vw, 94vw" quality={80} loading={index < 2 ? "eager" : "lazy"} className="object-contain" />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-display text-xl font-semibold leading-snug text-ink group-hover:text-brand">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{banner.description}</p>
              <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm font-semibold text-brand">
                {banner.cta ?? "View Gallery"}
                <ArrowUpRight size={20} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

