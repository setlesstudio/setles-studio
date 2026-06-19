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
  image = "",
  imageMobile = "",
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  image?: string;
  imageMobile?: string;
}) {
  return (
    <section className="container-site py-16">
      <Reveal>
        <div className={`relative overflow-hidden rounded-4xl bg-ink text-center sm:px-16 ${image ? "flex min-h-[420px] flex-col justify-end px-6 pb-10 pt-6 sm:px-16 sm:pb-14 sm:pt-8" : "px-8 py-28"}`}>
          {image ? (
            <>
              {imageMobile && (
                <Image
                  src={imageMobile}
                  alt=""
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover object-top md:hidden"
                />
              )}
              <Image
                src={image}
                alt=""
                fill
                unoptimized
                sizes="100vw"
                className={`object-cover object-top ${imageMobile ? "hidden md:block" : ""}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-ink/25" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent" />
            </>
          ) : (
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
              aria-hidden
            />
          )}
          <div className="relative">
            <h2 className="mx-auto max-w-5xl font-display text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-1 max-w-xl text-sm text-white/65 sm:mt-4 sm:text-base">{text}</p>
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
