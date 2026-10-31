import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | SetlesStudio",
  description:
    "Get in touch with Setles Studio for realistic AI fashion photography, product visuals, UGC content, and AI-powered creative solutions for your brand.",
  alternates: {
    canonical: "https://www.setlesstudio.com/contact",
  },
  openGraph: {
    title: "Contact Us | SetlesStudio",
    description:
      "Get in touch with Setles Studio for realistic AI fashion photography, product visuals, UGC content, and AI-powered creative solutions for your brand.",
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
    title: "Contact Us | SetlesStudio",
    description:
      "Get in touch with Setles Studio for realistic AI fashion photography, product visuals, UGC content, and AI-powered creative solutions for your brand.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
