import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/data";

const faqs = [
  {
    q: "What can I see in the SetlesStudio AI photography portfolio?",
    a: "Choose a service banner to open its dedicated page. Each photography page contains relevant product, model or campaign examples, and the video ads page includes video examples.",
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
    a: "Yes. SetlesStudio offers AI-assisted beauty and skincare product photography for products such as serums, sunscreen, cosmetics and packaging. Contact the studio to discuss the product and creative direction.",
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
  description: "Browse AI fashion, beauty, skincare, footwear and handbag photography. Select a service banner to view its image gallery or video examples.",
  alternates: { canonical: "https://www.setlesstudio.com/portfolio" },
  keywords: [
    "AI fashion photography portfolio",
    "AI product photography examples",
    "AI model photography for ecommerce",
    "AI handbag photography",
    "AI footwear photography",
    "AI activewear photography",
    "AI lifestyle product photography",
    "AI beauty and skincare product photography",
  ],
  openGraph: {
    title: "AI Product & Fashion Photography Portfolio | SetlesStudio",
    description: "Explore our photography and video services. Select a banner to view the full gallery on its service page.",
    url: "https://www.setlesstudio.com/portfolio",
    siteName: "SetlesStudio",
    images: [{ url: "https://www.setlesstudio.com/images/ai-handbag-lifestyle-banner.webp", width: 2752, height: 1536, alt: "AI fashion model showcasing a coral tote bag in a lush lifestyle setting" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product & Fashion Photography Portfolio | SetlesStudio",
    description: "Explore AI photography galleries and video examples by service.",
    images: ["https://www.setlesstudio.com/images/ai-handbag-lifestyle-banner.webp"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#1e201b] pb-12 pt-28 text-white sm:pb-16 sm:pt-32">
        <div className="container-site">
          <div className="max-w-4xl">
            <p className="eyebrow text-white/65">Selected work · SetlesStudio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Explore our work,<br className="hidden sm:block" /> <span className="text-[#d8b994]">one service at a time.</span></h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/75">Choose a service below to see its full image gallery or video examples. From fashion and skincare to footwear and handbags, find the work that fits your brand.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Start Your Project</Link>
              <a href="#portfolio-work" className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Browse Service Galleries</a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio-work" className="scroll-mt-24 bg-[#f4f1ec] py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Portfolio by service</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Choose a service. View the gallery.</h2>
            <p className="mt-4 text-ink-soft">Click any banner or View Gallery link to explore the related service page and its examples.</p>
          </div>
          <div className="mt-8 sm:mt-10"><PortfolioGallery /></div>
          <div className="mt-10 grid gap-3 rounded-3xl border border-ink/10 bg-white p-5 sm:grid-cols-3 sm:p-7">
            <div><p className="text-sm font-semibold">01 · Share your product</p><p className="mt-1 text-sm leading-relaxed text-ink-soft">Send a clear product photo and the details that matter to your brand.</p></div>
            <div><p className="text-sm font-semibold">02 · Choose the visual direction</p><p className="mt-1 text-sm leading-relaxed text-ink-soft">Select studio, model or lifestyle imagery that suits your audience.</p></div>
            <div><p className="text-sm font-semibold">03 · Create your image set</p><p className="mt-1 text-sm leading-relaxed text-ink-soft">Build consistent visuals for product pages, catalogs and campaigns.</p></div>
          </div>
        </div>
      </section>

      <section className="container-site py-14 sm:py-18">
        <SectionHeading eyebrow="Common questions" title="AI product photography FAQs" text="Answers about portfolio examples, product accuracy, services and ordering." />
        <div className="mt-7"><FAQ faqs={faqs} /></div>
      </section>

      <CTABand
        title="Ready to make your products stand out?"
        text="Send us one clear product photo and tell us where you plan to use the images. We’ll review your brief and help you choose a suitable direction."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free AI product photography sample for my brand.")}`, label: "Request a Free Sample" }}
        secondary={{ href: "/pricing", label: "Explore Pricing" }}

      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}

