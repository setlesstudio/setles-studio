import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type FeatureItem = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  subheading: string;
  items: FeatureItem[];
};

export default function ServiceFeatures({ heading, subheading, items }: Props) {
  return (
    <section className="py-14">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold text-brand md:text-3xl">{heading}</h2>
          <p className="mt-2 text-ink-soft">{subheading}</p>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-around gap-4 lg:gap-0">
          {items.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.07} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(17%-13px)]">
              <div className="card h-full p-5 lg:p-3 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 lg:w-10 lg:h-10 place-items-center rounded-xl bg-brand-soft text-brand">
                    <item.icon size={20} />
                  </span>
                  <span className="text-xs font-bold text-ink/25">{item.number}</span>
                </div>
                <h3 className="mt-4 font-bold lg:text-sm">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft lg:text-[12px]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
