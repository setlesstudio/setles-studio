import type { Metadata } from "next";
import HomeProjectBrief from "@/components/HomeProjectBrief";
import HomeHeroTitle from "@/components/HomeHeroTitle";
import HomeServices from "@/components/HomeServices";
import HomeValueProps from "@/components/HomeValueProps";
import ComparisonFigure from "@/components/ComparisonFigure";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import FreeSampleBanner from "@/components/FreeSampleBanner";
import HomeFAQs from "@/components/HomeFAQs";
import StructuredData from "@/components/StructuredData";
import { process, site } from "@/lib/data";
const homeMetaTitle = "AI Fashion & Product Photography Services for US Brands | SetlesStudio";
const homeMetaDescription = "Professional, done-for-you AI fashion and product photography for US clothing, beauty and ecommerce brands. Realistic on-model, product and campaign imagery.";

export const metadata: Metadata = {
  title: homeMetaTitle,
  description: homeMetaDescription,
  keywords: [
    "AI fashion photography services",
    "AI product photography services",
    "AI fashion photography for clothing brands",
    "AI model photography for apparel brands",
    "ecommerce product photography services",
    "AI beauty product photography",
    "AI fashion campaign photography",
    "AI photography services USA",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://www.setlesstudio.com/",
    siteName: "SetlesStudio",
    title: homeMetaTitle,
    description: homeMetaDescription,
    locale: "en_US",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "SetlesStudio AI fashion and product photography services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeMetaTitle,
    description: homeMetaDescription,
    images: ["/images/og-default.jpg"],
  },
};


const homeComparisonExamples = [
  {
    name: "Navy activewear",
    photos: [
      {
        src: "/images/product-image.png",
        width: 809,
        height: 1833,
        alt: "Original product flat lay showing a navy activewear tank and matching shorts",
        caption: "Original product photo of the navy tank and matching shorts.",
      },
      {
        src: "/images/navy-activewear-outdoors.webp",
        width: 1792,
        height: 2400,
        alt: "AI fashion model wearing a navy activewear tank and matching shorts while carrying a brown tote outdoors",
        caption: "On-model view of the navy set styled with a brown tote.",
      },
      {
        src: "/images/navy-activewear-reading.webp",
        width: 1792,
        height: 2400,
        alt: "AI fashion model wearing a navy activewear set while reading beside an open garden doorway",
        caption: "Lifestyle view of the navy activewear set in a sunlit setting.",
      },
      {
        src: "/images/navy-activewear-produce-market.webp",
        width: 900,
        height: 1118,
        alt: "Rear view of an AI fashion model wearing a navy tank and shorts at an outdoor produce market",
        caption: "Rear view showing the garment fit and seam details.",
      },
    ],
  },
  {
    name: "Magenta embroidered outfit",
    photos: [
      {
        src: "/images/magenta-embroidered-dress-product-photo.webp",
        width: 701,
        height: 1180,
        alt: "Original product photograph of a magenta dress with floral embroidery and a gold-trimmed dupatta",
        caption: "Original product photo showing the floral embroidery and dupatta.",
      },
      {
        src: "/images/magenta-embroidered-dress-ai-model.webp",
        width: 881,
        height: 1180,
        alt: "Full-length AI fashion model wearing a magenta embroidered dress with a gold-trimmed dupatta",
        caption: "Full-length on-model view of the embroidered dress and matching dupatta.",
      },
      {
        src: "/images/magenta-embroidered-dress-ai-model-walking.webp",
        width: 881,
        height: 1180,
        alt: "AI fashion model walking in a magenta embroidered dress and matching gold-trimmed dupatta",
        caption: "Walking pose showing how the dress and dupatta drape on the model.",
      },
      {
        src: "/images/magenta-embroidered-dress-neckline-detail.webp",
        width: 881,
        height: 1180,
        alt: "Close-up of an AI fashion model wearing a magenta embroidered dress, showing the neckline and dupatta border",
        caption: "Close-up of the neckline embroidery and gold dupatta border.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.setlesstudio.com/#webpage",
          url: "https://www.setlesstudio.com/",
          name: "AI Fashion & Product Photography Services for US Brands",
          description: homeMetaDescription,
          about: { "@id": "https://www.setlesstudio.com/#organization" },
          mainEntity: {
            "@type": "Service",
            name: "AI Fashion & Product Photography Services",
            serviceType: "Done-for-you AI-assisted fashion and product photography",
            provider: { "@id": "https://www.setlesstudio.com/#organization" },
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Place", name: "Worldwide" },
            ],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Clothing, fashion, beauty and ecommerce brands",
            },
          },
        }}
      />
      <PageHero
        preserveImageQuality
        eyebrow="Professional Photography Services for US & Global Brands"
        title={<HomeHeroTitle />}
        text="SetlesStudio provides done-for-you AI-assisted fashion and product photography for clothing, beauty and ecommerce brands across the United States and worldwide. Share your product photos and creative brief; our team plans, produces and refines realistic on-model, product and campaign imagery for your store and marketing."
        image="/images/navy-activewear-banner.webp"
        imageMobile="/images/navy-activewear-banner-mobile.webp"
        mobileMedia="(max-width: 767px) and (max-aspect-ratio: 25/32)"
        imageAlt="AI fashion model wearing a navy activewear tank and matching shorts in an outdoor commercial lifestyle setting"
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
          title="From Product Photos to On-Model Fashion Photography"
          text="See how our photography team turns product references into realistic model-led visuals for fashion and ecommerce brands. Compare the original garments with finished images that show fit, fabric, embroidery and styling."
        />
        <div className="mx-auto mt-7 max-w-[1160px] space-y-9">
          {homeComparisonExamples.map(({ name, photos }) => (
            <div key={name} role="group" aria-label={name} className="grid gap-4 lg:flex">
              {[photos.slice(0, 2), photos.slice(2)].map((pair, pairIndex) => {
                const ratios = pair.map(({ width, height }) => width / height);

                return (
                  <div
                    key={pair[0].src}
                    className="grid min-w-0 gap-4 lg:basis-4"
                    style={{
                      flexGrow: ratios.reduce((total, ratio) => total + ratio, 0),
                      gridTemplateColumns: ratios.map((ratio) => `minmax(0, ${ratio}fr)`).join(" "),
                    }}
                  >
                    {pair.map(({ src, width, height, alt, caption }, index) => {
                      const isBefore = pairIndex === 0 && index === 0;

                      return (
                        <ComparisonFigure key={src} caption={caption}>
                          <Reveal delay={(pairIndex * 2 + index) * 0.08} className="flex flex-col items-start gap-2">
                            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:px-3 sm:text-xs ${isBefore ? "bg-cream text-ink" : "bg-brand text-white"}`}>
                              {isBefore ? "Before" : "After"}
                            </span>
                            <Image
                              src={src}
                              width={width}
                              height={height}
                              alt={alt}
                              sizes="(min-width: 1280px) 340px, (min-width: 1024px) 30vw, 63vw"
                              loading="lazy"
                              className="block h-auto w-full rounded-md bg-white ring-1 ring-ink/10"
                            />
                          </Reveal>
                        </ComparisonFigure>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <FreeSampleBanner />

      <TrustedBy />

      <HomeValueProps />

      <HomeServices />

      <section className="container-site py-14">
        <SectionHeading
          eyebrow="Our process"
          title="Our AI Fashion & Product Photography Process"
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
            title="Client Feedback from Fashion & Ecommerce Projects"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>
      <HomeFAQs />

      <CTABand 
        title="Ready to create professional fashion and product photography?"
        text="Send your product images and creative brief. Our team will recommend an approach for your ecommerce store, product launch or campaign."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a photography sample for my brand.")}`, label: "Request a Free Sample" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
        preserveImageQuality
        image="/images/navy-activewear-green-juice.webp"
        imageAlt="AI fashion model wearing a navy workout set and holding a green juice beside outdoor steps and palm plants"
      />
    </>
  );
}

