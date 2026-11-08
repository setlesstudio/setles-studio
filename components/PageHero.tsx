import { imageDescription } from "@/lib/image-descriptions";
import { getImageProps } from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  footwearPhotos = false,
  preserveImageQuality = false,
  lightStudio = false,
  lifestylePhotos = false,
  campaignPhotos = false,
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
  footwearPhotos?: boolean;
  preserveImageQuality?: boolean;
  lightStudio?: boolean;
  lifestylePhotos?: boolean;
  campaignPhotos?: boolean;
  eyebrow: string;
  title: React.ReactNode;
  text?: React.ReactNode;
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

  if (footwearPhotos && image) {
    return (
      <section className="bg-[#f7f7f7] pt-24 text-ink">
        <div className="relative">
          <img src={image} alt={imageAlt} width={2752} height={1536} {...{ fetchpriority: "high" }} className="block h-auto w-full" />
          <div className="relative px-6 py-8 lg:absolute lg:inset-y-0 lg:left-[5%] lg:flex lg:w-[42%] lg:flex-col lg:justify-center lg:px-0 lg:py-6">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight xl:text-5xl">{title}</h1>
            {text && <p className="mt-5 text-sm leading-relaxed text-ink-soft xl:text-lg">{text}</p>}
            {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>
      </section>
    );
  }
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
    unoptimized: preserveImageQuality || lightStudio || lifestylePhotos || campaignPhotos,
    className: lightStudio || lifestylePhotos ? "object-contain" : "object-cover object-top",
  };
  const desktopProps = image ? getImageProps({ ...imageOptions, src: image }).props : null;
  const mobileProps = imageMobile ? getImageProps({ ...imageOptions, src: imageMobile }).props : null;

  if (campaignPhotos && image) {
    return (
      <section className="bg-cream text-ink lg:text-white">
        <div className="relative pt-20 lg:pt-0">
          <img src={image} alt={imageAlt} width={2912} height={1440} {...{ fetchpriority: "high" }} className="block h-auto w-full" />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/65 via-black/15 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-28 bg-gradient-to-b from-black/50 to-transparent lg:block" />
          <div className="relative px-6 py-8 lg:absolute lg:inset-y-0 lg:left-[5%] lg:flex lg:w-[44%] lg:flex-col lg:justify-center lg:pb-8 lg:pt-24">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight xl:text-5xl">{title}</h1>
            {text && <p className="mt-4 text-sm leading-relaxed text-ink-soft lg:text-white/90 xl:text-lg">{text}</p>}
            {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  if ((lightStudio || lifestylePhotos) && desktopProps) {
    return (
      <section className={lifestylePhotos ? "bg-ink pt-20 text-white md:pt-24" : "bg-[#f7f7f5] pt-20 text-ink md:pt-24"}>
        <div className="relative">
          <picture className="relative mx-auto block h-[420px] w-full md:h-auto md:aspect-[2752/1536]">
            {mobileProps && <source media="(max-width: 767px)" srcSet={mobileProps.srcSet ?? mobileProps.src} />}
            <img {...desktopProps} {...{ fetchpriority: "high" }} />
          </picture>
          <div className="relative px-6 pb-10 pt-8 md:absolute md:inset-0 md:flex md:items-center md:p-0">
            <div className="md:ml-[10%] md:w-[58%] md:-translate-y-6 lg:-translate-y-24">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className={lifestylePhotos ? "mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-[2.6vw]" : "mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:whitespace-nowrap md:text-[3.15vw]"}>{title}</h1>
              {text && <p className={`mt-5 text-base leading-relaxed lg:text-lg ${lifestylePhotos ? "text-white/90" : "text-ink-soft"}`}>{text}</p>}
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



