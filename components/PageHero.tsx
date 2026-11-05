import { imageDescription } from "@/lib/image-descriptions";
import { getImageProps } from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  lightStudio = false,
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
  lightStudio?: boolean;
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
    unoptimized: lightStudio,
    className: lightStudio ? "object-contain" : "object-cover object-top",
  };
  const desktopProps = image ? getImageProps({ ...imageOptions, src: image }).props : null;
  const mobileProps = imageMobile ? getImageProps({ ...imageOptions, src: imageMobile }).props : null;

  if (lightStudio && desktopProps) {
    return (
      <section className="bg-[#f7f7f5] pt-20 text-ink md:pt-24">
        <div className="relative">
          <picture className="relative mx-auto block h-[420px] w-full md:h-auto md:aspect-[2752/1536]">
            {mobileProps && <source media="(max-width: 767px)" srcSet={mobileProps.srcSet ?? mobileProps.src} />}
            <img {...desktopProps} {...{ fetchpriority: "high" }} />
          </picture>
          <div className="relative px-6 pb-10 pt-8 md:absolute md:inset-0 md:flex md:items-center md:p-0">
            <div className="md:ml-[10%] md:w-[58%] md:-translate-y-6 lg:-translate-y-24">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight md:whitespace-nowrap md:text-[2.3vw]">{title}</h1>
              {text && <p className="mt-5 text-sm leading-relaxed text-ink-soft lg:text-base">{text}</p>}
              {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const imageBlock = !video && desktopProps ? (
    <>
      <picture className={lightStudio ? "relative block h-[40svh] max-h-[460px] w-full md:absolute md:inset-x-0 md:bottom-5 md:top-24 md:h-auto md:max-h-none" : undefined}>
        {mobileProps && <source media="(max-width: 767px)" srcSet={mobileProps.srcSet ?? mobileProps.src} sizes={mobileProps.sizes} />}
        <img {...desktopProps} {...{ fetchpriority: "high" }} />
      </picture>
      {!lightStudio && overlays}
    </>
  ) : null;

  return (
    <section className={`relative flex ${lightStudio ? "gap-6 bg-[#f7f7f5] pb-12 pt-24 text-ink md:min-h-screen md:justify-center md:pb-20" : `${fullHeight ? "min-h-screen" : "min-h-[560px]"} bg-ink pb-20 pt-28 text-white`} flex-col justify-end overflow-hidden`}>
      {videoBlock}
      {animateReveal && imageBlock ? (
        <div className="absolute inset-0">
          {imageBlock}
        </div>
      ) : imageBlock}
      {!lightStudio && <div
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />}
      <div className="container-site relative">
        <Reveal delay={animateReveal ? 0.7 : 0}>
          <div className={lightStudio ? "md:ml-[10%] md:max-w-[58%]" : undefined}>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-2 sm:mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {text && (
              <p className={`mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed ${lightStudio ? "text-ink-soft" : "text-white/65"}`}>
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
