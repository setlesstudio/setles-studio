import StructuredData from "@/components/StructuredData";
import SectionHeading from "@/components/SectionHeading";

const homeFaqs = [
  {
    question: "What AI fashion and product photography services does SetlesStudio provide?",
    answer: "SetlesStudio provides done-for-you AI-assisted fashion and product photography services for clothing, beauty, skincare, footwear, handbag and ecommerce brands. Our team creates model-led apparel images, product visuals, lifestyle photography and coordinated campaign content from your product photos and creative brief.",
  },
  {
    question: "Is SetlesStudio an AI image generator or a photography service provider?",
    answer: "SetlesStudio is a professional photography service provider, not a self-service AI image generator or software subscription. Our team manages the creative direction, image production, refinement and delivery based on your brand requirements.",
  },
  {
    question: "Do you provide AI fashion photography services for clothing brands in the USA?",
    answer: "Yes. We work remotely with clothing and apparel brands across the United States. You can share product photos, brand assets and creative references online; our team plans and produces on-model studio, lifestyle and campaign imagery for your collection.",
  },
  {
    question: "Can you create AI model photography using our actual clothing products?",
    answer: "Yes. We create model-led fashion images using your garment photos and references, with attention to silhouette, colour, prints, fabric texture, stitching and fit. We review the finished visuals against the references you provide; the level of detail we can preserve depends on the quality and coverage of those references.",
  },
  {
    question: "Do you provide AI product photography for ecommerce brands?",
    answer: "Yes. We create product-led studio and lifestyle visuals for ecommerce stores, product pages, catalogs, launches and digital advertising. Images can be planned for your website, Shopify store, marketplace listings and social campaigns according to your project requirements.",
  },
  {
    question: "What types of products can you create photography for?",
    answer: "Our services cover clothing and apparel, beauty and skincare, cosmetics, fragrance, footwear, handbags and fashion accessories. We can discuss other product categories when you share the product details and intended use.",
  },
  {
    question: "What do we need to provide to start a photography project?",
    answer: "Start with clear product photos, front and back views where possible, close-up details, logos or pattern files, and a short creative brief. Tell us how many images you need and where you plan to use them. We will review the references and confirm the production scope before work begins.",
  },
  {
    question: "How do you keep clothing details and brand identity consistent?",
    answer: "We use your product references, brand assets, colour palette and creative direction to guide the work. During review, we check visible details such as garment shape, prints, fabric texture, stitching, logos and accessories against the supplied references, then refine the images against the agreed brief.",
  },
  {
    question: "How much do AI fashion and product photography services cost?",
    answer: "Project pricing depends on the number of final images, product category, model and scene requirements, creative complexity and delivery schedule. SetlesStudio offers project packages and can discuss a custom quote for larger catalogs or campaigns. Share your brief for a recommendation.",
  },
  {
    question: "Can I request a sample before starting a larger photography project?",
    answer: "Yes. Contact SetlesStudio with one of your product photos and a short brief to request a sample. We will confirm the sample scope and next steps so you can review our styling, realism and product-detail approach before commissioning a larger project.",
  },
];

export default function HomeFAQs() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <section id="home-faqs" className="container-site py-16" aria-label="Frequently asked questions">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="AI Fashion & Product Photography Services — FAQs"
          text="Straightforward answers about our photography services, project process, product accuracy, pricing and remote work with US brands."
        />
        <div className="mx-auto mt-9 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-semibold text-ink marker:hidden sm:text-lg">
                <span>{faq.question}</span>
                <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-brand">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl pr-8 text-sm leading-7 text-ink-soft sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
