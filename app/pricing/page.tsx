import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { pricingTiers, valueProps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent, flexible pricing. Starter $299, Growth $799, Premium $1,999+ — premium AI fashion content for every brand size.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Premium AI fashion content{" "}
            <span className="text-brand">for every brand size</span>
          </>
        }
        text="From product launches to global campaigns, choose the level of content production your brand needs."
        image="/images/pricing-hero.jpeg"
        imageAlt="AI fashion model in pink outfit — SetlesStudio lifestyle photography"
      >
        <Link href="/contact" className="btn-primary">
          Start Project
        </Link>
        <Link href="/contact" className="btn-ghost-light">
          Contact Us
        </Link>
      </PageHero>

      {/* Value strip */}
      <section className="">
        <div className="container-site grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <div key={v.title} className="text-center sm:text-left">
              <p className="font-bold">{v.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work Speaks */}
      <section className="container-site pb-24 mt-10">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-cream px-8 py-10 sm:px-12 sm:py-12 lg:flex lg:items-center lg:gap-12">
            {/* Text */}
            <div className="shrink-0 lg:max-w-xs xl:max-w-sm">
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
              <div className="relative h-52 min-w-0 flex-1 overflow-hidden rounded-2xl sm:h-64 sm:w-44 sm:flex-none sm:shrink-0">
                <Image
                  src="/images/lifestyle-red-dress-nyc-1.jpeg"
                  alt="Model in red dress on NYC street"
                  fill
                  sizes="(min-width: 640px) 176px, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative mt-5 h-52 min-w-0 flex-1 overflow-hidden rounded-2xl sm:mt-6 sm:h-64 sm:w-44 sm:flex-none sm:shrink-0">
                <Image
                  src="/images/lifestyle-red-dress-nyc-2.jpeg"
                  alt="Model in red dress walking in New York"
                  fill
                  sizes="(min-width: 640px) 176px, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative h-52 min-w-0 flex-1 overflow-hidden rounded-2xl sm:h-64 sm:w-44 sm:flex-none sm:shrink-0">
                <Image
                  src="/images/lifestyle-pink-outfit-cafe.jpeg"
                  alt="Model in pink outfit outside a café"
                  fill
                  sizes="(min-width: 640px) 176px, 33vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Tiers */}
      <section className="container-site py-24">
        <SectionHeading
          eyebrow="Choose your package"
          title="Simple. Transparent. Flexible."
        />
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricingTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-4xl p-8 ${
                  t.featured
                    ? "bg-ink text-white shadow-2xl shadow-ink/25 lg:-mt-4 lg:pb-12"
                    : "card"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {t.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-brand">
                  {t.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    t.featured ? "text-white/60" : "text-ink-soft"
                  }`}
                >
                  {t.description}
                </p>
                <p className="mt-6">
                  <span className="font-display text-5xl font-semibold tracking-tight">
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
                <ul className="mt-8 flex-1 space-y-3.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
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
                <Link
                  href={t.href}
                  className={`${t.featured ? "btn-primary" : "btn-dark"} mt-9 w-full`}
                >
                  {t.cta}
                </Link>
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
              <Link href="/contact?intent=custom" className="btn-primary mt-8">
                Request Custom Quote
              </Link>
            </div>
            <ImageSlot
              src="/images/lifestyle-orange-activewear.jpeg"
              alt="Lifestyle fashion model in orange activewear"
              label="Custom quote image"
              className="hidden lg:block lg:min-h-[300px]"
              imageClassName="object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-cream py-24">
        <div className="container-site">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      <CTABand
        title="Let's create content that takes your brand further."
        primary={{ href: "/contact", label: "Get Started" }}
      />
    </>
  );
}
