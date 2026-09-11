import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} — Centre de formation en TIC à Bohicon`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "JS TECH Bohicon",
    "Jehovah Shammah Technologie",
    "formation informatique Bohicon",
    "centre informatique Bohicon",
    "formation TIC Bohicon",
    "formation Word Bohicon",
    "formation Excel Bohicon",
    "maintenance informatique Bohicon",
    "Promo Vacances informatique Bohicon",
    "centre de formation Avogbanna",
  ],
  authors: [{ name: siteConfig.shortName }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} — Centre de formation en TIC à Bohicon`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.shortName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — Centre de formation en TIC à Bohicon`,
    description: siteConfig.description,
    images: ["/images/og/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  // Coller ici la balise de vérification fournie par Google Search
  // Console (Paramètres > Balise HTML) pour confirmer la propriété
  // du site, par ex. verification: { google: "xxxxxxxxxxxxxxxx" }
  // verification: { google: "" },
};

export const viewport: Viewport = {
  themeColor: "#0E1B2C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialLinks = Object.values(siteConfig.socials).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/jstech-logo.png`,
    image: `${siteConfig.url}/images/og/og-image.png`,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: "Avogbanna",
      streetAddress: siteConfig.address.line1,
      addressCountry: "BJ",
    },
    areaServed: "Bohicon, Bénin",
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
  };

  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
