"use client";

import { useState } from "react";
import {
  Mail,
  Clock,
  Globe,
  CheckCircle2,
  Send,
  ImageIcon,
  ShieldCheck,
  Zap,
  Repeat2,
  DollarSign,
  TrendingUp,
  Plus,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/data";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  "Select a service",
  "AI Fashion Photography",
  "Product Photography",
  "Lifestyle Campaigns",
  "Editorial Photography",
  "Footwear Photography",
  "UGC Video Production",
  "AI Influencer/Models",
  "Social Media Ad Creatives",
];

const WHY_ITEMS = [
  { icon: ImageIcon,   title: "Ultra-realistic AI Images",  text: "Indistinguishable from traditional photoshoots — every fabric, texture, and detail perfected." },
  { icon: ShieldCheck, title: "Commercial Usage",           text: "Full commercial rights included. Use your visuals anywhere, on any platform, without restrictions." },
  { icon: Zap,         title: "Fast Delivery",              text: "Average 7-day turnaround. Starter projects ship in as little as 3 business days." },
  { icon: Repeat2,     title: "Brand Consistency",          text: "Consistent models, lighting, and style across your entire catalog for a cohesive brand identity." },
  { icon: DollarSign,  title: "Affordable Pricing",         text: "10× more affordable than traditional photoshoots without compromising on quality." },
  { icon: TrendingUp,  title: "Unlimited Scalability",      text: "Scale from 20 images to 200+ with no additional logistics, models, or studio costs." },
];

const CONTACT_FAQS = [
  {
    q: "How quickly do you respond?",
    a: "We respond to every inquiry within 24 hours on business days. For urgent projects, reach out via WhatsApp for a faster reply.",
  },
  {
    q: "Can you handle bulk orders?",
    a: "Absolutely. We regularly handle large-scale catalog projects with hundreds of images. Our workflow is built for volume without sacrificing quality.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. We are happy to sign a Non-Disclosure Agreement before discussing your project details. Just mention it in your inquiry.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. All packages include revision rounds. We work with you until the results match your brand vision and quality expectations.",
  },
];

// ─── Input styles (matching existing ContactForm) ─────────────────────────────
const inputCls =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-ink/30 focus:border-brand";

function Field({
  label,
  required,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </label>
      {children}
    </div>
  );
}

// ─── FAQ Accordion (reuses same pattern as existing FAQ component) ─────────────
function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto grid max-w-4xl gap-4">
      {CONTACT_FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`card overflow-hidden transition-colors ${isOpen ? "border-brand/30" : ""}`}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold">{f.q}</span>
              <Plus size={18} className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            {isOpen && (
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Form ────────────────────────────────────────────────────────────────
function ProjectForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong while sending your inquiry. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong while sending your inquiry. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-12 text-center">
        <CheckCircle2 size={48} className="text-brand" />
        <h2 className="mt-4 font-display text-2xl font-semibold">Inquiry Sent!</h2>
        <p className="mt-2 max-w-sm text-ink-soft">
          Thank you! Your project inquiry has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="card grid gap-5 p-8 sm:p-10" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required htmlFor="name">
          <input id="name" name="name" required placeholder="Jane Smith" className={inputCls} />
        </Field>
        <Field label="Company Name" htmlFor="company">
          <input id="company" name="company" placeholder="Your Brand Co." className={inputCls} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email Address" required htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="jane@brand.com" className={inputCls} />
        </Field>
        <Field label="Phone / WhatsApp Number" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" className={inputCls} />
        </Field>
      </div>

      <Field label="Brand / Website URL" htmlFor="website">
        <input id="website" name="website" type="url" placeholder="https://yourbrand.com" className={inputCls} />
      </Field>

      <Field label="Service Required" required htmlFor="service">
        <select id="service" name="service" required defaultValue="Select a service" className={inputCls}>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s} disabled={s === "Select a service"}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Number of Images Needed" htmlFor="images">
          <input id="images" name="images" placeholder="e.g. 50 images" className={inputCls} />
        </Field>
        <Field label="Deadline" htmlFor="deadline">
          <input id="deadline" name="deadline" placeholder="e.g. 2 weeks" className={inputCls} />
        </Field>
      </div>

      <Field label="Budget Range" htmlFor="budget">
        <input id="budget" name="budget" placeholder="e.g. $500 – $1,000" className={inputCls} />
      </Field>

      <Field label="Project Details / Message" required htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your products, goals, style references, and anything else that helps us understand your project…"
          className={inputCls}
        />
      </Field>

      {status === "error" && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send Project <Send size={15} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-ink-soft/70">
        We reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPageClient() {
  return (
    <>

      <PageHero
          eyebrow="Contact Us"
          title={
            <>
              Send us one product.{" "}
              <span className="text-brand">We&apos;ll shoot it free.</span>
            </>
          }
          titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold"
          text="One product image is all we need. You'll get it back on a model in 2 days — no cost."
          textClassName="text-lg md:text-xl lg:text-2xl"
          image="/images/project_image.jpeg"
          imageMobile="/images/project_image.jpeg"
          animateReveal
          isContactPage={true}
        />

      {/* Form + Contact Info */}
      <section className="container-site grid gap-12 py-24 lg:grid-cols-[1fr_1.6fr]">
        {/* Left: contact info */}
        <Reveal className="space-y-6">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              We&apos;d love to hear about your project
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Fill in the form and our team will review your requirements and get back to you with a tailored proposal.
            </p>
          </div>

          {/* Contact cards */}
          {[
            { icon: Mail,  label: "Email",         value: "setlesstudio@gmail.com", href: "mailto:setlesstudio@gmail.com" },
            { icon: Clock, label: "Response Time", value: "Within 24 Hours",        href: null },
            { icon: Globe, label: "Availability",  value: "Worldwide",              href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/40">{label}</p>
                {href ? (
                  <a href={href} className="mt-0.5 font-semibold text-brand hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="mt-0.5 font-semibold">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* What happens next */}
          <div className="card p-6 text-sm leading-relaxed text-ink-soft">
            <p className="font-bold text-ink">What happens next?</p>
            <ol className="mt-3 list-decimal space-y-2 pl-4">
              <li>We review your products and goals.</li>
              <li>You get a tailored proposal and timeline.</li>
              <li>We start with a sample so you can judge the quality first.</li>
            </ol>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <ProjectForm />
        </Reveal>
      </section>

      {/* Why Work With Us */}
      <section className="bg-cream py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Work With Us"
            title="Everything your brand needs, delivered fast"
            text="We combine cutting-edge AI technology with professional creative direction to produce visuals that convert."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <item.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          text="Quick answers to the most common questions about working with us."
        />
        <div className="mt-12">
          <ContactFAQ />
        </div>
      </section>

      <CTABand
        title="Not ready to fill the form? Let's talk first."
        text="Book a free consultation and we'll walk you through exactly what we can create for your brand."
        primary={{
          href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`,
          label: "Book a Free Consultation",
        }}
        image="/images/contact-page-last-section.jpeg"
      />
    </>
  );
}
