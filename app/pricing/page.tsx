"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, CircleDollarSign, Clock, Infinity, Layers } from "lucide-react";

const valueIcons = [CircleDollarSign, Clock, Infinity, Layers];
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { pricingTiers as defaultTiers, site, standardProjectAnswer } from "@/lib/data";
import { getStoredPricing, PricingTile } from "@/lib/dashboard-store";


export default function PricingPage() {
  const [tiers, setTiers] = useState<PricingTile[]>([]);
  useEffect(() => {
    const updatePricing = () => setTiers(getStoredPricing());
    updatePricing();
    window.addEventListener("setles_db_update", updatePricing);
    return () => window.removeEventListener("setles_db_update", updatePricing);
  }, []);

  const valueProps = [
    { title: "Clear package scope", text: "Compare final image counts and included services." },
    { title: "Plan your launch", text: "Confirm your delivery schedule before production." },
    { title: "Your creative direction", text: "Choose references, model styling, and settings." },
    { title: "Room to grow", text: "Start with a collection or request a custom brief." },
  ];
  const faqs = [
  {
    "q": "How much do AI fashion and product photography services cost?",
    "a": "The cost depends on the number of products and final images, model requirements, scene complexity, creative direction and agreed deliverables. Current package prices are shown above, and custom projects can be quoted from your brief."
  },
  {
    "q": "Are package quantities based on products or final images?",
    "a": "Packages are based on the number of final images, not simply the number of products. Multiple poses, angles or backgrounds for one product can require multiple final images. Confirm the image allocation before production begins."
  },
  {
    "q": "Which photography package should I choose?",
    "a": "Compare the services and image quantities listed in each package. Consider whether you need studio images, model photography, lifestyle visuals, campaign content or video. Contact us if your project needs a combination that is not listed."
  },
  {
    "q": "Can US brands order AI fashion and product photography remotely?",
    "a": "Yes. SetlesStudio works remotely with brands across the United States and worldwide. You can share product photos, brand references and your creative brief online, then confirm the quote and project scope with our team."
  },
  {
    "q": "What should I send to receive a photography quote?",
    "a": "Send clear product photos, the number of products, your required final image count, preferred model or background references, important product details and your target launch date."
  },
  {
    "q": "Can I request a custom photography package?",
    "a": "Yes. If you need a different mix of product images, model visuals, campaign scenes, footwear, handbags or video, share your requirements and we will review a custom project scope."
  },
  {
    "q": "How are revisions and delivery dates agreed?",
    "a": standardProjectAnswer
  }
];

  const currentTiers = tiers.length > 0 ? tiers : defaultTiers;

  return (
    <>
      <section className="relative bg-[#f7f7f7] pt-20" aria-labelledby="pricing-heading">
        <Image src="/images/ai-photography-pricing-banner.webp" alt="AI fashion model wearing a burgundy top, white pleated skirt, and matching burgundy accessories" width={2752} height={1536} priority sizes="100vw" quality={92} className="block h-auto w-full" />
        <div className="container-site pb-12 pt-8 lg:absolute lg:inset-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:py-0">
          <div className="max-w-xl lg:max-w-[53%]">
            <p className="eyebrow">AI photography packages</p>
            <h1 id="pricing-heading" className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl xl:text-6xl">AI Fashion &amp; Product Photography<br /><span className="text-brand-readable">Pricing &amp; Packages</span></h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">Compare photography packages for clothing, beauty and ecommerce brands across the United States and worldwide. Choose the image quantity and creative direction that fit your project, or request a custom quote.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#packages" className="btn-primary">Compare Packages</a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white px-7 py-3 font-semibold">Help Me Choose</Link>
            </div>
          </div>
        </div>
      </section>

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
                One collection. More ways to show it.
              </h2>
              <p className="mt-4 text-ink-soft">
                See how a coordinated outfit can work across different poses and
                lifestyle settings. Explore our portfolio to find a direction for your own collection.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-readable transition-colors hover:text-brand-dark"
              >
                View Portfolio <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 grid min-w-0 grid-cols-3 items-start gap-3 lg:mt-0 lg:flex-1">
              {[
                { src: "burgundy-outfit-flower-shop", alt: "Model in a burgundy top and white pleated skirt outside a flower shop", label: "Lifestyle setting" },
                { src: "burgundy-outfit-doorway", alt: "Model wearing a burgundy top and white skirt beside a green doorway", label: "Front view" },
                { src: "burgundy-handbag-fashion-model", alt: "Model carrying a burgundy shoulder bag with a matching top and heels", label: "Styled accessories" },
              ].map((item) => (
                <figure key={item.src}>
                  <Image src={`/images/${item.src}.webp`} alt={item.alt} width={1000} height={1339} sizes="(min-width: 768px) 33vw, 100vw" quality={92} className="h-auto w-full rounded-2xl" />
                  <figcaption className="mt-3 text-center text-xs text-ink-soft">{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Tiers */}
      <section id="packages" className="container-site scroll-mt-24 py-8">
        <SectionHeading
          eyebrow="Choose your package"
          title="Choose the content your next launch needs"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft">Compare final image counts and creative options. Choose a focused studio package, add lifestyle content, or plan a complete campaign.</p>
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
                    {t.badge === "Most Popular" ? "Studio + Lifestyle" : t.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-brand-readable">
                  {t.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    t.featured ? "text-white/60" : "text-ink-soft"
                  }`}
                >
                  {t.name === "Starter" ? "Launch a smaller collection with studio and model images." : t.name === "Growth" ? "Build a versatile image collection for your store and social channels." : t.name === "Premium" ? "Bring fashion, footwear, and video together for a larger campaign." : t.description}
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
                            : "bg-brand-soft text-brand-readable"
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
                  {t.name === "Starter" ? "Start My Collection" : t.name === "Growth" ? "Plan My Content" : t.name === "Premium" ? "Discuss My Campaign" : t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Custom quote */}
      <section className="container-site pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-cream">
            <div className="p-10 sm:p-14">
              <p className="eyebrow">Need something custom?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Build a package around your collection
              </h2>
              <p className="mt-4 max-w-lg text-ink-soft">
                Need a different image count or a mix of services? Send your product list,
                visual references, and launch date. We will help you define the deliverables before you book.
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
            <div className="px-10 pb-10 sm:px-14 sm:pb-14 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand-readable">
              <Link href="/services/realistic-ai-studio-photography">AI fashion photography</Link>
              <Link href="/services/lifestyle-realistic-ai-photography">AI lifestyle photography</Link>
              <Link href="/services/footwear-realistic-ai-photography">AI footwear photography</Link>
              <Link href="/services/bags-accessories-realistic-ai-photography">AI handbag photography</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-cream py-14 rounded-3xl">
        <div className="container-site">
          <SectionHeading eyebrow="FAQ" title="AI Fashion and Product Photography Pricing FAQs" />
          <div className="mt-12">
            <FAQ faqs={faqs}/>
          </div>
        </div>
      </section>

      <section className="container-site py-16 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Your next collection starts with a clear brief</h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">Tell us what you sell, how many images you need, and the look you want. We will help you choose a package with a scope you can review before starting.</p>
        <Link href="/contact" className="btn-primary mt-7">Let’s Plan Your Images</Link>
        <p className="mt-5 text-sm text-ink-soft">Review our <Link href="/terms" className="underline">terms</Link> and <Link href="/terms#refund" className="underline">refund policy</Link> before booking.</p>
      </section>
    </>
  );
}
