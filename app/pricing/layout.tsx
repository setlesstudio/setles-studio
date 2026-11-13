import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Photography Pricing & Packages | SetlesStudio",
  description: "Compare AI product and fashion photography packages for ecommerce brands. Explore studio, model, lifestyle, and campaign options or request a custom quote.",
  alternates: {
    canonical: "https://www.setlesstudio.com/pricing",
  },
  openGraph: {
    title: "AI Product Photography Pricing & Packages | SetlesStudio",
    description: "Compare AI product and fashion photography packages for ecommerce brands. Explore studio, model, lifestyle, and campaign options or request a custom quote.",
    url: "https://www.setlesstudio.com/pricing",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/ai-photography-pricing-banner.webp",
        width: 2752,
        height: 1536,
        alt: "SetlesStudio Pricing & Packages",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product Photography Pricing & Packages | SetlesStudio",
    description: "Compare AI product and fashion photography packages for ecommerce brands. Explore studio, model, lifestyle, and campaign options or request a custom quote.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/ai-photography-pricing-banner.webp"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

