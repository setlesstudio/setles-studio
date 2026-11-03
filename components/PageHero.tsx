import { imageDescription } from "@/lib/image-descriptions";
import { getImageProps } from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
  children,
  image,
  imageMobile,
  imageAlt = "",
  video,
  fullHeight = true,
  animateReveal = false,
  containerClassName = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  image?: string;
  imageMobile?: string;
  imageAlt?: string;
  video?: string;
  fullHeight?: boolean;
  animateReveal?: boolean;
  containerClassName?: string;
  isContactPage?: boolean;
  titleClassName?: string;
  textClassName?: string;
}) {
  const overlays = (
    <>
      <div className="absolute top-0 left-0 right-0 h-[22%] bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[72%] bg-gradient-to-t from-ink/90 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-ink/75 to-transparent" />
    </>
  );

  const videoBlock = video ? (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-top"
      >
        <source src={video} type="video/mp4" />
      </video>
      {overlays}
    </>
  ) : null;

  const imageOptions = {
    alt: imageDescription(image, imageAlt),
    fill: true as const,
    sizes: "100vw",
    quality: 85,
    loading: "eager" as const,
    className: "object-cover object-top",
  };
  const desktopProps = image ? getImageProps({ ...imageOptions, src: image }).props : null;
  const mobileProps = imageMobile ? getImageProps({ ...imageOptions, src: imageMobile }).props : null;

  const imageBlock = !video && desktopProps ? (
    <>
      <picture>
        {mobileProps && <source media="(max-width: 767px)" srcSet={mobileProps.srcSet} sizes={mobileProps.sizes} />}
        <img {...desktopProps} {...{ fetchpriority: "high" }} />
      </picture>
      {overlays}
    </>
  ) : null;

  return (
    <section className={`relative flex ${fullHeight ? "min-h-screen" : "min-h-[560px]"} flex-col justify-end overflow-hidden bg-ink pb-20 pt-28 text-white`}>
      {videoBlock}
      {animateReveal && imageBlock ? (
        <div className="absolute inset-0">
          {imageBlock}
        </div>
      ) : imageBlock}
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        <Reveal delay={animateReveal ? 0.7 : 0}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-2 sm:mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {text && (
              <p className="mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed text-white/65">
                {text}
              </p>
            )}
            {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
