import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact SetlesStudio | AI Photography Services for US Brands",
  description: "Contact SetlesStudio about professional AI fashion and product photography services for brands across the United States and worldwide. Share your project brief, request a quote and discuss image requirements.",
  alternates: {
    canonical: "https://www.setlesstudio.com/contact",
  },
  openGraph: {
    title: "Contact SetlesStudio | AI Photography Services for US Brands",
    description: "Contact SetlesStudio about professional AI fashion and product photography services for brands across the United States and worldwide. Share your project brief, request a quote and discuss image requirements.",
    url: "https://www.setlesstudio.com/contact",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/portfolio-page-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact SetlesStudio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SetlesStudio | AI Photography Services for US Brands",
    description: "Contact SetlesStudio about professional AI fashion and product photography services for brands across the United States and worldwide. Share your project brief, request a quote and discuss image requirements.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
