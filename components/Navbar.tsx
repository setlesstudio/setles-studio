"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { site, services } from "@/lib/data";

const WA_CONSULTATION = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a free consultation about AI fashion photography for my brand.")}`;

const otherLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/learn",     label: "Learn" },
  { href: "/about",     label: "About" },
  { href: "/blog",      label: "Blog" },
  { href: "/contact",   label: "Contact Us" },
];

const validServiceSlugs = [
  "realistic-ai-studio-photography",
  "lifestyle-realistic-ai-photography",
  "luxury-fashion-ai-campaign",
  "footwear-realistic-ai-photography",
  "realistic-ai-video-ads-ugc",
  "bags-accessories-realistic-ai-photography",
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  const hasDarkHero =
    pathname === "/" ||
    pathname === "/services" ||
    validServiceSlugs.some((slug) => pathname === `/services/${slug}`) ||
    pathname === "/about" ||
    pathname === "/portfolio" ||
    pathname === "/pricing" ||
    pathname === "/learn" ||
    pathname === "/blog" ||
    pathname === "/contact";

  const opaque = scrolled || open || !hasDarkHero || pathname === "/services/realistic-ai-studio-photography";

  const isServicesActive =
    pathname === "/services" ||
    validServiceSlugs.some((slug) => pathname === `/services/${slug}`);

  const linkClass = (active: boolean) =>
    `text-sm font-semibold transition-colors hover:text-brand ${
      active ? "text-brand" : opaque ? "text-ink/80" : "text-white/80"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        opaque
          ? "bg-white/90 shadow-[0_1px_0_rgba(28,24,20,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5" aria-label="SetlesStudio home">
          <Logo size={100} className="rounded-lg" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <Link href="/" className={linkClass(pathname === "/")}>Home</Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 ${linkClass(isServicesActive)}`}
            >
              Services
              <ChevronDown
                size={14}
                className={`mt-px transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel — pt-3 creates a hover bridge between button and panel */}
            <div className={`absolute left-0 top-full pt-3 transition-all duration-200 ${desktopServicesOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
              <div className="w-80 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-ink/10 ring-1 ring-ink/[0.06]">
                {services.map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.id}`}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-soft"
                  >
                    <span className="mt-0.5 shrink-0 text-xs font-bold text-ink/25">{svc.number}</span>
                    <span className={`text-sm font-semibold leading-snug ${pathname === `/services/${svc.id}` ? "text-brand" : "text-ink/80"}`}>
                      {svc.title}
                    </span>
                  </Link>
                ))}
                <div className="mx-3 my-1 border-t border-ink/[0.06]" />
                <Link
                  href="/services"
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
                >
                  View all services
                  <span className="text-xs font-bold">→</span>
                </Link>
              </div>
            </div>
          </div>

          {otherLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass(pathname.startsWith(l.href))}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href={WA_CONSULTATION} target="_blank" rel="noopener noreferrer" className="btn-primary !px-6 !py-2.5">
            Book a Free Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-xl border transition-all duration-300 lg:hidden ${
            opaque || pathname === "/services/luxury-fashion-ai-campaign" ? "border-ink/20 text-ink" : "border-white/30 bg-white/15 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open ? "true" : "false"}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-ink/[0.06] bg-white px-5 pb-6 pt-3 lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain"
          aria-label="Mobile"
        >
          <Link
            href="/"
            className={`block rounded-xl px-3 py-3 text-base font-semibold ${pathname === "/" ? "bg-brand-soft text-brand" : "text-ink"}`}
          >
            Home
          </Link>

          {/* Services accordion */}
          <div>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold ${
                isServicesActive ? "bg-brand-soft text-brand" : "text-ink"
              }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="mb-1 ml-3 mt-1 space-y-0.5 border-l-2 border-brand/20 pl-3">
                {services.map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.id}`}
                    className={`block rounded-lg px-3 py-2 text-sm font-semibold leading-snug ${
                      pathname === `/services/${svc.id}` ? "text-brand" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {svc.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand"
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>

          {otherLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-xl px-3 py-3 text-base font-semibold ${
                pathname.startsWith(l.href) ? "bg-brand-soft text-brand" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <a href={WA_CONSULTATION} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-full">
            Book a Free Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
