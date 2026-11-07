import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

const WA_DEFAULT = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get started with SetlesStudio.")}`;

export default function CTABand({
  title = "Let's create content that takes your brand further.",
  text = "Take your brand to new heights, and boost your sales 10x.",
  primary = { href: WA_DEFAULT, label: "Get Started Today" },
  secondary,
  lightStudio = false,
  fullImage = false,
  campaignBanner = false,
  image = "",
  imageMobile = "",
  imageAlt = "",
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  lightStudio?: boolean;
  fullImage?: boolean;
  campaignBanner?: boolean;
  secondary?: { href: string; label: string };
  image?: string;
  imageMobile?: string;
  imageAlt?: string;
}) {
  if (campaignBanner && image) {
    return (
      <section className="my-12 bg-cream">
        <div className="relative">
          <Image src={image} alt={imageAlt} width={2752} height={1536} unoptimized className="block h-auto w-full" />
          <div className="relative px-6 py-8 text-center text-ink lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-gradient-to-t lg:from-black/75 lg:to-transparent lg:px-10 lg:pb-10 lg:pt-20 lg:text-white">
            <h2 className="mx-auto max-w-4xl font-display text-2xl font-semibold leading-tight lg:text-3xl">{title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed lg:text-base">{text}</p>
            <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">{primary.label}</a>
          </div>
        </div>
      </section>
    );
  }
  if (fullImage && image) {
    return (
      <section className="container-site py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink text-white">
            <Image src={image} alt={imageAlt} width={2752} height={1536} unoptimized className="h-auto w-full" />
            <div className="relative px-6 py-8 text-center md:absolute md:inset-x-0 md:bottom-0 md:bg-gradient-to-t md:from-black/90 md:via-black/60 md:to-transparent md:px-8 md:pt-16">
              <h2 className="font-display text-2xl font-semibold leading-tight lg:text-4xl">{title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed lg:text-base">{text}</p>
              <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">{primary.label}</a>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }
  if (lightStudio && image) {
    return (
      <section className="container-site py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-[#f7f7f5]">
            <Image src={image} alt={imageAlt} width={2200} height={1228}
              sizes="(min-width: 1280px) 1280px, 100vw" quality={90}
              className="h-auto w-full" />
            <div className="relative px-6 py-8 text-center text-ink md:absolute md:left-[18%] md:top-[48%] md:w-[70%] md:rounded-3xl md:bg-black/45 md:px-8 md:py-6 md:text-white">
              <h2 className="font-display text-2xl font-semibold leading-tight lg:text-4xl">{title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed lg:text-base">{text}</p>
              <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">{primary.label}</a>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }
  return (
    <section className="container-site py-16">
      <Reveal>
        <div className={`relative overflow-hidden rounded-4xl ${lightStudio ? "bg-[#f7f7f5] text-ink" : "bg-ink"} text-center sm:px-16 ${image ? "flex min-h-[420px] flex-col justify-end px-6 pb-10 pt-6 sm:px-16 sm:pt-8" : "px-8 py-28"}`}>
          {image ? (
            <>
              {imageMobile && (
                <Image
                  src={imageMobile}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-top md:hidden"
                />
              )}
              <Image
                unoptimized={lightStudio}
                src={image}
                alt={image === "/images/footwear-cta-image.jpg" || image === "/images/pink-outfit-lifestyle-cta.webp" ? imageAlt : ""}
                fill
                sizes="100vw"
                className={`${lightStudio ? "object-contain mix-blend-multiply max-md:!relative max-md:!h-[190px]" : "object-cover object-top"} ${imageMobile ? "hidden md:block" : ""}`}
              />
              {!lightStudio && <div className="pointer-events-none absolute inset-0 bg-ink/25" />}
              {!lightStudio && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent" />}
            </>
          ) : (
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
              aria-hidden
            />
          )}
          <div className={lightStudio ? "relative md:max-w-[63%]" : "relative"}>
            <h2 className={`mx-auto max-w-5xl font-display text-xl font-semibold leading-tight sm:text-3xl lg:text-4xl ${lightStudio ? "text-ink" : "text-white"}`}>
              {title}
            </h2>
            <p className={`mx-auto mt-1 max-w-2xl text-sm sm:mt-4 sm:text-base ${lightStudio ? "text-ink-soft" : "text-white/65"}`}>{text}</p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-3 sm:mt-4 sm:gap-4">
              {/^https?:\/\//.test(primary.href) ? (
                <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {primary.label}
                </a>
              ) : (
                <Link href={primary.href} className="btn-primary">
                  {primary.label}
                </Link>
              )}
              {secondary && (
                /^https?:\/\//.test(secondary.href) ? (
                  <a href={secondary.href} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                    {secondary.label}
                  </a>
                ) : (
                  <Link href={secondary.href} className="btn-ghost-light">
                    {secondary.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
