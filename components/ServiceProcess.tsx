import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  steps: ProcessStep[];
};

export default function ServiceProcess({ heading, steps }: Props) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold text-brand md:text-3xl">{heading}</h2>
        </Reveal>

        <div className="mt-10 grid auto-rows-fr grid-cols-2 gap-4 md:gap-5 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="h-full">
              <div className="relative flex h-full flex-col items-center rounded-3xl bg-cream p-5 text-center transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10 md:p-6">
                <span className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                  {step.number}
                </span>
                <div className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-white">
                  <step.icon size={26} className="text-ink/50" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-sm font-bold uppercase leading-snug tracking-wide text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
