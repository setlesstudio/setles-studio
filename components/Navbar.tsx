"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const opaque = scrolled || open;

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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors hover:text-brand ${
                pathname === l.href
                  ? "text-brand"
                  : opaque ? "text-ink/80" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary !px-6 !py-2.5">
            Book a Free Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-xl border transition-all duration-300 lg:hidden ${
            opaque ? "border-ink/20 text-ink" : "border-white/30 bg-white/15 text-white"
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
          className="border-t border-ink/[0.06] bg-white px-5 pb-6 pt-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-xl px-3 py-3 text-base font-semibold ${
                pathname === l.href ? "bg-brand-soft text-brand" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-3 w-full">
            Book a Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
