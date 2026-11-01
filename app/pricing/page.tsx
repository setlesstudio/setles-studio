"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, CircleDollarSign, Clock, Infinity, Layers } from "lucide-react";

const valueIcons = [CircleDollarSign, Clock, Infinity, Layers];
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { pricingTiers as defaultTiers, site, valueProps, faqs } from "@/lib/data";
import { getStoredPages, getStoredPricing, PricingTile } from "@/lib/dashboard-store";
import { parseHeroTitle } from "@/components/DashboardComponents";

export default function PricingPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [tiers, setTiers] = useState<PricingTile[]>([]);

  useEffect(() => {
    const pages = getStoredPages();
    const pricing = pages.find((p) => p.pageId === "pricing");
    if (pricing) setPageData(pricing);

    setTiers(getStoredPricing());

    const handleUpdate = () => {
      const updatedPages = getStoredPages();
      const updatedPricing = updatedPages.find((p) => p.pageId === "pricing");
      if (updatedPricing) setPageData(updatedPricing);
      setTiers(getStoredPricing());
    };
    window.addEventListener("setles_db_update", handleUpdate);
    return () => window.removeEventListener("setles_db_update", handleUpdate);
  }, []);

  const heroTitle = pageData?.heroTitle && pageData.heroTitle !== "Premium hyper realistic AI fashion content [for every brand size]" ? pageData.heroTitle : "AI fashion photography [pricing and packages]";
  const heroText = pageData?.heroText || "From product launches to global campaigns, choose the level of content production your brand needs.";
  const heroImage = pageData?.heroImage || "/images/pricing-hero.jpeg";

  const currentTiers = tiers.length > 0 ? tiers : defaultTiers;

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={parseHeroTitle(heroTitle)}
        text={heroText}
        image={heroImage}
        imageAlt="AI fashion model in pink outfit, SetlesStudio lifestyle photography"
        animateReveal
      >
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to start a project with SetlesStudio.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Start Project
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your pricing.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-light"
        >
          Contact Us
        </a>
      </PageHero>

      {/* Value strip */}
      <section className="bg-white mt-6">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-brand">
            {valueProps.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div key={v.title} className="flex items-center gap-4 px-6 py-8">
                  <Icon size={40} strokeWidth={1.5} className="shrink-0 text-brand" />
                  <div>
                    <p className="font-bold text-sm">{v.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work Speaks */}
      <section className="container-site mt-10">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-cream px-8 py-10 sm:px-12 sm:py-12 lg:flex lg:items-center lg:gap-12">
            {/* Text */}
            <div className="shrink-0 lg:max-w-md">
              <p className="eyebrow">Our Work Speaks</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Creating Visuals That Build Brands
              </h2>
              <p className="mt-4 text-ink-soft">
                We combine creativity, strategy, and attention to detail to
                deliver content that connects and converts.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                View Portfolio <ArrowRight size={18} />
              </Link>
            </div>

            {/* Images */}
            <div className="mt-8 flex gap-3 lg:mt-0 lg:flex-1 lg:justify-end md:justify-center">
              <div className="min-w-0 flex-1 animate-float sm:w-44 sm:flex-none sm:shrink-0 lg:w-32 xl:w-44">
                <div className="group relative h-52 overflow-hidden rounded-2xl will-change-transform sm:h-64">
                  <Image
                    src="/images/lifestyle-red-dress-nyc-1-service.jpg"
                    alt="Model in red dress on NYC street"
                    fill
                    sizes="(min-width: 1280px) 176px, (min-width: 640px) 128px, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="mt-5 min-w-0 flex-1 animate-float sm:mt-6 sm:w-44 sm:flex-none sm:shrink-0 lg:w-32 xl:w-44 [animation-delay:0.6s]">
                <div className="group relative h-52 overflow-hidden rounded-2xl will-change-transform sm:h-64">
                  <Image
                    src="/images/lifestyle-red-dress-nyc-2.jpg"
                    alt="Model in red dress walking in New York"
                    fill
                    sizes="(min-width: 1280px) 176px, (min-width: 640px) 128px, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1 animate-float sm:w-44 sm:flex-none sm:shrink-0 lg:w-32 xl:w-44 [animation-delay:1.2s]">
                <div className="group relative h-52 overflow-hidden rounded-2xl will-change-transform sm:h-64">
                  <Image
                    src="/images/lifestyle-pink-outfit-cafe.webp"
                    alt="Model in pink outfit outside a café"
                    fill
                    sizes="(min-width: 1280px) 176px, (min-width: 640px) 128px, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Tiers */}
      <section className="container-site py-8">
        <SectionHeading
          eyebrow="Choose your package"
          title="Simple. Transparent. Flexible."
        />
        <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
          {currentTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-4xl p-6 ${
                  t.featured
                    ? "bg-ink text-white shadow-2xl shadow-ink/25 lg:-mt-2 lg:pb-8"
                    : "card"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {t.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-brand">
                  {t.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    t.featured ? "text-white/60" : "text-ink-soft"
                  }`}
                >
                  {t.description}
                </p>
                <p className="mt-4">
                  <span className="font-display text-4xl font-semibold tracking-tight">
                    {t.price}
                  </span>
                  <span
                    className={`ml-1 text-sm ${
                      t.featured ? "text-white/60" : "text-ink-soft"
                    }`}
                  >
                    {t.unit}
                  </span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          t.featured
                            ? "bg-brand text-white"
                            : "bg-brand-soft text-brand"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${t.featured ? "btn-primary" : "btn-dark"} mt-6 w-full text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-wider`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Custom quote */}
      <section className="container-site pb-24">
        <Reveal>
          <div className="grid overflow-hidden rounded-4xl bg-cream lg:grid-cols-[1.3fr_1fr]">
            <div className="p-10 sm:p-14">
              <p className="eyebrow">Need something custom?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Let&apos;s build something extraordinary
              </h2>
              <p className="mt-4 max-w-lg text-ink-soft">
                Have a big project, monthly content needs, or specific
                requirements? We&apos;ll create a custom solution for you.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in a custom AI fashion photography package for my brand. Can we discuss my requirements?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Request Custom Quote
              </a>
            </div>
            <ImageSlot
              src="/images/lifestyle-orange-activewear.jpg"
              alt="Lifestyle fashion model in orange activewear"
              label="Custom quote image"
              className="hidden lg:block lg:min-h-[300px]"
              imageClassName="object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-cream py-14 rounded-3xl">
        <div className="container-site">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked questions" />
          <div className="mt-12">
            <FAQ faqs={faqs}/>
          </div>
        </div>
      </section>

      <CTABand
        title="Let's create content that takes your brand further."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get started with SetlesStudio.")}`, label: "Get Started" }}
        image="/images/pricing-page-last-section.jpeg"
      />
    </>
  );
}
