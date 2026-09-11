import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description: "Les réponses aux questions les plus fréquentes sur JS TECH.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-jst max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          description={`Retrouvez ici les réponses aux questions les plus posées sur ${siteConfig.shortName}.`}
        />
        <div className="mt-10">
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  );
}
