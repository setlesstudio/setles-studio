import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand({
  title = "Let's create content that takes your brand further.",
  text = "Take your brand to new heights, and boost your sales 10x.",
  primary = { href: "/contact", label: "Get Started Today" },
  secondary,
  image = "",
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  image?: string;
}) {
  return (
    <section className="container-site py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-ink px-8 py-16 text-center sm:px-16">
          {image && (
            <Image
              src={image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-35"
            />
          )}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">{text}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={primary.href} className="btn-primary">
                {primary.label}
              </Link>
              {secondary && (
                <Link href={secondary.href} className="btn-ghost-light">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
