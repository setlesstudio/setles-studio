import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Gift,
  Rocket,
  Layers,
  CircleDollarSign,
  Clock,
} from "lucide-react";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import ImageSlot from "@/components/ImageSlot";
import { process, services, valueProps } from "@/lib/data";

const fastIcons = [Rocket, Layers, CircleDollarSign, Clock];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ Hero */}
      <section className="relative overflow-hidden bg-cream pb-20 pt-36 sm:pt-40">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
          aria-hidden
        />
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p className="eyebrow">AI Fashion Content Studio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Realistic fashion and apparel{" "}
              <span className="text-brand">AI model shoots</span> for ecommerce
              brands.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Create studio, lifestyle, and editorial content for your brand in
              days instead of weeks — at a fraction of traditional production
              costs.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn-primary">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a Free Consultation
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-soft/70">
              7-day average delivery · 500+ projects completed · Top Rated Plus
              on Upwork
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <BeforeAfter
              before="/images/product-image.png"
              after="/images/after-walk.jpg"
              className="aspect-[4/5] w-full shadow-2xl shadow-ink/15"
            />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-ink-soft/60">
              Drag to compare — flat product photo → campaign-ready content
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------ From product to campaign */}
      <section className="container-site py-24">
        <SectionHeading
          eyebrow="Before / After"
          title="From product photo to campaign-ready content"
          text="Send us simple flat product photos. We return realistic on-model imagery with accurate fit, fabric, and detail."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-[0.8fr_1fr_1fr]">
          <Reveal className="card flex flex-col gap-4 p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-soft/60">
              Before
            </span>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/images/product-top.png"
                alt="Navy tank top flat product photo"
                fill
                sizes="33vw"
                className="object-contain p-4"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/images/product-shorts.png"
                alt="Navy bike shorts flat product photo"
                fill
                sizes="33vw"
                className="object-contain p-4"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
              <Image
                src="/images/after-walk.jpg"
                alt="Model wearing the navy activewear set walking outdoors"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
              <Image
                src="/images/after-window.jpg"
                alt="Model wearing the navy activewear set reading by a window"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------- Free sample */}
      <section className="container-site pb-24">
        <Reveal>
          <div className="rounded-4xl border border-brand/20 bg-brand-soft px-8 py-12 text-center sm:px-16">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
              <Gift size={26} />
            </span>
            <p className="eyebrow mt-5">Free sample available</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              See our quality before you invest
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Send us one product image and receive a free sample to evaluate
              our quality, realism, and attention to detail before starting a
              project.
            </p>
            <Link href="/contact?intent=sample" className="btn-primary mt-8">
              Request Free Sample
            </Link>
            <p className="mt-3 text-xs text-ink-soft/70">No credit card required</p>
          </div>
        </Reveal>
      </section>

      <TrustedBy />

      {/* ----------------------------------------------- Why us */}
      <section className="container-site py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => {
            const Icon = fastIcons[i % fastIcons.length];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------- Services */}
      <section className="bg-cream py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title="Fashion content AI services for modern apparel brands"
            text="From ecommerce product imagery to full-scale marketing campaigns, we create high quality visual content that helps fashion brands launch faster, sell more, and stay consistent across every channel."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 0.08}>
                <Link
                  href={`/services#${s.id}`}
                  className="card group flex h-full gap-5 p-5 transition-shadow hover:shadow-xl hover:shadow-ink/10"
                >
                  <ImageSlot
                    src={s.image}
                    alt={s.title}
                    label={s.title}
                    className="hidden aspect-[3/4] w-32 shrink-0 rounded-2xl sm:block"
                    sizes="160px"
                  />
                  <div className="flex flex-col py-1">
                    <span className="font-display text-sm font-semibold text-brand">
                      {s.number}.
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold group-hover:text-brand">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {s.short}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-brand">
                      Learn more{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- Process */}
      <section className="container-site py-24">
        <SectionHeading
          eyebrow="Our process"
          title="Simple. Clear. Effective."
        />
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
              <h3 className="mt-4 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[230px] text-sm leading-relaxed text-ink-soft">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------ Testimonials */}
      <section className="bg-cream py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="What our clients say"
            title="Trusted by creators and brands worldwide"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <CTABand
        title="Let's create something realistic together."
        text="Take your brand to new heights and boost your sales 10x."
        primary={{ href: "/contact", label: "Get Started Today" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
      />
    </>
  );
}
