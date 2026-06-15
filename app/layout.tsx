import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://setlesstudio.com"),
  title: {
    default: "SetlesStudio | Premium AI Fashion Content for Ecommerce Brands",
    template: "%s | SetlesStudio",
  },
  description:
    "Realistic fashion and apparel AI model shoots for ecommerce brands. Studio, lifestyle, and editorial content in days instead of weeks, 10x more affordable than traditional photoshoots.",
  openGraph: {
    siteName: "SetlesStudio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
