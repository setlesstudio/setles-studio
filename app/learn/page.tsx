import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Infinity as InfinityIcon,
  TrendingUp,
  Wrench,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import Testimonials from "@/components/Testimonials";
import { learnIncluded, learnProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Learn the process behind premium AI fashion content — workflows, practice files, prompt collections, and creative techniques used for brands worldwide.",
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
    text: "Step-by-step tutorials and templates you can implement instantly.",
  },
];

export default function LearnPage() {
  return (
    <>
      {/* Hero — dark + gold education look from the Learn design */}
      <section className="relative overflow-hidden bg-ink pb-24 pt-40 text-white">
        <div
          className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
          aria-hidden
        />
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              SetlesStudio Learn
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
              Learn the process behind{" "}
              <span className="text-gold">premium AI fashion content</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Access the same workflows, practice files, prompt collections, and
              creative techniques used to create realistic fashion content for
              brands worldwide.
            </p>
            <a href="#resources" className="btn mt-9 bg-gold text-ink hover:brightness-110">
              Browse Resources <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <ImageSlot
              src="/images/learn-hero.jpeg"
              alt="Fashion model leaning on a vintage car — SetlesStudio editorial photography"
              label="Learn hero image"
              className="aspect-[4/5] w-full rounded-4xl"
              imageClassName="object-center"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* Promise strip */}
      <section className="border-b border-ink/[0.06]">
        <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <p.icon size={20} />
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
      <section id="resources" className="scroll-mt-24 py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Featured resources"
            title="Premium resources to elevate your content creation"
            text="Step-by-step guides, prompt packs, and practice files used by professionals to create realistic and high-quality fashion content."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learnProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <article className="card group flex h-full flex-col overflow-hidden">
                  <div className="relative">
                    {/* Cover slot: set p.image in lib/data.ts, e.g. /images/learn-masterclass.jpg */}
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
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-brand">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {p.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display text-2xl font-semibold">
                        {p.price}
                      </span>
                      <Link
                        href={`/contact?product=${p.id}`}
                        className="btn-primary !px-5 !py-2 text-xs"
                      >
                        Download Now
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand py-20 text-white">
        <div className="container-site">
          <h2 className="text-center font-display text-3xl font-semibold">
            What&apos;s included
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {learnIncluded.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
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

      {/* Final CTA */}
      <section className="container-site pb-24">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-4xl bg-ink p-10 text-white sm:p-14 lg:grid-cols-[1fr_1.2fr]">
            {/* Image slot: replace src with e.g. /images/learn-cta.jpg */}
            <ImageSlot
              src=""
              alt="SetlesStudio learning materials"
              label="Learn CTA image"
              className="aspect-[4/3] w-full rounded-3xl"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                Invest in your skills
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Start learning. Start creating.
              </h2>
              <p className="mt-4 max-w-md text-white/65">
                Access premium resources that help you create realistic,
                high-quality fashion content and grow your creative business.
              </p>
              <a href="#resources" className="btn mt-8 bg-gold text-ink hover:brightness-110">
                Browse All Resources
              </a>
              <p className="mt-6 text-xs text-white/40">
                Top Rated Plus on Upwork · Top 1% talent · 5,000+ projects
                delivered · 4+ years of industry experience
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
