import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/data";

const faqs = [
  {
    q: "What can I see in the SetlesStudio AI photography portfolio?",
    a: "The portfolio presents selected AI-assisted fashion, handbag, footwear, lifestyle and campaign imagery. Collections are arranged as original product or outfit references followed by the corresponding AI model and lifestyle results.",
  },
  {
    q: "Can SetlesStudio turn my flat-lay product photo into an AI model photo?",
    a: "Yes. Share a clear product or flat-lay photograph and your preferred style. We can create AI-assisted on-model imagery for ecommerce product pages, catalogs and marketing, subject to a review of the source photo and product details.",
  },
  {
    q: "Do the AI images preserve the original product details?",
    a: "We aim to preserve visible product characteristics such as colour, silhouette, fabric texture, seams, hardware and shape. Results depend on the quality and angles of the reference images, so important details are reviewed before delivery.",
  },
  {
    q: "Does SetlesStudio create AI photography for handbags and shoes?",
    a: "Yes. Dedicated services are available for handbag and footwear imagery, including product-led studio views and AI model styling. Visit the relevant service page to see the scope and request a sample.",
  },
  {
    q: "Does SetlesStudio offer AI beauty and skincare product photography?",
    a: "Beauty and skincare product photography is a new service category. Contact SetlesStudio to discuss serum, sunscreen, cosmetics and packaging visuals and to check the current examples and project requirements.",
  },
  {
    q: "How do I order AI product photography for my brand?",
    a: "Send your product photographs, brand references, required image quantity and intended use through the contact page or WhatsApp. SetlesStudio can review the brief and recommend a suitable package or sample.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata: Metadata = {
  title: "AI Product & Fashion Photography Portfolio | SetlesStudio",
  description: "Explore SetlesStudio AI fashion, handbag, footwear, lifestyle and campaign photography. See original product references paired with AI model results for ecommerce brands.",
  alternates: { canonical: "https://www.setlesstudio.com/portfolio" },
  keywords: [
    "AI fashion photography portfolio",
    "AI product photography examples",
    "AI model photography for ecommerce",
    "AI handbag photography",
    "AI footwear photography",
    "AI lifestyle product photography",
    "AI beauty and skincare product photography",
  ],
  openGraph: {
    title: "AI Product & Fashion Photography Portfolio | SetlesStudio",
    description: "See original product references transformed into AI-assisted fashion, handbag, footwear and lifestyle imagery.",
    url: "https://www.setlesstudio.com/portfolio",
    siteName: "SetlesStudio",
    images: [{ url: "https://www.setlesstudio.com/images/ai-handbag-lifestyle-banner.webp", width: 1600, height: 900, alt: "AI handbag lifestyle photography portfolio by SetlesStudio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product & Fashion Photography Portfolio | SetlesStudio",
    description: "Original product references paired with AI model and lifestyle photography for ecommerce brands.",
    images: ["https://www.setlesstudio.com/images/ai-handbag-lifestyle-banner.webp"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work · SetlesStudio"
        title={<>From product photo to <span className="text-brand">brand-ready imagery</span></>}
        text="Explore curated AI-assisted fashion and product photography. Each collection starts with the original product or outfit reference, followed by model and lifestyle results created for ecommerce and marketing."
        image="/images/ai-handbag-lifestyle-banner.webp"
        imageAlt="AI fashion model showcasing a coral tote bag in a lush lifestyle setting"
        animateReveal
      >
        <Link href="/contact" className="btn-primary">Start Your Project</Link>
        <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I viewed your portfolio and would like to discuss AI product photography for my brand.")}`} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">Request a Free Sample</a>
      </PageHero>

      <section className="bg-cream py-14 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Curated by category"
            title="Real products. Carefully styled AI results."
            text="Browse each project in sequence: original product or outfit first, then the matching AI model and lifestyle photography."
          />
          <div className="mt-10"><PortfolioGallery /></div>
          <div className="mt-12 grid gap-4 rounded-3xl border border-ink/10 bg-white p-6 sm:grid-cols-3 sm:p-8">
            <div><p className="font-semibold">01 · Start with your product</p><p className="mt-1 text-sm text-ink-soft">We review your source image, colour, shape and important details.</p></div>
            <div><p className="font-semibold">02 · Create the visual direction</p><p className="mt-1 text-sm text-ink-soft">Choose a studio, model or lifestyle look that suits your brand.</p></div>
            <div><p className="font-semibold">03 · Prepare content for use</p><p className="mt-1 text-sm text-ink-soft">Receive polished imagery for product pages, catalogs and campaigns.</p></div>
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeading eyebrow="Common questions" title="AI product photography portfolio FAQs" text="Practical answers about the examples, product accuracy, available categories and ordering." />
        <div className="mt-8"><FAQ faqs={faqs} /></div>
      </section>

      <CTABand
        title="Ready to create product images that make people stop and look?"
        text="Send us one clear product photo and tell us where you plan to use the images. We’ll review your brief and help you choose a suitable direction."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free AI product photography sample for my brand.")}`, label: "Request a Free Sample" }}
        secondary={{ href: "/pricing", label: "Explore Pricing" }}
        image="/images/portfolio-last-section-banner.jpeg"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
