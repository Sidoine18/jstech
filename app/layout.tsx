import type { Metadata } from "next";
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
    icon: "/images/logo/jstech-logo.png",
    apple: "/images/logo/jstech-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} — Centre de formation en TIC à Bohicon`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo/jstech-logo.png",
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
    images: ["/images/logo/jstech-logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/jstech-logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: "Avogbanna",
      streetAddress: siteConfig.address.line1,
      addressCountry: "BJ",
    },
    areaServed: "Bohicon, Bénin",
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
