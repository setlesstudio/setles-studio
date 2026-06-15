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
    "Studio product photography, lifestyle imagery, luxury campaigns, footwear, bags, video ads, and our Fashion AI Content Course — seven services for modern apparel brands.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Seven ways we help fashion brands{" "}
            <span className="text-brand">launch faster and sell more</span>
          </>
        }
        text="From ecommerce product imagery to full-scale marketing campaigns — every service is built around accuracy, realism, and consistency."
        image="/images/services-banner-section.png"
        imageAlt="child-outdoor"
      >
        <Link href="/pricing" className="btn-primary">
          See Pricing
        </Link>
        <Link href="/contact?intent=sample" className="btn-ghost-light">
          Request Free Sample
        </Link>
      </PageHero>

      <div className="container-site py-14">
        <div className="space-y-24">
          {services.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ImageSlot
                  src={s.image}
                  alt={s.title}
                  label={s.title}
                  className="aspect-[4/5] w-full rounded-4xl"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <span className="font-display text-5xl font-semibold text-brand/20">
                  {s.number}
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {s.long}
                </p>
                <ul className="mt-7 space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[15px]">
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
                  className="btn-dark mt-8"
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
        title="Not sure which service fits?"
        text="Book a free consultation and we'll map the right content mix to your catalog and channels."
        primary={{ href: "/contact", label: "Book a Free Consultation" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
      />
    </>
  );
}
