import StructuredData from "@/components/StructuredData";
import SectionHeading from "@/components/SectionHeading";

const homeFaqs = [
  {
    question: "What AI fashion and product photography services does SetlesStudio offer?",
    answer: "SetlesStudio provides professional AI fashion and product photography for clothing, beauty, skincare, footwear, handbags and ecommerce brands. Our services include AI model photography, product images, studio visuals, lifestyle scenes and commercial campaign content. We work remotely with brands in the United States and worldwide.",
  },
  {
    question: "Do you provide AI fashion photography for clothing brands in the USA?",
    answer: "Yes. SetlesStudio creates AI fashion photography for clothing and apparel brands across the United States. Share clear garment photos, brand references and your creative brief, and our team will create realistic model images for product pages, collections and advertising campaigns.",
  },
  {
    question: "Can US ecommerce brands order AI product photography remotely?",
    answer: "Yes. US ecommerce brands can work with SetlesStudio remotely. We create professional AI product photography for online stores, product listings, website banners, catalogs and digital advertising using the product images and brand references you provide.",
  },
  {
    question: "Is SetlesStudio an AI image generator or a professional photography service provider?",
    answer: "SetlesStudio is a professional AI fashion and product photography service provider, not a self service image generator or software tool. Our team handles creative direction, image creation, visual refinement and final delivery according to your project brief.",
  },
  {
    question: "Can you create AI model photography using our actual clothing products?",
    answer: "Yes. We use your actual garment photographs and references to create AI model photography. We review visible details such as garment shape, colour, print, fabric texture, stitching and fit. Accuracy depends on the quality and detail of the product references supplied.",
  },
  {
    question: "What product categories can SetlesStudio create photography for?",
    answer: "We create AI photography for apparel, activewear, dresses, footwear, handbags, fashion accessories, beauty products, skincare, cosmetics and fragrance. Contact us with details if your product category is not listed.",
  },
  {
    question: "Do you work with brands outside the United States?",
    answer: "Yes. SetlesStudio provides remote AI fashion and product photography services to brands in the United States and worldwide. You can share product photos, logos, packaging details and creative references online.",
  },
  {
    question: "What should I provide to start an AI photography project?",
    answer: "Please share clear product photos, front and back views where possible, close up details, logos or pattern files, your preferred image quantity and a short creative brief. These references help us plan the photography around your brand and products.",
  },
  {
    question: "How do you maintain product accuracy and brand consistency?",
    answer: "We use your product photographs, logos, colours, packaging and creative references throughout production. Our team reviews the finished images against the supplied materials and refines visible product details where needed. The final result depends on the quality of the original references.",
  },
  {
    question: "How much do AI fashion and product photography services cost, and can I request a sample?",
    answer: "Pricing depends on the number of images, product category, model and scene requirements, creative complexity and delivery schedule. You can contact SetlesStudio with a product photo and brief to request a sample and discuss the right package for your project.",
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
          title="AI Fashion and Product Photography Services FAQs"
          text="Answers about our photography services for US brands, product accuracy, project requirements, pricing and worldwide remote work."
        />
        <div className="mx-auto mt-9 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-semibold text-ink marker:hidden sm:text-lg">
                <span>{faq.question}</span>
                <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-brand transition-transform group-open:rotate-45">+</span>
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
