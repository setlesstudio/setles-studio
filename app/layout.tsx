import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

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
    "Hyper realistic AI fashion photography for ecommerce brands. Studio, lifestyle, and editorial content in days instead of weeks, 10x more affordable than traditional photoshoots.",
  openGraph: {
    siteName: "SetlesStudio",
    type: "website",
  },
  verification: {
    google: "AUEEMLzfMyYEr6U1XmCJCcIIAz9TqlmlAVtWV1NwNvU",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <meta name="google-site-verification" content="AUEEMLzfMyYEr6U1XmCJCcIIAz9TqlmlAVtWV1NwNvU" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9T4N04VXYS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9T4N04VXYS');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
