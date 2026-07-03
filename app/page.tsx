import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Rocket,
  Layers,
  CircleDollarSign,
  Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import ImageSlot from "@/components/ImageSlot";
import FreeSampleBanner from "@/components/FreeSampleBanner";
import { process, services, site, valueProps } from "@/lib/data";

const fastIcons = [Rocket, Layers, CircleDollarSign, Clock];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Realistic AI Fashion Content Studio"
        title={
          <>
            Realistic <span className="text-brand">AI Fashion</span> Photography <br/>for Ecommerce Brands
          </>
        }
        text="Create studio, lifestyle, and editorial content for your brand in days instead of weeks"
        image="https://res.cloudinary.com/dlfb8yn1x/image/upload/f_auto,q_auto/v1782022576/luxury-stairs-wide_pj21rk.jpg"
        imageAlt="Fashion model on luxury stairs"
        animateReveal
      >
        <Link href="/portfolio" className="btn-primary">
          View Our Work <ArrowRight size={16} />
        </Link>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-light"
        >
          Book a Free Consultation
        </a>
        <p className="w-full text-sm text-white/50">
          7-day average delivery · 500+ projects completed · Top Rated Plus on
          Upwork
        </p>
      </PageHero>

      <section className="container-site py-10">
        <SectionHeading
          eyebrow="Before / After"
          title="From product photo to campaign ready content"
          text="Send us simple flat product photos. We return realistic on model imagery with accurate fit, fabric, and detail."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-[0.8fr_1fr_1fr]">
          <Reveal className="card flex flex-col gap-3 p-5">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-soft/60">
              Before
            </span>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/product-image.png"
                alt="Navy tank top flat product photo"
                fill
                sizes="33vw"
                className="object-contain p-3"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[350px] overflow-hidden rounded-3xl">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
              <Image
                src="https://res.cloudinary.com/dlfb8yn1x/image/upload/f_auto,q_auto/v1783061426/after-walk_jgjfsx.jpg"
                alt="Model wearing the navy activewear set walking outdoors"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[350px] overflow-hidden rounded-3xl">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
              <Image
                src="https://res.cloudinary.com/dlfb8yn1x/image/upload/f_auto,q_auto/v1783061417/after-window_bpn6g6.jpg"
                alt="Model wearing the navy activewear set reading by a window"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FreeSampleBanner />

      <TrustedBy />

      <section className="container-site py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => {
            const Icon = fastIcons[i % fastIcons.length];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
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

      <section className="bg-cream py-14 rounded-3xl">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title="Hyper realistic AI fashion services for modern apparel brands"
            text="From ecommerce product imagery to full scale marketing campaigns, we create high quality visual content that helps fashion brands launch faster, sell more, and stay consistent across every channel."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 0.08}>
                <Link
                  href={`/services/${s.id}`}
                  className="card group flex h-full gap-5 p-5 transition-shadow hover:shadow-xl hover:shadow-ink/10"
                >
                  {s.video ? (
                    <div className="relative hidden aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-2xl bg-ink sm:block">
                      <Image
                        src={s.video
                          .replace("/video/upload/", "/video/upload/q_auto,w_320,so_0/")
                          .replace(".mp4", ".jpg")}
                        alt={s.title}
                        fill
                        sizes="128px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <ImageSlot
                      src={s.image}
                      alt={s.title}
                      label={s.title}
                      className="hidden aspect-[3/4] w-32 shrink-0 rounded-2xl sm:block"
                      sizes="160px"
                    />
                  )}
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

      <section className="container-site py-14">
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

      <section className="bg-cream py-14 rounded-3xl">
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
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get started with SetlesStudio.")}`, label: "Get Started Today" }}
        secondary={{ href: "/portfolio", label: "View Our Work" }}
        image="/images/home-page-last-section-image.jpeg"
      />
    </>
  );
}
