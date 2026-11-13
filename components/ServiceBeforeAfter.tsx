import Link from "next/link";
import ComparisonFigure from "@/components/ComparisonFigure";
import { imageDescription } from "@/lib/image-descriptions";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type Props = {
  compactProduct?: boolean;
  preserveImageQuality?: boolean;
  heading?: string;
  introduction?: string;
  beforeLabel?: string;
  afterLabel?: string;
  portfolioLabel?: string;
  lightStudio?: boolean;
  containedPhotos?: boolean;
  campaignFrames?: boolean;
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
  compactProduct = false,
  preserveImageQuality = false,
  heading,
  introduction,
  beforeLabel = "Before",
  afterLabel = "After",
  portfolioLabel,
  lightStudio = false,
  containedPhotos = false,
  campaignFrames = false,
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
  if ((lightStudio || containedPhotos) && after && after2) {
    const photos = [
      { src: before, alt: beforeAlt, caption: beforeCaption, label: beforeLabel },
      { src: after, alt: afterAlt, caption: afterCaption, label: afterLabel },
      { src: after2, alt: after2Alt ?? "", caption: after2Caption ?? "", label: afterLabel },
    ];
    return (
      <section className="container-site py-8 md:py-12">
        {heading && <h2 className="mb-4 text-center font-display text-3xl font-semibold text-brand sm:text-4xl">{heading}</h2>}
        {introduction && <p className="mx-auto mb-8 max-w-3xl text-center leading-relaxed text-ink-soft">{introduction}</p>}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 md:grid-cols-3">
          {photos.map((photo) => (
            <ComparisonFigure key={photo.src} caption={photo.caption}>
              <div className={`relative mx-auto w-full overflow-hidden rounded-3xl ${campaignFrames ? "aspect-[1856/2304] bg-white" : "aspect-[3/4] max-w-[380px] bg-[#f7f7f5]"}`} data-studio-frame>
                <Image src={photo.src} alt={imageDescription(photo.src, photo.alt)} fill unoptimized
                  sizes="(min-width: 768px) 33vw, 100vw" className={compactProduct && photo.src === before ? "object-contain p-10 md:p-12 bg-white" : "object-contain"} />
                <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">{photo.label}</span>
              </div>
            </ComparisonFigure>
          ))}
        </div>
        {portfolioLabel && <div className="mt-8 text-center"><Link href="/portfolio" className="btn-primary">{portfolioLabel}</Link></div>}
      </section>
    );
  }

  const hasTwo = Boolean(after2);
  const studioFrame = "relative mx-auto h-[clamp(245px,52vw,390px)] w-full max-w-[320px] overflow-hidden rounded-3xl bg-[#f7f7f5]";

  return (
    <section className="container-site py-8 md:py-12">
      {heading && <h2 className="mb-4 text-center font-display text-3xl font-semibold text-brand sm:text-4xl">{heading}</h2>}
      {introduction && <p className="mx-auto mb-8 max-w-3xl text-center leading-relaxed text-ink-soft">{introduction}</p>}
      <div className={`grid gap-4 ${hasTwo ? "md:grid-cols-[0.8fr_1fr_1fr]" : afterVideo ? "md:grid-cols-[1fr_0.45fr]" : "md:grid-cols-[0.8fr_1fr]"}`}>
        {/* Before */}
        <ComparisonFigure caption={beforeCaption}>
          <Reveal className={afterVideo ? "md:h-[480px] xl:h-[540px]" : "flex-1"}>
            <div className={`card ${lightStudio ? "shadow-none !bg-[#f7f7f5]" : ""} flex flex-col gap-3 p-5 ${afterVideo ? "h-full" : ""}`}>
              <span className="text-xs font-bold uppercase tracking-widest text-ink-soft/60">
                {beforeLabel}
              </span>
              <div className={lightStudio ? "relative h-[clamp(200px,43vw,320px)] w-full" : `relative overflow-hidden rounded-2xl ${afterVideo ? "aspect-[3/4] md:aspect-auto md:flex-1" : `aspect-[3/4] md:max-h-[320px] ${hasTwo ? "xl:max-h-none" : "xl:max-h-[400px]"}`}`}>
                <Image
                  src={before}
                  alt={imageDescription(before, beforeAlt)}
                  unoptimized={preserveImageQuality || lightStudio}
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
                {afterLabel}
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
                  unoptimized={preserveImageQuality || lightStudio}
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
                  {afterLabel}
                </span>
                <Image
                  src={after2!}
                  alt={imageDescription(after2, after2Alt ?? "")}
                  unoptimized={preserveImageQuality || lightStudio}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={lightStudio ? "object-contain p-2 mix-blend-multiply" : "object-cover object-top"}
                />
              </div>
            </Reveal>
          </ComparisonFigure>
        )}
      </div>
      {portfolioLabel && <div className="mt-8 text-center"><Link href="/portfolio" className="btn-primary">{portfolioLabel}</Link></div>}
    </section>
  );
}


