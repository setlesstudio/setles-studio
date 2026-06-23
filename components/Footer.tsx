import Link from "next/link";
import { site } from "@/lib/data";
import Logo from "./Logo";

const cols = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/studio-product-photography", label: "Studio Photography" },
      { href: "/services/lifestyle-photography",      label: "Lifestyle Photography" },
      { href: "/services/luxury-fashion-campaigns",   label: "Luxury Campaigns" },
      { href: "/services/footwear-photography",       label: "Footwear Photography" },
      { href: "/services/ai-video-and-advertising",       label: "AI Video & Advertising" },
      { href: "/services/fashion-ai-content-course",  label: "Fashion AI Content Course" },
      { href: "/services/bags-and-accessories-photography", label: "Bags & Accessories Photography" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/learn", label: "Learn" },
      { href: "/pricing", label: "Pricing" },
      { href: "/pricing#faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Logo size={100} className="rounded-lg" />
           
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Premium hyper realistic AI fashion content for modern apparel brands.
            Studio, lifestyle, and editorial visuals delivered in days, not weeks.
          </p>
          <div className="mt-5 flex flex-col gap-1.5">
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-semibold text-brand hover:underline"
            >
              {site.email}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white"
            >
              {site.phone}
            </a>
            <p className="text-sm text-white/40">{site.address}</p>
          </div>
        </div>

        {cols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} SetlesStudio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/terms#refund" className="transition-colors hover:text-white">
              Refund Policy
            </Link>
          </div>
          <p>Top Rated Plus on Upwork · 4+ years of industry experience</p>
        </div>
      </div>
    </footer>
  );
}
