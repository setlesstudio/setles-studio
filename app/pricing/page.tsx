"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, CircleDollarSign, Clock, Infinity, Layers } from "lucide-react";

const valueIcons = [CircleDollarSign, Clock, Infinity, Layers];
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { pricingTiers as defaultTiers, site } from "@/lib/data";
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
    { q: "How much does AI product photography cost?", a: "SetlesStudio offers project packages with different final image counts and services. Compare the current prices above, then share your product photos and brief to confirm which package fits. Custom work is quoted according to product count, image variations, and creative requirements." },
    { q: "Which AI fashion photography package should I choose?", a: "Choose Starter for studio and model images for a smaller collection. Growth adds lifestyle photography, multiple models, and social media content. Premium brings together a larger image collection, fashion and footwear visuals, and AI video and advertising. The cards above show each package’s included services." },
    { q: "Does an image package cover products or final images?", a: "Packages are based on the number of final images, not the number of products. Several poses, angles, or backgrounds for one product use multiple images. Send your product list and desired views so we can agree on the image allocation before starting." },
    { q: "What do I need to send for an AI photography quote?", a: "Send clear product photos, the number of products, the final image count you need, and examples of your preferred style. Include close-ups of logos, stitching, materials, and any details that must stay accurate. Tell us where the images will be used and your target launch date." },
    { q: "Can you turn flat lay clothing photos into model images?", a: "Yes. We use your clothing photos and references to create AI model images in studio or lifestyle settings. Clear front and back views and detail photos help us review garment colors, logos, and construction against the originals." },
    { q: "Can I combine studio and lifestyle photography?", a: "Growth includes studio and lifestyle photography. If you need a different mix of product shots, model images, campaign visuals, or video, request a custom quote and we will confirm the scope with you." },
    { q: "How long does an AI photography project take?", a: "Starter lists delivery in three business days. Growth includes priority delivery, while Premium includes fast turnaround and priority support. Confirm the start date, review stages, and final delivery date when your product photos and creative brief are agreed." },
    { q: "Are revisions included in the package price?", a: "Ask us to confirm the number of revision rounds and what they cover in your project quote before ordering. Product-detail corrections and a new creative direction can require different amounts of work, so the agreed scope should be clear from the start." },
    { q: "Can I use the images on Shopify and other ecommerce stores?", a: "We can prepare final images for your ecommerce store, product listings, and marketing channels. Share the dimensions and file formats you need. Each marketplace has its own image requirements, so confirm the intended placement before production." },
    { q: "Are AI videos included in every package?", a: "AI Video & Advertising is listed in Premium. Video is not listed as part of Starter or Growth. For a separate video brief, ask for a quote and confirm the clip count, duration, format, and included revisions." },
    { q: "Can I get a custom quote for footwear or handbag photography?", a: "Yes. Send your footwear or handbag product photos, the image count you need, and your preferred studio, on foot, on model, or lifestyle references. We will recommend a package or quote a custom scope for your collection." },
    { q: "How can I compare AI photography offers fairly?", a: "Compare the number of finished images, product and model variations, editing, revision rounds, delivery time, file formats, and usage terms. Review examples alongside the price so you can choose the service that matches your product and brand requirements." },
  ];

  const currentTiers = tiers.length > 0 ? tiers : defaultTiers;

  return (
    <>
      <section className="relative bg-[#f7f7f7] pt-20" aria-labelledby="pricing-heading">
        <Image src="/images/ai-photography-pricing-banner.webp" alt="AI fashion model wearing a burgundy top, white pleated skirt, and matching burgundy accessories" width={2752} height={1536} priority unoptimized className="block h-auto w-full" />
        <div className="container-site pb-12 pt-8 lg:absolute lg:inset-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:py-0">
          <div className="max-w-xl lg:max-w-[53%]">
            <p className="eyebrow">AI photography packages</p>
            <h1 id="pricing-heading" className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl xl:text-6xl">AI Product Photography<br /><span className="text-brand">Pricing &amp; Packages</span></h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">Turn your product photos into a coordinated collection of studio, model, and lifestyle images. Compare packages for your next launch, online store, or fashion campaign.</p>
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
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
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
                  <Image src={`/images/${item.src}.webp`} alt={item.alt} width={1000} height={1339} unoptimized className="h-auto w-full rounded-2xl" />
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {t.badge === "Most Popular" ? "Studio + Lifestyle" : t.badge}
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
            <div className="px-10 pb-10 sm:px-14 sm:pb-14 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand">
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
          <SectionHeading eyebrow="FAQ" title="AI photography pricing questions" />
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