import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez JS TECH à Bohicon par téléphone, WhatsApp ou via le formulaire en ligne.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container-jst">
          <SectionHeading
            eyebrow="Contact"
            title={`Contactez ${siteConfig.shortName}`}
            description="Une question, un projet de formation ? Écrivez-nous, nous vous répondrons rapidement."
          />
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactSection />
            <MapSection />
          </div>
        </div>
      </section>
    </>
  );
}
