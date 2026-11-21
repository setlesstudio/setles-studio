"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function HomeProjectBrief() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fields.get("name"), email: fields.get("email"), message: fields.get("message"), service: "Homepage project brief" }),
      });
      if (!response.ok) throw new Error("Delivery failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  const field = "mt-1 block w-full rounded-2xl border border-white/30 bg-black/20 px-4 py-2 text-base font-normal tracking-normal text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white";
  return (
    <form onSubmit={submit} aria-labelledby="project-brief-heading" className="w-full max-w-lg rounded-3xl border border-[#ff995c]/50 bg-gradient-to-br from-[#f26a1b]/35 to-[#291407]/75 p-5 text-white shadow-xl backdrop-blur-xl sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-orange-100">Start a project</p>
      <h2 id="project-brief-heading" className="mt-1 font-display text-xl font-semibold">Tell us what you’re launching.</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium">Name<input className={field} name="name" autoComplete="name" required /></label>
        <label className="text-sm font-medium">Email<input className={field} type="email" name="email" autoComplete="email" required /></label>
        <label className="text-sm font-medium sm:col-span-2">What are you launching?<textarea className={field + " resize-y"} name="message" rows={2} required /></label>
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 font-semibold text-ink disabled:opacity-70">
        {status === "sending" ? "Sending…" : "Send the brief"} <ArrowRight size={16} aria-hidden="true" />
      </button>
      <p role="status" className="mt-2 text-center text-xs leading-relaxed text-white">
        {status === "sent" ? "Your brief has been sent. We’ll reply to your email." : status === "error" ? "Your brief couldn’t be sent. Please try again or message us on WhatsApp below." : "We reply within one business day."}
      </p>
    </form>
  );
}
