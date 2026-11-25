import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Fashion & Product Photography Pricing | SetlesStudio",
  description: "Compare AI fashion and product photography packages for clothing, beauty and ecommerce brands across the United States and worldwide. Review image quantities, services and custom project options.",
  alternates: {
    canonical: "https://www.setlesstudio.com/pricing",
  },
  openGraph: {
    title: "AI Fashion & Product Photography Pricing | SetlesStudio",
    description: "Compare AI fashion and product photography packages for clothing, beauty and ecommerce brands across the United States and worldwide. Review image quantities, services and custom project options.",
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
    title: "AI Fashion & Product Photography Pricing | SetlesStudio",
    description: "Compare AI fashion and product photography packages for clothing, beauty and ecommerce brands across the United States and worldwide. Review image quantities, services and custom project options.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/ai-photography-pricing-banner.webp"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

