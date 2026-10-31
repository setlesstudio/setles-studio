import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Fashion Content Services | SetlesStudio",
  description:
    "Studio product photography, lifestyle imagery, luxury campaigns, footwear, bags, and video ads. Six AI content services for modern apparel brands.",
  alternates: {
    canonical: "https://www.setlesstudio.com/services",
  },
  openGraph: {
    title: "AI Fashion Content Services | SetlesStudio",
    description:
      "Studio product photography, lifestyle imagery, luxury campaigns, footwear, bags, and video ads. Six AI content services for modern apparel brands.",
    url: "https://www.setlesstudio.com/services",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/studio-service-banner.png",
        width: 1200,
        height: 630,
        alt: "SetlesStudio AI Fashion Content Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fashion Content Services | SetlesStudio",
    description:
      "Studio product photography, lifestyle imagery, luxury campaigns, footwear, bags, and video ads. Six AI content services for modern apparel brands.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/studio-service-banner.png"],
  },
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
        image="/images/service-page-banner.jpeg"
        imageMobile="/images/service-page-banner-mobile.jpeg"
        imageAlt="business-model-sitting"
        animateReveal
      >
        <Link href="/pricing" className="btn-primary">
          See Pricing
        </Link>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free sample of your AI fashion photography.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-light"
        >
          Request Free Sample
        </a>
      </PageHero>

      <div className="container-site py-14">
        <div className="space-y-24 md:space-y-16">
          {services.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 items-stretch gap-10 md:grid-cols-[1.5fr_3fr] md:gap-10"
            >
              <Reveal className="md:h-full md:min-h-[380px] xl:min-h-[480px] xl:max-h-[550px]">
                {s.video ? (
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-4xl bg-ink md:aspect-auto md:h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="h-full w-full object-cover object-top"
                    >
                      <source src={s.video} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <ImageSlot
                    src={s.image}
                    alt={s.title}
                    label={s.title}
                    className="aspect-[3/4] w-full rounded-4xl bg-cream md:aspect-auto md:h-full"
                    imageClassName="object-contain object-center"
                  />
                )}
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col justify-between">
                <span className="font-display text-4xl font-semibold text-brand/20 xl:text-5xl">
                  {s.number}
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold xl:text-4xl xl:mt-0">
                  {s.title}
                <p className="mt-3 text-base font-light leading-relaxed text-ink-soft xl:mt-4 xl:text-lg">
                  {s.long}
                </p>
                </h2>
                <ul className="mt-5 space-y-2 xl:mt-0 xl:space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm xl:text-[15px]">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 xl:mt-8 flex flex-wrap items-center gap-3 self-start">
                  <Link href={`/services/${s.id}`} className="btn-outline">
                    Read More <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in your ${s.title} service. Can we discuss a project?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark"
                  >
                    Start a Project <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            </section>
          ))}
        </div>
      </div>

      <CTABand
        title="Not Sure Which Hyper Realistic AI Visuals Fit Your Brand"
        text="Let’s map out a custom hyper realistic AI photography strategy that preserves your garment’s exact drape, texture, and fit, no physical photoshoot required."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`, label: "Book a Free Consultation" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
        image="/images/services-page-last-section-image.jpeg"
      />
    </>
  );
}
