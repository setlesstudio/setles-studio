import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BeforeAfter from "@/components/BeforeAfter";
import CTABand from "@/components/CTABand";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Before/after transformations and selected work — studio, lifestyle, luxury campaigns, footwear, and bag photography for fashion ecommerce brands.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work speaks"
        title={
          <>
            Creating visuals that <span className="text-brand">build brands</span>
          </>
        }
        text="We combine creativity, strategy, and attention to detail to deliver content that connects and converts."
        image="/images/portfolio-page-bannerr.png"
        imageAlt="multiple-models-outdoor"
      />

      <section className="container-site py-24">
        <SectionHeading
          eyebrow="Before / After"
          title="The transformation, side by side"
          text="Drag the handle to compare the original product photo against the finished content."
        />
        <Reveal className="mx-auto mt-12 max-w-xl">
          <BeforeAfter
            before="/images/product-image.png"
            after="/images/after-window.jpg"
            className="aspect-[4/5] w-full shadow-2xl shadow-ink/15"
          />
        </Reveal>
      </section>

      <section className="bg-cream py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Selected work"
            title="Content that reflects realism"
            text="A selection across studio, lifestyle, campaign, footwear, and bags. Filter by category."
          />
          <div className="mt-12">
            <PortfolioGallery />
          </div>
        </div>
      </section>

      <CTABand
        title="Want results like these for your brand?"
        text="Send one product image and get a free sample — no credit card required."
        primary={{ href: "/contact?intent=sample", label: "Request Free Sample" }}
        secondary={{ href: "/pricing", label: "See Pricing" }}
      />
    </>
  );
}
