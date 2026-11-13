import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Gem, Zap, Users } from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import { process, site, stats, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About SetlesStudio | AI Product Photography Studio",
  description: "Meet SetlesStudio, a creative studio offering AI product photography for fashion and ecommerce brands. Learn about our team, process, and services.",
  alternates: {
    canonical: "https://www.setlesstudio.com/about",
  },
  openGraph: {
    title: "About SetlesStudio | AI Product Photography Studio",
    description: "Meet SetlesStudio, a creative studio offering AI product photography for fashion and ecommerce brands. Learn about our team, process, and services.",
    url: "https://www.setlesstudio.com/about",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/about-setlesstudio.webp",
        width: 2752,
        height: 1536,
        alt: "Man seated in a bright office with plants and laptops",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SetlesStudio | AI Product Photography Studio",
    description: "Meet SetlesStudio, a creative studio offering AI product photography for fashion and ecommerce brands. Learn about our team, process, and services.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/about-setlesstudio.webp"],
  },
};

const values = [
  { icon: Heart, label: "Fashion Focused" },
  { icon: Gem, label: "Premium Quality" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Users, label: "Client First" },
];

const aboutFaqs = [
  {
    "q": "What does SetlesStudio do?",
    "a": "SetlesStudio is a creative studio offering AI product photography, fashion imagery, lifestyle campaigns, and video ads for ecommerce brands. Our team works from your product photos and creative references to prepare visuals for your store and marketing."
  },
  {
    "q": "What is AI product photography?",
    "a": "AI product photography combines artificial intelligence with creative editing to produce product visuals from existing photographs. It can show a product against a studio background, in a lifestyle setting, or with an AI model."
  },
  {
    "q": "Which products can SetlesStudio create images for?",
    "a": "We work with clothing, footwear, handbags, accessories, and jewelry. Share your product photos and the type of image you need so we can confirm the best approach for your project."
  },
  {
    "q": "What photos should I send to start a project?",
    "a": "Send clear product photos showing the front, back, and important details, such as logos, stitching, texture, and hardware. Include your preferred backgrounds, model references, image sizes, and intended use."
  },
  {
    "q": "How do you check product details in AI images?",
    "a": "Our team compares the created images with your supplied references, paying attention to product shape, color, material, logos, and other visible details. You review the results and request the refinements agreed for your project."
  },
  {
    "q": "Can you turn flat lay clothing photos into model images?",
    "a": "Yes. We use your clothing photos to create AI model images for studio, lifestyle, and campaign settings. Clear garment references help us present the design consistently across the requested shots."
  },
  {
    "q": "Can I use the images for my ecommerce store?",
    "a": "Images can be prepared for product pages, catalogs, social media, and advertising. Tell us your required dimensions and platform before production. Marketplace image rules should be checked for each intended placement."
  },
  {
    "q": "How much does AI product photography cost?",
    "a": "The cost depends on the products, number of images, backgrounds, model requirements, and editing complexity. Review our pricing page or send your brief for a quote covering deliverables and agreed revisions."
  },
  {
    "q": "How long does an AI photography project take?",
    "a": "Timing depends on the size and complexity of your brief and the review rounds required. We confirm the delivery schedule with you before production begins."
  },
  {
    "q": "How do I choose an AI product photography studio?",
    "a": "Compare examples with their original product photos. Check whether colors, logos, proportions, and textures remain consistent. Ask what files, revisions, usage terms, and delivery dates are included before choosing a studio."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-ink pt-20 text-white lg:pt-0" aria-labelledby="about-heading">
        <Image src="/images/about-setlesstudio.webp" alt="Man in a blue polo seated in an office with plants and laptops" width={2752} height={1536} priority unoptimized className="h-auto w-full" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/75 via-black/35 to-transparent lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden h-32 bg-gradient-to-b from-black/65 to-transparent lg:block" />
        <div className="relative px-6 py-10 lg:absolute lg:inset-y-0 lg:left-[5%] lg:flex lg:w-[48%] lg:flex-col lg:justify-center lg:px-0 lg:pb-8 lg:pt-24">
          <p className="eyebrow text-brand">About SetlesStudio</p>
          <h1 id="about-heading" className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl xl:text-5xl">Your creative studio for <span className="text-brand">AI product photography</span></h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 xl:text-lg">We turn product photos into realistic studio, lifestyle, and model imagery for fashion and ecommerce brands.</p>
        </div>
      </section>

      {/* Story */}
      <section className="container-site py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Image src="/images/setlesstudio-creative-work.webp" alt="Man in a blue polo working on a laptop in a plant-filled office" width={1792} height={2400} unoptimized className="mx-auto h-auto w-full max-w-md rounded-4xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Built on passion. Driven by creativity.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              SetlesStudio helps fashion and ecommerce brands create AI product photography from existing product images. We bring together creative direction, image production, and editing to build a consistent visual style for each collection.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              From apparel on AI models to footwear and handbag photography, we plan each project around your products, references, and intended use. Our team reviews the finished visuals against your supplied images before delivery.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {values.map((v) => (
                <div key={v.label} className="text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                    <v.icon size={20} />
                  </span>
                  <p className="mt-2 text-xs font-bold">{v.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-14 rounded-3xl">
        <div className="container-site">
          <SectionHeading
            eyebrow="Meet the team"
            title="The minds behind SetlesStudio"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 0.08}>
                <div className="text-center">
                  <ImageSlot
                    src={member.image}
                    alt={`${member.role} portrait`}
                    label="Team portrait"
                    className="aspect-[4/5] w-full rounded-3xl"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                  <h3 className="mt-4 font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Expertise */}
      <section className="container-site py-8">
        <Reveal>
          <div className="rounded-4xl bg-cream px-10 py-12 sm:px-16 sm:py-14">
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              Trusted Expertise. <span className="text-brand">Proven Results.</span>
            </h2>
            <p className="mt-8 text-justify leading-relaxed text-ink-soft">
              Our team has worked with fashion brands worldwide through
              leading freelance marketplaces and direct client partnerships.
              With years of experience in fashion content creation, apparel
              marketing, and visual production with the help of AI, we help
              brands create premium content that stands out in competitive
              markets.
            </p>
            <p className="mt-6 text-justify leading-relaxed text-ink-soft">
              Our Creative Director is a Top Rated Plus professional on
              Upwork with extensive experience in apparel and fashion AI
              content creation. Having successfully delivered projects for
              brands across multiple countries, our team combines creative
              expertise, attention to detail, and industry knowledge to
              produce realistic, high quality fashion visuals. Today,
              SetlesStudio brings together skilled professionals dedicated
              to helping brands create impactful content with consistency,
              accuracy, and premium quality.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-brand py-16 text-white">
        <div className="container-site grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="container-site py-14">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-cream px-8 py-12 sm:px-14">
            <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
              Awards and Certifications
            </h2>
            <div className="mt-5 grid items-center gap-4 sm:grid-cols-3">
              <div className="p-4 md:p-8">
                <Image
                  src="/images/upwork-toprated-badge.png"
                  alt="Upwork Top Rated"
                  width={280}
                  height={140}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="p-4 md:p-8">
                <Image
                  src="/images/fiver-badge.png"
                  alt="Fiverr's Choice, 5.0 Pro Verified"
                  width={280}
                  height={140}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="p-4 md:p-8">
                <Image
                  src="/images/badge-upwork.png"
                  alt="Upwork Top Rated Plus and 100% Job Success"
                  width={280}
                  height={140}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="container-site py-14">
        <SectionHeading eyebrow="Our process" title="Simple. Clear. Effective." />
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
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-[230px] text-sm leading-relaxed text-ink-soft">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site py-14" aria-labelledby="about-faq-heading">
        <h2 id="about-faq-heading" className="mb-8 text-center font-display text-2xl font-semibold sm:text-3xl">Questions about our AI product photography studio</h2>
        <FAQ faqs={aboutFaqs} />
        <p className="mt-8 text-center text-ink-soft">Explore our <Link href="/services" className="text-brand underline">AI photography services</Link>, <Link href="/portfolio" className="text-brand underline">portfolio</Link>, and <Link href="/pricing" className="text-brand underline">pricing</Link>.</p>
      </section>
      <section className="bg-cream px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Let’s create your next <span className="text-brand">product images</span></h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-soft">Share your product photos, creative references, and image requirements. We’ll help you plan AI product photography for your collection, online store, or next campaign.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to discuss AI product photography with SetlesStudio.")}`} className="btn-primary">Discuss Your Project</a>
            <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3 font-semibold text-ink">View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
