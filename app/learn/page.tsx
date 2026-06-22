import type { Metadata } from "next";
import Image from "next/image";
import {
  Download,
  Infinity as InfinityIcon,
  TrendingUp,
  Wrench,
  FolderOpen,
  Lightbulb,
  Network,
  FileText,
  ImageIcon,
  Award,
  Star,
  Globe,
  Package,
  Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import Testimonials from "@/components/Testimonials";
import { learnIncluded, learnProducts, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Learn the process behind premium AI fashion content. Workflows, practice files, prompt collections, and creative techniques used for brands worldwide.",
};

const promises = [
  {
    icon: Download,
    title: "Instant Download",
    text: "Access your files immediately after purchase, no waiting.",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Access",
    text: "Pay once and own the product forever, with free future updates.",
  },
  {
    icon: TrendingUp,
    title: "Beginner to Advanced",
    text: "Curriculum designed to guide you from foundational concepts to complex skills.",
  },
  {
    icon: Wrench,
    title: "Practical & Actionable",
    text: "Step by step tutorials and templates you can implement instantly.",
  },
];

const includedIcons = [FolderOpen, Lightbulb, Network, FileText, ImageIcon, InfinityIcon];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="SetlesStudio Learn"
        title={
          <>
            Learn the process behind premium {" "}
            <span className="text-brand">hyper realistic AI </span>fashion content
          </>
        }
        text="Access the same workflows, practice files, prompt collections, and creative techniques used to create realistic fashion content for brands worldwide."
        // image="/images/learn-page-banner.jpeg"
        image="https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1781979297/learn-page-banner_v2ajyu.jpg"
        // imageMobile="/images/learn-page-banner-mobile.jpeg"
        imageMobile="https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1781979297/learn-page-banner-mobile_z2zxio.jpg"
        imageAlt="Fashion model leaning on a vintage car, SetlesStudio editorial photography"
        animateReveal
      >
        <a href="#resources" className="btn-primary">
          Browse Resources
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your learn resources.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-light"
        >
          Contact Us
        </a>
      </PageHero>

      {/* Promise strip */}
      <section className="">
        <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-brand">
          {promises.map((p) => (
            <div key={p.title} className="flex gap-4 lg:px-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <p.icon size={30} />
              </span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-24 py-14">
        <div className="container-site">
          <SectionHeading
            eyebrow="Featured resources"
            title="Premium resources to elevate your content creation"
            text="Step by step guides, prompt packs, and practice files used by professionals to create realistic and high quality fashion content."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learnProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <article className="card group flex h-full flex-col overflow-hidden">
                  <div className="relative">
                    <ImageSlot
                      src={p.image}
                      alt={`${p.title} cover`}
                      label={`${p.title} cover`}
                      className="aspect-[4/5] w-full bg-ink"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                      {p.tag}
                    </span>
                    {p.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/50">
                        <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-brand">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {p.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className={`font-display ${p.comingSoon ? "text-sm text-ink-soft/50" : "text-2xl font-semibold"}`}>
                        {p.price}
                      </span>
                      {!p.comingSoon && (
                        <a
                          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in purchasing "${p.title}". How can I get access?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !px-5 !py-2 text-xs"
                        >
                          Download Now
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand py-12 text-white">
        <div className="container-site">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
            {/* Heading */}
            <div className="flex items-center lg:shrink-0 lg:border-r lg:border-white/25 lg:pr-10">
              <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight lg:text-5xl">
                What&apos;s<br className="hidden lg:block" /> Included
              </h2>
            </div>
            {/* Items */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:flex lg:flex-1 lg:divide-x lg:divide-white/25 lg:gap-0">
              {learnIncluded.map((item, i) => {
                const Icon = includedIcons[i];
                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-2.5 text-center lg:flex-1 lg:px-6 lg:py-2"
                  >
                    <Icon size={32} strokeWidth={1.5} />
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-24 rounded-3xl mt-12">
        <div className="container-site">
          <SectionHeading
            eyebrow="Learn from experience"
            title="Trusted by creators and brands worldwide"
            text="Practical resources used by photographers, designers, content creators, and fashion brands to improve their content quality."
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Final CTA — desktop: full pre-designed image */}
      <section className="hidden md:block container-site pb-14 mt-10">
        <Reveal>
          <a href="#resources" aria-label="Browse all learn resources" className="block overflow-hidden rounded-4xl">
            <Image
              src="/images/laern-page-last-section-full.jpeg"
              alt="Start Learning. Start Creating. — SetlesStudio learn resources"
              width={1440}
              height={576}
              className="w-full h-auto"
              sizes="100vw"
            />
          </a>
        </Reveal>
      </section>

      {/* Final CTA — mobile: text overlay layout */}
      <section className="md:hidden container-site pb-14 mt-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl text-white">
            <Image
              src="/images/book-image-small.png"
              alt="SetlesStudio books and course materials"
              fill
              sizes="100vw"
              className="object-cover object-center lg:hidden"
              priority
            />
            <Image
              src="/images/books-image.png"
              alt="SetlesStudio books and course materials"
              fill
              sizes="100vw"
              className="hidden object-cover object-center lg:block"
              priority
            />

            <div className="relative z-10 flex min-h-[480px] flex-col justify-center lg:min-h-[460px]">
              <div className="pointer-events-none absolute inset-0 bg-ink/60 lg:hidden" />
              <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[linear-gradient(to_left,rgba(28,24,20,0.90)_0%,rgba(28,24,20,0.85)_30%,rgba(28,24,20,0.3)_50%,transparent_62%)]" />

              <div className="relative z-10 flex w-full flex-col items-center px-8 py-16 text-center lg:ml-auto lg:w-1/2 lg:items-start lg:px-16 lg:py-20 lg:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                  Invest in your skills
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                  Start Learning.<br />Start Creating.
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-white/80">
                  Access premium resources that help you create realistic,
                  high quality fashion content and grow your creative business.
                </p>
                <a
                  href="#resources"
                  className="btn mt-8 bg-gold text-sm font-bold uppercase tracking-widest text-ink hover:brightness-110"
                >
                  Browse All Resources
                </a>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 bg-ink/70 px-8 py-5 sm:grid-cols-5 sm:gap-0 sm:divide-x sm:divide-white/10">
              {[
                { Icon: Award,   title: "Top Rated Plus",  sub: "on Upwork" },
                { Icon: Star,    title: "Top 1% Talented", sub: "Professional" },
                { Icon: Globe,   title: "Worked With",     sub: "Global Brands" },
                { Icon: Package, title: "5,000+ Projects", sub: "Delivered Successfully" },
                { Icon: Clock,   title: "4+ Years",        sub: "Industry Experience" },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3 sm:px-5">
                  <Icon size={22} strokeWidth={1.5} className="shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide">{title}</p>
                    <p className="text-xs text-white/55">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
