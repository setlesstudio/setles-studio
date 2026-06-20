import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Gem, Zap, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/CTABand";
import { process, site, stats, team } from "@/lib/data";

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
        image="/images/about-page-banner-image.jpeg"
        imageMobile="/images/about-page-banner-image-mobile.jpeg"
        imageAlt="SetlesStudio fashion content studio"
        animateReveal
      />

      {/* Story */}
      <section className="container-site py-12">
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

      <CTABand
        title="Ready to elevate your brand with premium fashion content?"
        text="Let's create something amazing together."
        primary={{ href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to start a project with SetlesStudio.")}`, label: "Start Your Project" }}
        image={'/images/about-last-banner-picture.png'}
      />
    </>
  );
}
