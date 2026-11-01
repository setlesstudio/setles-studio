import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Our AI Fashion Studio | SetlesStudio",
  description: "Discuss your AI fashion photography project with SetlesStudio. Request a sample, share your requirements, or ask about pricing and delivery.",
  alternates: {
    canonical: "https://www.setlesstudio.com/contact",
  },
  openGraph: {
    title: "Contact Our AI Fashion Studio | SetlesStudio",
    description: "Discuss your AI fashion photography project with SetlesStudio. Request a sample, share your requirements, or ask about pricing and delivery.",
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
    title: "Contact Our AI Fashion Studio | SetlesStudio",
    description: "Discuss your AI fashion photography project with SetlesStudio. Request a sample, share your requirements, or ask about pricing and delivery.",
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/portfolio-page-banner.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
