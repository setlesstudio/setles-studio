import { trustedBy } from "@/lib/data";

export default function TrustedBy() {
  const row = [...trustedBy, ...trustedBy];
  return (
    <section className="border-y border-ink/[0.06] bg-cream py-10">
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-soft/60">
        Trusted by
      </p>
      <div className="relative mt-6 overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-semibold text-ink/35"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
