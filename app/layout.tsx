import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/data";

const display = localFont({
  src: "./fonts/dmsans.woff2",
  variable: "--font-display",
  weight: "100 1000",
  display: "swap",
});

const sans = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-sans",
  weight: "200 800",
  display: "swap",
});

const homeDescription = "Professional, done-for-you AI fashion and product photography for clothing, beauty and ecommerce brands across the United States and worldwide. Request a project sample.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.setlesstudio.com"),
  title: {
    default: "AI Fashion & Product Photography Services | SetlesStudio",
    template: "%s",
  },
  description: homeDescription,
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AI Fashion & Product Photography Services | SetlesStudio",
    description: homeDescription,
    url: "https://www.setlesstudio.com",
    siteName: "SetlesStudio",
    images: [
      {
        url: "https://www.setlesstudio.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SetlesStudio AI Fashion Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fashion & Product Photography Services | SetlesStudio",
    description: homeDescription,
    site: "@SetlesStudio",
    creator: "@SetlesStudio",
    images: ["https://www.setlesstudio.com/images/og-default.jpg"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9T4N04VXYS"
          strategy="lazyOnload"
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
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${site.url}/#organization`,
          name: site.name,
          url: site.url,
          email: site.email,
          description: "Professional, done-for-you AI-assisted fashion and product photography services for clothing, beauty and ecommerce brands across the United States and worldwide.",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Place", name: "Worldwide" },
          ],
          knowsAbout: [
            "AI fashion photography services",
            "AI product photography",
            "On-model apparel photography",
            "Ecommerce product imagery",
            "Fashion campaign photography",
            "Beauty and skincare product photography",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: site.email,
            contactType: "customer service",
            availableLanguage: ["English"],
          },
          sameAs: Object.values(site.social),
        }} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
