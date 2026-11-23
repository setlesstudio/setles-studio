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
import { process, site } from "@/lib/data";

const homeComparisonExamples = [
  {
    name: "Navy activewear",
    photos: [
      {
        src: "/images/product-image.png",
        width: 809,
        height: 1833,
        alt: "Product flat lay of a navy workout tank and matching shorts",
        caption: "Original flat lay of the navy tank and shorts.",
      },
      {
        src: "/images/navy-activewear-outdoors.webp",
        width: 1792,
        height: 2400,
        alt: "AI fashion model in a navy tank and matching shorts carrying a brown tote outdoors",
        caption: "Front view of the navy set styled with a brown tote.",
      },
      {
        src: "/images/navy-activewear-reading.webp",
        width: 1792,
        height: 2400,
        alt: "AI model in navy activewear reading a book beside an open garden door",
        caption: "Side view of the set in a sunlit lifestyle scene.",
      },
      {
        src: "/images/navy-activewear-produce-market.webp",
        width: 900,
        height: 1118,
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
        width: 701,
        height: 1180,
        alt: "Original product photo of a magenta dress with floral embroidery and a gold-trimmed dupatta",
        caption: "Original product photo showing the floral embroidery and dupatta.",
      },
      {
        src: "/images/magenta-embroidered-dress-ai-model.webp",
        width: 881,
        height: 1180,
        alt: "Full-length AI fashion model wearing a magenta embroidered dress and gold-trimmed dupatta",
        caption: "Full-length portrait showing the dress and matching dupatta.",
      },
      {
        src: "/images/magenta-embroidered-dress-ai-model-walking.webp",
        width: 881,
        height: 1180,
        alt: "AI fashion model walking in the magenta embroidered dress with its gold-trimmed dupatta",
        caption: "Walking pose showing how the dress and dupatta drape.",
      },
      {
        src: "/images/magenta-embroidered-dress-neckline-detail.webp",
        width: 881,
        height: 1180,
        alt: "Close-up of the magenta dress on an AI model showing the embroidered neckline and dupatta border",
        caption: "Closer view of the neckline embroidery and gold border.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        preserveImageQuality
        eyebrow="Realistic AI Fashion Content Studio"
        title={<HomeHeroTitle />}
        image="/images/navy-activewear-banner.webp"
        imageMobile="/images/navy-activewear-banner-mobile.webp"
        mobileMedia="(max-width: 767px) and (max-aspect-ratio: 25/32)"
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
          text="Explore our AI fashion & product photography for ecommerce brands. Compare the original flat lays with the finished images, from the seams on a workout set to the embroidery on a dress."
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
          title="How we create AI fashion & product photography for ecommerce brands"
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

