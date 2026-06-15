import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Gem, Zap, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { process, stats, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SetlesStudio helps fashion brands create high quality visual content that inspires, connects, and drives real results. Meet the team behind the work.",
};

const values = [
  { icon: Heart, label: "Fashion Focused" },
  { icon: Gem, label: "Premium Quality" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Users, label: "Client First" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Creating premium fashion AI content{" "}
            <span className="text-brand">for modern apparel brands</span>
          </>
        }
        text="SetlesStudio helps fashion brands create high quality visual content that inspires, connects, and drives real results."
        image="/images/about-page-banner-imageee.png"
        imageAlt="SetlesStudio fashion content studio"
      />

      {/* Story */}
      <section className="container-site py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <ImageSlot
              src="/images/about-story.png"
              alt="SetlesStudio team working on AI fashion content"
              label="Our story image"
              className="aspect-[4/3] w-full rounded-4xl"
              imageClassName=""
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Built on passion. Driven by creativity.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              SetlesStudio was created to help apparel brands produce premium
              content with the power of AI, without the limitations of
              traditional photoshoots and high production costs.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We combine creativity, fashion expertise, and advanced AI content
              production techniques to deliver visuals that look real, feel
              premium, and perform across every platform.
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
      <section className="bg-cream py-14">
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

      {/* Awards */}
      <section className="container-site py-14">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-cream px-8 py-12 sm:px-14">
            <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
              Awards and Certifications
            </h2>
            <div className="mt-10 grid items-center gap-4 sm:grid-cols-3">
              {/* Upwork Top Rated Plus + 100% Job Success */}
              <div className="flex items-center justify-center p-4">
                <Image
                  src="/images/badge-upwork-top-rated-plus.png"
                  alt="Upwork Top Rated Plus and 100% Job Success"
                  width={340}
                  height={200}
                  className="h-auto w-full max-w-[320px] object-contain"
                />
              </div>
              {/* Fiverr's Choice */}
              <div className="flex items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
                <Image
                  src="/images/badge-fiverr-choice.jpg"
                  alt="Fiverr's Choice — 5.0 Pro Verified"
                  width={280}
                  height={140}
                  className="h-auto w-full object-contain"
                />
              </div>
              {/* Upwork Top Rated */}
              <div className="flex items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
                <Image
                  src="/images/badge-upwork-top-rated.jpg"
                  alt="Upwork Top Rated"
                  width={280}
                  height={140}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
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

      <CTABand
        title="Ready to elevate your brand with premium fashion content?"
        text="Let's create something amazing together."
        primary={{ href: "/contact", label: "Start Your Project" }}
        image={'/images/about-last-banner-image.png'}
      />
    </>
  );
}
