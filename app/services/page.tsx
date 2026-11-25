import ServiceFilm from "@/components/ServiceFilm";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { services, site } from "@/lib/data";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "AI Fashion & Product Photography Services | SetlesStudio",
  description: "Professional AI fashion and product photography services for clothing, beauty and ecommerce brands across the United States and worldwide. Explore model, product, lifestyle and video services.",
  alternates: {
    canonical: "https://www.setlesstudio.com/services",
  },
  openGraph: {
    title: "AI Fashion & Product Photography Services | SetlesStudio",
    description: "Professional AI fashion and product photography services for clothing, beauty and ecommerce brands across the United States and worldwide. Explore model, product, lifestyle and video services.",
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
    title: "AI Fashion & Product Photography Services | SetlesStudio",
    description: "Professional AI fashion and product photography services for clothing, beauty and ecommerce brands across the United States and worldwide. Explore model, product, lifestyle and video services.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/studio-service-banner.png"],
  },
};

const serviceFaqs = [
  {
    "q": "What AI fashion and product photography services does SetlesStudio provide?",
    "a": "SetlesStudio provides professional photography services for clothing, beauty, skincare, footwear, handbags and ecommerce brands. Our team creates AI model photography, product images, lifestyle visuals, fashion campaigns and short video ads."
  },
  {
    "q": "Do you provide AI photography services for brands in the United States?",
    "a": "Yes. We work remotely with businesses across the United States and worldwide. You can share your product photos, brand references and creative brief online."
  },
  {
    "q": "Is SetlesStudio an AI image generator or a photography service provider?",
    "a": "SetlesStudio is a professional AI fashion and product photography service provider, not a self service image generator. Our team plans the creative direction, creates the visuals and reviews them against your product references."
  },
  {
    "q": "Which products can you create photography for?",
    "a": "We work with clothing, activewear, footwear, handbags, accessories, skincare, cosmetics, sunscreen and fragrance. Send your product photos so we can review the requirements for your category."
  },
  {
    "q": "What should I provide to start a photography project?",
    "a": "Share clear product photos, front and back views where possible, close ups of important details, logos or artwork files, the number of images you need and examples of your preferred visual style."
  },
  {
    "q": "How do you price AI fashion and product photography services?",
    "a": "Pricing depends on the product category, number of final images, model and scene requirements, creative complexity and agreed deliverables. Review the packages or contact us for a quote based on your brief."
  }
];

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: serviceFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }} />
      <PageHero
        eyebrow="Professional Photography Services"
        title={
          <>
            AI Fashion & Product Photography&nbsp;
            <span className="text-brand">Services</span>
          </>
        }
        text="SetlesStudio provides professional AI fashion and product photography services for clothing, beauty, footwear, handbags and ecommerce brands across the United States and worldwide. Our team plans, creates and reviews product, model, lifestyle and campaign visuals from your original product photos and creative brief."
        image="/images/service-page-banner.jpeg"
        imageMobile="/images/service-page-banner-mobile.jpeg"
        imageAlt="Seated model in a fashion shoot"
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
                  <div className="mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-4xl bg-ink">
                    <ServiceFilm src={s.video} poster={s.image} title={s.title} />
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
                </h2>
                <p className="mt-3 text-base font-light leading-relaxed text-ink-soft xl:mt-4 xl:text-lg">
                  {s.long}
                </p>
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

      <section className="container-site py-14">
        <SectionHeading eyebrow="Common questions" title="AI Fashion and Product Photography Services FAQs" text="Answers about our photography services, remote work with US brands, product references and project planning." />
        <div className="mt-8">
          <FAQ faqs={serviceFaqs} />
        </div>
      </section>

      <CTABand
        title="Not Sure Which AI Photography Service Fits Your Brand?"
        text="Tell us about your products, audience and intended image use. Our team will help you choose a suitable photography service and discuss the project scope."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`, label: "Book a Free Consultation" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
        image="/images/services-page-last-section-image.jpeg"
      />
    </>
  );
}
