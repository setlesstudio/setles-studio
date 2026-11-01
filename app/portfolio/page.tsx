import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Fashion Photography Portfolio | SetlesStudio",
  description: "See AI fashion photography examples and before-and-after transformations across studio, lifestyle, footwear, handbag, and campaign projects.",
  alternates: {
    canonical: "https://www.setlesstudio.com/portfolio",
  },
  openGraph: {
    title: "AI Fashion Photography Portfolio | SetlesStudio",
    description: "See AI fashion photography examples and before-and-after transformations across studio, lifestyle, footwear, handbag, and campaign projects.",
    url: "https://www.setlesstudio.com/portfolio",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/portfolio-page-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "SetlesStudio AI Fashion Photography Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fashion Photography Portfolio | SetlesStudio",
    description: "See AI fashion photography examples and before-and-after transformations across studio, lifestyle, footwear, handbag, and campaign projects.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
  },
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
        image="/images/portfolio-page-banner.jpeg"
        imageAlt="multiple-models-outdoor"
        animateReveal
      />

      <section className="bg-cream py-14 rounded-b-3xl">
        <div className="container-site">
          <SectionHeading
            eyebrow="Selected work"
            title="Content that reflects realism"
            text="A selection across studio, lifestyle, campaign, footwear, and bags. Filter by category."
          />
          <div className="mt-6">
            <PortfolioGallery />
          </div>
        </div>
      </section>

      <CTABand
        title="Want results like these for your brand?"
        text="Send one product image and get a free sample. No credit card required."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free sample of your AI fashion photography.")}`, label: "Request Free Sample" }}
        secondary={{ href: "/pricing", label: "See Pricing" }}
        image="/images/portfolio-last-section-banner.jpeg"
      />
    </>
  );
}
