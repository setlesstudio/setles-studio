import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/data";

const faqs = [
  {
    "q": "What can I see in the SetlesStudio AI fashion and product photography portfolio?",
    "a": "Explore examples of clothing model photography, beauty and skincare images, footwear, handbags, lifestyle scenes, fashion campaigns and AI video ads. Each service gallery shows examples relevant to that type of project."
  },
  {
    "q": "Can you create similar images from my original product photos?",
    "a": "Yes. Our team uses your product photos, brand references and creative brief to plan similar studio, model, lifestyle or campaign visuals. We review the source images before confirming the project scope."
  },
  {
    "q": "Do you provide photography services for US brands remotely?",
    "a": "Yes. SetlesStudio works remotely with fashion, beauty and ecommerce brands across the United States and worldwide. You can share product images and creative references online."
  },
  {
    "q": "How do you review product details in the finished images?",
    "a": "We compare the finished visuals with your supplied references, paying attention to visible product shape, colour, fabric, logos, hardware and other details. Clear source photos help the review, but exact reproduction is not guaranteed."
  },
  {
    "q": "How can I request a photography project or sample?",
    "a": "Choose the relevant service page, then send your product photos, required image quantity and preferred visual direction through the contact page or WhatsApp. Our team can review your brief and discuss the next step."
  }
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
  title: "AI Fashion & Product Photography Portfolio | SetlesStudio",
  description: "Explore SetlesStudio AI fashion and product photography for clothing, beauty, skincare, footwear and handbags. We work remotely with brands across the United States and worldwide.",
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
    title: "AI Fashion & Product Photography Portfolio | SetlesStudio",
    description: "Explore our photography and video services for US and worldwide brands. Select a service to view examples of product, model and campaign visuals.",
    url: "https://www.setlesstudio.com/portfolio",
    siteName: "SetlesStudio",
    images: [{ url: "https://www.setlesstudio.com/images/ai-handbag-lifestyle-banner.webp", width: 2752, height: 1536, alt: "AI fashion model showcasing a coral tote bag in a lush lifestyle setting" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fashion & Product Photography Portfolio | SetlesStudio",
    description: "View AI fashion and product photography examples created for clothing, beauty and ecommerce brands.",
    images: ["https://www.setlesstudio.com/images/ai-handbag-lifestyle-banner.webp"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#1e201b] pb-12 pt-28 text-white sm:pb-16 sm:pt-32">
        <div className="container-site">
          <div className="max-w-4xl">
            <p className="eyebrow text-white/65">SetlesStudio Portfolio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">AI Fashion & Product <span className="text-[#d8b994]">Photography Portfolio</span></h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/75">Explore photography examples for clothing, beauty, skincare, footwear, handbags and ecommerce brands. SetlesStudio works remotely with businesses across the United States and worldwide, creating product, model and campaign visuals from original product references.</p>
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
            <p className="mt-4 text-ink-soft">Compare a <Link className="underline" href="/blog/how-to-photograph-clothing-for-an-ai-model-shoot">plum outfit with its original flat lay</Link>, or see <Link className="underline" href="/blog/ai-fashion-product-photography-studio-or-lifestyle">one burgundy look in eight product and campaign images</Link>. The service galleries below show more examples.</p>
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
        <SectionHeading eyebrow="Common questions" title="AI Fashion and Product Photography Portfolio FAQs" text="Answers about our photography examples, remote service for US brands, product accuracy and project enquiries." />
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

