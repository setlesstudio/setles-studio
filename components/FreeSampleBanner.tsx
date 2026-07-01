"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { site } from "@/lib/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.6, 0.35, 1] } },
};

const waText = "Hi, I'd like to request a free sample of your AI fashion photography.";

export default function FreeSampleBanner() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="container-site pb-24">
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
        className="relative overflow-hidden rounded-4xl bg-cream px-8 py-12 text-center sm:px-16"
      >
        {/* <div className="pointer-events-none absolute -left-20 -top-12 h-80 w-80 animate-pulse rounded-full bg-brand/15 blur-3xl" /> */}
        {/* <div
          className="pointer-events-none absolute -bottom-12 -right-20 h-80 w-80 animate-pulse rounded-full bg-brand/10 blur-3xl"
          style={{ animationDelay: "1.3s" }}
        /> */}

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {/* Icon — floating + slow-spinning dashed ring */}
          <motion.div variants={fadeUp} className="relative mx-auto w-fit">
            <span className="pointer-events-none absolute -inset-3 animate-spin rounded-3xl border border-dashed border-brand/35 [animation-duration:9s]" />
            <span className="relative mx-auto grid h-16 w-16 animate-float place-items-center rounded-2xl bg-brand text-white">
              <Gift size={30} />
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="eyebrow mt-7">
            Free sample available
          </motion.p>

          <motion.h2 variants={fadeUp} className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            See our quality before you invest
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-5xl text-ink-soft">
            Send us one product image and receive a free sample to evaluate our quality,
            realism, and attention to detail before starting a project.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Request Free Sample
            </a>
            <p className="mt-2 text-xs text-ink-soft/70">No credit card required</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
