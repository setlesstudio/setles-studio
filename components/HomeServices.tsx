"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";
import ServiceFilm from "@/components/ServiceFilm";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "ai-beauty-skincare-photography": {
    src: "/images/ai-skincare-sunscreen-model.webp",
    alt: "AI beauty model holding Solaris sunscreen among tropical palm leaves",
  },
  "realistic-ai-studio-photography": {
    src: "/images/ai-fashion-burgundy-outfit.webp",
    alt: "AI fashion model wearing a burgundy scalloped top and matching trousers",
  },
  "lifestyle-realistic-ai-photography": {
    src: "/images/ai-lifestyle-pink-tracksuit.webp",
    alt: "AI fashion model in a pink tracksuit beside a brown leather chair",
  },
  "footwear-realistic-ai-photography": {
    src: "/images/ai-footwear-lime-green-heels.webp",
    alt: "AI footwear model wearing lime green pointed heels with an orange top",
  },
  "bags-accessories-realistic-ai-photography": {
    src: "/images/ai-handbag-coral-tote.webp",
    alt: "AI handbag model holding a coral tote bag while wearing a green cardigan",
  },
};

function readServices() {
  try {
    const saved = JSON.parse(localStorage.getItem("setles_services") || "null");
    if (!Array.isArray(saved) || !saved.length) return services;
    return saved.map((item) => {
      const current = services.find((service) => service.id === item.id);
      if (!current) return item;
      if (item.id === "ai-beauty-skincare-photography") return current;
      if (item.id === "realistic-ai-video-ads-ugc") {
        return {
          ...item,
          title: current.title,
          image: current.image,
          video: current.video,
          short: item.short || current.short,
        };
      }
      return { ...current, ...item };
    });
  } catch {
    return services;
  }
}

export default function HomeServices() {
  const [items, setItems] = useState(services);

  useEffect(() => {
    const update = () => setItems(readServices());
    update();
    window.addEventListener("setles_db_update", update);
    return () => window.removeEventListener("setles_db_update", update);
  }, []);

  return (
    <section className="bg-cream py-14 rounded-3xl">
      <div className="container-site">
        <SectionHeading
          eyebrow="What we do"
          title="AI Fashion, Beauty and Video Services"
          text="Explore our seven services, from fashion and beauty product photography to skincare campaigns and short video ads."
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
