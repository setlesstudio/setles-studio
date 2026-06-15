import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
  children,
  image,
  imageAlt = "",
  fullHeight = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  fullHeight?: boolean;
}) {
  return (
    <section className={`relative flex ${fullHeight ? "min-h-screen" : "min-h-[560px]"} flex-col justify-end overflow-hidden bg-ink pb-20 pt-28 text-white`}>
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/45 to-ink/10" />
        </>
      )}
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {text && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
              {text}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
