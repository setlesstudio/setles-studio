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
    default: "SetlesStudio | Premium Hyper Realistic AI Fashion Content for Ecommerce Brands",
    template: "%s | SetlesStudio",
  },
  description:
    "Hyper-realistic AI fashion photography for ecommerce brands. Studio, lifestyle, and editorial content in days instead of weeks, 10x more affordable than traditional photoshoots.",
  openGraph: {
    siteName: "SetlesStudio",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/logo_favicon/favicon.ico",        type: "image/x-icon" },
      { url: "/images/logo_favicon/favicon-16x16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/images/logo_favicon/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/images/logo_favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo_favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/images/logo_favicon/apple-touch-icon.png" },
    shortcut: "/images/logo_favicon/favicon.ico",
  },
  manifest: "/images/logo_favicon/site.webmanifest",
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
