import type { Metadata } from "next";
import { Mail, Clock, Gift } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project, request a free sample, or book a free consultation with SetlesStudio.",
};

const points = [
  {
    icon: Gift,
    title: "Free sample available",
    text: "Send one product image and receive a free sample. No credit card required.",
  },
  {
    icon: Clock,
    title: "Reply within 24 hours",
    text: "We respond to every project inquiry within one business day.",
  },
  {
    icon: Mail,
    title: "Prefer email?",
    text: site.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s create something{" "}
            <span className="text-brand">amazing together</span>
          </>
        }
        text="Tell us about your brand and what you need. We'll come back with a plan, a timeline, and a free sample if you want one."
      />

      <section className="container-site grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <p.icon size={20} />
              </span>
              <div>
                <h2 className="font-bold">{p.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
          <div className="card p-6 text-sm leading-relaxed text-ink-soft">
            <p className="font-bold text-ink">What happens next?</p>
            <ol className="mt-3 list-decimal space-y-2 pl-4">
              <li>We review your products and goals.</li>
              <li>You get a tailored proposal and timeline.</li>
              <li>We start with a sample so you can judge the quality first.</li>
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
