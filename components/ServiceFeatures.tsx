import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type FeatureItem = {
  number: string;
  icon: LucideIcon;
  title: string;
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

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.07}>
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-ink/[0.07] bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/25 hover:shadow-md">
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cream transition-colors duration-200 group-hover:bg-brand-soft">
                    <item.icon size={26} className="text-ink/50" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
                    {item.number}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug text-ink">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
