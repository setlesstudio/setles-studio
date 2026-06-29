import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
  children,
  image,
  imageMobile,
  imageAlt = "",
  fullHeight = true,
  animateReveal = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  image?: string;
  imageMobile?: string;
  imageAlt?: string;
  fullHeight?: boolean;
  animateReveal?: boolean;
}) {
  const imageBlock = image ? (
    <>
      {/* Mobile image — shown below md, falls back to main image if no imageMobile */}
      {imageMobile && (
        <Image
          src={imageMobile}
          alt={imageAlt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top md:hidden"
          fetchPriority="high"
        />
      )}
      {/* Desktop image — shown at md+ (or always if no imageMobile provided) */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        unoptimized
        sizes="100vw"
        className={`object-cover object-top ${imageMobile ? "hidden md:block" : ""}`}
      />
      <div className="absolute top-0 left-0 right-0 h-[22%] bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[72%] bg-gradient-to-t from-ink/90 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-ink/75 to-transparent" />
    </>
  ) : null;

  return (
    <section className={`relative flex ${fullHeight ? "min-h-screen" : "min-h-[560px]"} flex-col justify-end overflow-hidden bg-ink pb-20 pt-28 text-white`}>
      {animateReveal && imageBlock ? (
        <div className="absolute inset-0 animate-hero-reveal">
          {imageBlock}
        </div>
      ) : imageBlock}
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        <Reveal delay={animateReveal ? 0.7 : 0}>
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
        </Reveal>
      </div>
    </section>
  );
}
