import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Fashion Photography Pricing | SetlesStudio",
  description: "Compare AI fashion photography packages, image quantities, deliverables, and turnaround options. Find the right package or request a custom quote.",
  alternates: {
    canonical: "https://www.setlesstudio.com/pricing",
  },
  openGraph: {
    title: "AI Fashion Photography Pricing | SetlesStudio",
    description: "Compare AI fashion photography packages, image quantities, deliverables, and turnaround options. Find the right package or request a custom quote.",
    url: "https://www.setlesstudio.com/pricing",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/portfolio-page-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "SetlesStudio Pricing & Packages",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fashion Photography Pricing | SetlesStudio",
    description: "Compare AI fashion photography packages, image quantities, deliverables, and turnaround options. Find the right package or request a custom quote.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
