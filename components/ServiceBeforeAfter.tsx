import ComparisonFigure from "@/components/ComparisonFigure";
import { imageDescription } from "@/lib/image-descriptions";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type Props = {
  lightStudio?: boolean;
  before: string;
  beforeAlt: string;
  beforeCaption: string;
  afterCaption: string;
  after2Caption?: string;
  after?: string;
  afterAlt: string;
  afterVideo?: string;
  after2?: string;
  after2Alt?: string;
};

export default function ServiceBeforeAfter({
  lightStudio = false,
  before,
  beforeAlt,
  beforeCaption,
  afterCaption,
  after2Caption,
  after,
  afterAlt,
  afterVideo,
  after2,
  after2Alt,
}: Props) {
  const hasTwo = Boolean(after2);
  const studioFrame = "relative mx-auto h-[clamp(245px,52vw,390px)] w-full max-w-[320px] overflow-hidden rounded-3xl bg-[#f7f7f5]";

  return (
    <section className="container-site py-8 md:py-12">
      <div className={`grid gap-4 ${hasTwo ? "md:grid-cols-[0.8fr_1fr_1fr]" : afterVideo ? "md:grid-cols-[1fr_0.45fr]" : "md:grid-cols-[0.8fr_1fr]"}`}>
        {/* Before */}
        <ComparisonFigure caption={beforeCaption}>
          <Reveal className={afterVideo ? "md:h-[480px] xl:h-[540px]" : "flex-1"}>
            <div className={`card ${lightStudio ? "shadow-none !bg-[#f7f7f5]" : ""} flex flex-col gap-3 p-5 ${afterVideo ? "h-full" : ""}`}>
              <span className="text-xs font-bold uppercase tracking-widest text-ink-soft/60">
                Before
              </span>
              <div className={lightStudio ? "relative h-[clamp(200px,43vw,320px)] w-full" : `relative overflow-hidden rounded-2xl ${afterVideo ? "aspect-[3/4] md:aspect-auto md:flex-1" : `aspect-[3/4] md:max-h-[320px] ${hasTwo ? "xl:max-h-none" : "xl:max-h-[400px]"}`}`}>
                <Image
                  src={before}
                  alt={imageDescription(before, beforeAlt)}
                  unoptimized={lightStudio}
                  fill
                  sizes="100vw"
                  className={`object-contain p-4 ${lightStudio ? "mix-blend-multiply" : ""}`}
                />
              </div>
            </div>
          </Reveal>
        </ComparisonFigure>

        {/* After 1 — video or image */}
        <ComparisonFigure caption={afterCaption}>
          <Reveal delay={0.1} className={afterVideo ? "md:h-[480px] xl:h-[540px]" : "flex-1"}>
            <div className={lightStudio ? studioFrame : `relative overflow-hidden rounded-3xl ${afterVideo ? "h-full" : "h-full min-h-[280px] md:min-h-0"}`}>
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
              {afterVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover object-top"
                >
                  <source src={afterVideo} type="video/mp4" />
                </video>
              ) : after ? (
                <Image
                  src={after}
                  alt={imageDescription(after, afterAlt)}
                  unoptimized={lightStudio}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={lightStudio ? "object-contain p-2 mix-blend-multiply" : "object-cover object-top"}
                />
              ) : null}
            </div>
          </Reveal>
        </ComparisonFigure>

        {/* After 2 */}
        {hasTwo && (
          <ComparisonFigure caption={after2Caption ?? after2Alt ?? ""}>
            <Reveal delay={0.2} className="flex-1">
              <div className={lightStudio ? studioFrame : "relative h-full min-h-[280px] overflow-hidden rounded-3xl md:min-h-0"}>
                <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  After
                </span>
                <Image
                  src={after2!}
                  alt={imageDescription(after2, after2Alt ?? "")}
                  unoptimized={lightStudio}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={lightStudio ? "object-contain p-2 mix-blend-multiply" : "object-cover object-top"}
                />
              </div>
            </Reveal>
          </ComparisonFigure>
        )}
      </div>
    </section>
  );
}
