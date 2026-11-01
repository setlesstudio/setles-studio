import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/data";

const display = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const homeDescription = "Turn product photos into realistic on-model studio, lifestyle, and campaign images for your ecommerce brand. Explore our work and request a free sample.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.setlesstudio.com"),
  title: {
    default: "AI Fashion Photography for Ecommerce | SetlesStudio",
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
    title: "AI Fashion Photography for Ecommerce | SetlesStudio",
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
    title: "AI Fashion Photography for Ecommerce | SetlesStudio",
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
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${site.url}/#organization`,
          name: site.name,
          url: site.url,
          email: site.email,
          telephone: site.phone,
          sameAs: Object.values(site.social),
        }} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
