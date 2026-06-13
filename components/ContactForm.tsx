"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { pricingTiers, services } from "@/lib/data";

const intents = [
  { value: "project", label: "Start a project" },
  { value: "sample", label: "Request a free sample" },
  { value: "consultation", label: "Book a free consultation" },
  { value: "custom", label: "Custom quote" },
  { value: "learn", label: "Question about Learn resources" },
];

function Field({
  label,
  children,
  htmlFor,
}: {
  label: string;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-ink/30 focus:border-brand";

function FormInner() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);

  const defaultIntent = params.get("intent") ?? "project";
  const defaultPlan = params.get("plan") ?? "";
  const defaultService = params.get("service") ?? "";

  if (sent) {
    return (
      <div className="card flex flex-col items-center p-12 text-center">
        <CheckCircle2 size={44} className="text-brand" />
        <h2 className="mt-4 font-display text-2xl font-semibold">
          Message sent
        </h2>
        <p className="mt-2 max-w-sm text-ink-soft">
          Thanks for reaching out. We&apos;ll reply within 24 hours with next
          steps.
        </p>
      </div>
    );
  }

  return (
    <form
      className="card grid gap-5 p-8 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire this to your backend / email service (e.g. a Next.js
        // route handler posting to Resend, Formspree, or your CRM).
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required placeholder="Jane Smith" className={inputCls} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@brand.com"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Brand / company" htmlFor="brand">
        <input id="brand" name="brand" placeholder="Your brand name" className={inputCls} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="What do you need?" htmlFor="intent">
          <select id="intent" name="intent" defaultValue={defaultIntent} className={inputCls}>
            {intents.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Package (optional)" htmlFor="plan">
          <select id="plan" name="plan" defaultValue={defaultPlan} className={inputCls}>
            <option value="">Not sure yet</option>
            {pricingTiers.map((t) => (
              <option key={t.name} value={t.name.toLowerCase()}>
                {t.name} — {t.price}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Service of interest (optional)" htmlFor="service">
        <select id="service" name="service" defaultValue={defaultService} className={inputCls}>
          <option value="">Any / multiple</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Products, quantity of images, channels, timeline…"
          className={inputCls}
        />
      </Field>

      <button type="submit" className="btn-primary w-full">
        Send Message <Send size={15} />
      </button>
      <p className="text-center text-xs text-ink-soft/70">
        We reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="card h-96 animate-pulse" />}>
      <FormInner />
    </Suspense>
  );
}
