import { Gift } from "lucide-react";
import { site } from "@/lib/data";

const waText = "Hi, I'd like to request a free sample of your AI fashion photography.";

export default function FreeSampleBanner() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="container-site pb-24">
      <div className="relative overflow-hidden rounded-4xl bg-cream px-8 py-12 text-center sm:px-16">
        <div className="relative mx-auto w-fit">
          <span className="pointer-events-none absolute -inset-3 rounded-3xl border border-dashed border-brand/35" />
          <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand text-white">
            <Gift size={30} />
          </span>
        </div>
        <p className="eyebrow mt-7">Free sample available</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          See our quality before you invest
        </h2>
        <p className="mx-auto mt-4 max-w-5xl text-ink-soft">
          Share a product photo and short creative brief to request a free sample. See how our team approaches styling, realistic model imagery and product details before you commission a larger project. US and international clients can share their references online.
        </p>
        <div className="mt-5">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Request Free Sample
          </a>
          <p className="mt-2 text-xs text-ink-soft">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
