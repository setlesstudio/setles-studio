"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";
import ServiceFilm from "@/components/ServiceFilm";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { getStoredServices } from "@/lib/dashboard-store";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "ai-beauty-skincare-photography": {
    src: "/images/ai-skincare-sunscreen-model.webp",
    alt: "AI beauty campaign model presenting a sunscreen product in a tropical outdoor setting",
  },
  "realistic-ai-studio-photography": {
    src: "/images/ai-fashion-burgundy-outfit.webp",
    alt: "AI fashion model wearing a burgundy scalloped top and matching trousers for an apparel photography campaign",
  },
  "lifestyle-realistic-ai-photography": {
    src: "/images/ai-lifestyle-pink-tracksuit.webp",
    alt: "AI fashion model wearing a pink tracksuit in a styled lifestyle scene beside a brown leather chair",
  },
  "footwear-realistic-ai-photography": {
    src: "/images/ai-footwear-lime green-heels.webp",
    alt: "AI fashion model wearing lime green pointed heels with an orange outfit in a footwear campaign",
  },
  "luxury-fashion-ai-campaign": {
    src: "/images/campaign-desert-knit-dress-2.jpeg",
    alt: "AI fashion model wearing a cream knit halter dress in a desert editorial campaign setting",
  },
  "bags-accessories-realistic-ai-photography": {
    src: "/images/ai-handbag-coral-tote.webp",
    alt: "AI fashion model carrying a coral tote bag while wearing a green cardigan in a handbag campaign",
  },
};

export default function HomeServices() {
  const [items, setItems] = useState(services);

  useEffect(() => {
    const update = () => setItems(getStoredServices());
    update();
    window.addEventListener("setles_db_update", update);
    return () => window.removeEventListener("setles_db_update", update);
  }, []);

  return (
    <section className="bg-cream py-14 rounded-3xl">
      <div className="container-site">
        <SectionHeading
          eyebrow="Professional Photography Services"
          title="AI Fashion & Product Photography Services for US Brands"
          text="SetlesStudio is a professional AI fashion and product photography service provider for clothing, beauty, footwear and ecommerce brands across the United States and worldwide. Our team creates realistic AI model photography, product images and commercial campaign visuals for ecommerce stores, launches and advertising."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((service, index) => (
            <article key={service.id} className="card group relative flex h-full gap-5 p-5 transition-shadow hover:shadow-xl hover:shadow-ink/10">
              {service.video ? (
                <div className="relative z-10 hidden aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-2xl bg-ink sm:block [&_img]:object-cover">
                  <div className="absolute inset-0">
                    <ServiceFilm src={service.video} poster={service.image} title={service.title} />
                  </div>
                </div>
              ) : (
                <ImageSlot
                  src={serviceImages[service.id]?.src ?? service.image}
                  alt={serviceImages[service.id]?.alt ?? service.title}
                  label={service.title}
                  className="hidden aspect-[3/4] w-32 shrink-0 rounded-2xl sm:block"
                  sizes="160px"
                />
              )}
              <div className="flex flex-col py-1">
                <span className="font-display text-sm font-semibold text-brand">{service.number}.</span>
                <h3 className="mt-1 font-display text-xl font-semibold group-hover:text-brand">
                  <Link href={`/services/${service.id}`} className="after:absolute after:inset-0">{service.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.short}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-brand">
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
