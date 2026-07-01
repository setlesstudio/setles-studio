import Image from "next/image";
import Reveal from "@/components/Reveal";

type Props = {
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  after2?: string;
  after2Alt?: string;
};

export default function ServiceBeforeAfter({
  before,
  beforeAlt,
  after,
  afterAlt,
  after2,
  after2Alt,
}: Props) {
  const hasTwo = Boolean(after2);

  return (
    <section className="container-site py-8 md:py-12">
      <div className={`grid gap-4 ${hasTwo ? "md:grid-cols-[0.8fr_1fr_1fr]" : "md:grid-cols-[0.8fr_1fr]"}`}>
        {/* Before */}
        <Reveal>
          <div className="card flex flex-col gap-3 p-5">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-soft/60">
              Before
            </span>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:max-h-[320px] xl:max-h-none">
              <Image
                src={before}
                alt={beforeAlt}
                fill
                sizes="100vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </Reveal>

        {/* After 1 */}
        <Reveal delay={0.1}>
          <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl md:min-h-0">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              After
            </span>
            <Image
              src={after}
              alt={afterAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        {/* After 2 */}
        {hasTwo && (
          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl md:min-h-0">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
              <Image
                src={after2!}
                alt={after2Alt ?? ""}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
