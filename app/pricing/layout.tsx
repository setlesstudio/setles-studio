import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Transparent AI Fashion Content | SetlesStudio",
  description:
    "Explore transparent pricing packages for hyper-realistic AI fashion photography, studio lookbooks, and campaigns. Simple per-image and bulk tiers.",
  alternates: {
    canonical: "https://www.setlesstudio.com/pricing",
  },
  openGraph: {
    title: "Pricing & Packages | SetlesStudio",
    description:
      "Explore transparent pricing packages for hyper-realistic AI fashion photography, studio lookbooks, and campaigns. Simple per-image and bulk tiers.",
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
    title: "Pricing & Packages | SetlesStudio",
    description:
      "Explore transparent pricing packages for hyper-realistic AI fashion photography, studio lookbooks, and campaigns.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
