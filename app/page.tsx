"use client";

import ServiceFilm from "@/components/ServiceFilm";
import HomeProjectBrief from "@/components/HomeProjectBrief";
import ComparisonFigure from "@/components/ComparisonFigure";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Rocket,
  Layers,
  CircleDollarSign,
  Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import dynamic from "next/dynamic";
const TrustedBy = dynamic(() => import("@/components/TrustedBy"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
import CTABand from "@/components/CTABand";
import ImageSlot from "@/components/ImageSlot";
import FreeSampleBanner from "@/components/FreeSampleBanner";
import { process, services, site, valueProps } from "@/lib/data";
import { homeHero, getStoredPages, getStoredServices, getStoredValueProps } from "@/lib/dashboard-store";
import { parseHeroTitle } from "@/components/DashboardComponents";

const homeServiceImages: Record<string, { src: string; alt: string }> = {
  "ai-beauty-skincare-photography": {
    src: "/images/ai-skincare-sunscreen-model.webp",
    alt: "AI beauty model holding Solaris sunscreen among tropical palm leaves",
  },
  "realistic-ai-studio-photography": {
    "src": "/images/ai-fashion-burgundy-outfit.webp",
    "alt": "AI fashion model wearing a burgundy scalloped top and matching trousers"
  },
  "lifestyle-realistic-ai-photography": {
    "src": "/images/ai-lifestyle-pink-tracksuit.webp",
    "alt": "AI fashion model in a pink tracksuit beside a brown leather chair"
  },
  "footwear-realistic-ai-photography": {
    "src": "/images/ai-footwear-lime-green-heels.webp",
    "alt": "AI footwear model wearing lime green pointed heels with an orange top"
  },
  "bags-accessories-realistic-ai-photography": {
    "src": "/images/ai-handbag-coral-tote.webp",
    "alt": "AI handbag model holding a coral tote bag while wearing a green cardigan"
  }
};

const homeComparisonExamples = [
  {
    name: "Navy activewear",
    photos: [
      {
        src: "/images/product-image.png",
        alt: "Product flat lay of a navy workout tank and matching shorts",
        caption: "Original flat lay of the navy tank and shorts.",
      },
      {
        src: "/images/navy-activewear-outdoors.webp",
        alt: "AI fashion model in a navy tank and matching shorts carrying a brown tote outdoors",
        caption: "Front view of the navy set styled with a brown tote.",
      },
      {
        src: "/images/navy-activewear-reading.webp",
        alt: "AI model in navy activewear reading a book beside an open garden door",
        caption: "Side view of the set in a sunlit lifestyle scene.",
      },
      {
        src: "/images/navy-activewear-produce-market.webp",
        alt: "Back view of an AI model in a navy tank and shorts shopping at a produce market",
        caption: "Back view showing the fit and seams at a produce stall.",
      },
    ],
  },
  {
    name: "Magenta embroidered outfit",
    photos: [
      {
        src: "/images/magenta-embroidered-dress-product-photo.webp",
        alt: "Original product photo of a magenta dress with floral embroidery and a gold-trimmed dupatta",
        caption: "Original product photo showing the floral embroidery and dupatta.",
      },
      {
        src: "/images/magenta-embroidered-dress-ai-model.webp",
        alt: "Full-length AI fashion model wearing a magenta embroidered dress and gold-trimmed dupatta",
        caption: "Full-length portrait showing the dress and matching dupatta.",
      },
      {
        src: "/images/magenta-embroidered-dress-ai-model-walking.webp",
        alt: "AI fashion model walking in the magenta embroidered dress with its gold-trimmed dupatta",
        caption: "Walking pose showing how the dress and dupatta drape.",
      },
      {
        src: "/images/magenta-embroidered-dress-neckline-detail.webp",
        alt: "Close-up of the magenta dress on an AI model showing the embroidered neckline and dupatta border",
        caption: "Closer view of the neckline embroidery and gold border.",
      },
    ],
  },
];

const fastIcons = [Rocket, Layers, CircleDollarSign, Clock];

export default function HomePage() {
  const [pageData, setPageData] = useState<any>(null);
  const [localServices, setLocalServices] = useState<any[]>([]);
  const [localValueProps, setLocalValueProps] = useState<any[]>([]);

  useEffect(() => {
    // Set initial storage content
    const pages = getStoredPages();
    const home = pages.find((p) => p.pageId === "home");
    if (home) setPageData(home);

    setLocalServices(getStoredServices());
    setLocalValueProps(getStoredValueProps());

    const handleUpdate = () => {
      const updatedPages = getStoredPages();
      const updatedHome = updatedPages.find((p) => p.pageId === "home");
      if (updatedHome) setPageData(updatedHome);
      setLocalServices(getStoredServices());
      setLocalValueProps(getStoredValueProps());
    };

    window.addEventListener("setles_db_update", handleUpdate);
    return () => window.removeEventListener("setles_db_update", handleUpdate);
  }, []);

  const heroTitle = pageData?.heroTitle || homeHero.heroTitle;
  const heroImage = "/images/navy-activewear-banner.webp";

  const currentValueProps = localValueProps.length > 0 ? localValueProps : valueProps;
  const currentServices = localServices.length > 0 ? localServices : services;

  return (
    <>
      <PageHero
        preserveImageQuality
        eyebrow="Realistic AI Fashion Content Studio"
        title={parseHeroTitle(heroTitle)}
        image={heroImage}
        imageAlt="AI model wearing a navy tank and shorts beside a wooden doorway"
        animateReveal
      >
        <div className="w-full"><HomeProjectBrief /></div>
        <Link href="/portfolio" className="btn-ghost-light">
          View Portfolio <ArrowRight size={16} />
        </Link>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-light"
        >
          Message us on WhatsApp
        </a>
        <p className="w-full text-sm text-white/50">
          7-day average delivery · 500+ projects completed · Top Rated Plus on
          Upwork
        </p>
      </PageHero>

      <section className="container-site py-10">
        <SectionHeading
          eyebrow="Before / After"
          title="From product photo to campaign ready content"
          text="See how original product photos become on-model campaign images for activewear and embroidered occasionwear."
        />
        <div className="mx-auto mt-7 max-w-[1160px] space-y-9">
          {homeComparisonExamples.map(({ name, photos }) => (
            <div key={name} role="group" aria-label={name} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {photos.map(({ src, alt, caption }, index) => {
                const isBefore = index === 0;

                return (
                  <ComparisonFigure key={src} caption={caption}>
                    <Reveal delay={index * 0.08}>
                      <div className="flex aspect-[3/4] flex-col items-start gap-2 rounded-2xl border border-ink/10 bg-white p-2 sm:rounded-3xl sm:p-3">
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:px-3 sm:text-xs ${isBefore ? "bg-cream text-ink" : "bg-brand text-white"}`}>
                          {isBefore ? "Before" : "After"}
                        </span>
                        <div className="relative min-h-0 w-full flex-1">
                          <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(min-width: 1280px) 252px, (min-width: 1024px) 22vw, 44vw"
                            loading="lazy"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </Reveal>
                  </ComparisonFigure>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <FreeSampleBanner />

      <TrustedBy />

      <section className="container-site py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentValueProps.map((v, i) => {
            const Icon = fastIcons[i % fastIcons.length];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-cream py-14 rounded-3xl">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title="AI Fashion, Beauty and Video Services"
            text="Explore our seven services, from fashion and beauty product photography to skincare campaigns and short video ads."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {currentServices.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 0.08}>
                <article className="card group relative flex h-full gap-5 p-5 transition-shadow hover:shadow-xl hover:shadow-ink/10">
                  {s.video ? (
                    <div className="relative z-10 hidden aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-2xl bg-ink sm:block [&_img]:object-cover">
                      <div className="absolute inset-0"><ServiceFilm src={s.video} poster={s.image} title={s.title} /></div>
                    </div>
                  ) : (
                    <ImageSlot
                      src={homeServiceImages[s.id]?.src ?? s.image}
                      alt={homeServiceImages[s.id]?.alt ?? s.title}
                      label={s.title}
                      className="hidden aspect-[3/4] w-32 shrink-0 rounded-2xl sm:block"
                      sizes="160px"
                    />
                  )}
                  <div className="flex flex-col py-1">
                    <span className="font-display text-sm font-semibold text-brand">
                      {s.number}.
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold group-hover:text-brand">
                      <Link href={`/services/${s.id}`} className="after:absolute after:inset-0">{s.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {s.short}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-brand">
                      Learn more{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-14">
        <SectionHeading
          eyebrow="Our process"
          title="Simple. Clear. Effective."
        />
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
            aria-hidden
          />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1} className="relative text-center">
              <span className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border-2 border-brand bg-white font-display font-bold text-brand">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[230px] text-sm leading-relaxed text-ink-soft">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-14 rounded-3xl">
        <div className="container-site">
          <SectionHeading
            eyebrow="What our clients say"
            title="Trusted by creators and brands worldwide"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <CTABand
        title="Let's create something realistic together."
        text="Send a product photo to discuss studio images, lifestyle scenes, or a fashion campaign for your brand."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get started with SetlesStudio.")}`, label: "Get Started Today" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
        preserveImageQuality
        image="/images/navy-activewear-green-juice.webp"
        imageAlt="AI model in a navy workout set holding green juice beside outdoor steps and palms"
      />
    </>
  );
}

