import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Studio product photography, lifestyle imagery, luxury campaigns, footwear, bags, video ads, and our Fashion AI Content Course. Seven services for modern apparel brands.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Premium AI content for every visual your&nbsp;
            <span className="text-brand">fashion brand needs</span>
          </>
        }
        text="From ecommerce product imagery to full scale marketing campaigns. Every service is built around accuracy, realism, and consistency."
        image="/images/blog-page-banner.jpeg"
        imageMobile="/images/blog-page-banner-mobile.jpeg"
        imageAlt="business-model-sitting"
      >
        <Link href="/pricing" className="btn-primary">
          See Pricing
        </Link>
        <Link href="/contact?intent=sample" className="btn-ghost-light">
          Request Free Sample
        </Link>
      </PageHero>

      <div className="container-site py-14">
        <div className="space-y-24 md:space-y-16">
          {services.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 items-stretch gap-10 md:grid-cols-[1.5fr_3fr] md:gap-10"
            >
              <Reveal className="h-full">
                <ImageSlot
                  src={s.image}
                  alt={s.title}
                  label={s.title}
                  className="aspect-[3/4] w-full rounded-4xl bg-cream md:aspect-auto md:h-full md:min-h-[400px]"
                  imageClassName="object-contain object-center"
                />
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col justify-center">
                <span className="font-display text-4xl font-semibold text-brand/20 xl:text-5xl">
                  {s.number}
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold xl:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft xl:mt-4 xl:text-lg">
                  {s.long}
                </p>
                <ul className="mt-5 space-y-2 xl:mt-7 xl:space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm xl:text-[15px]">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href={
                    s.id === "fashion-ai-content-course"
                      ? "/learn"
                      : `/contact?service=${s.id}`
                  }
                  className="btn-dark mt-6 self-start xl:mt-8"
                >
                  {s.id === "fashion-ai-content-course"
                    ? "Browse Learn Resources"
                    : "Start a Project"}{" "}
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
            </section>
          ))}
        </div>
      </div>

      <CTABand
        title="Not Sure Which AI Visuals Fit Your Brand"
        text="Let’s map out a custom AI photography strategy that preserves your garment’s exact drape, texture, and fit, no physical photoshoot required."
        primary={{ href: "/contact", label: "Book a Free Consultation" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
      />
    </>
  );
}
