import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Setles Studio",
  description:
    "Get in touch with Setles Studio for realistic AI fashion photography, product visuals, UGC content, and AI-powered creative solutions for your brand.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
