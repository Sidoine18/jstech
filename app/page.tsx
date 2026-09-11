import Hero from "@/components/Hero";
import {
  IntroSection,
  DomainesSection,
  PourquoiSection,
  PromoVacancesBlock,
  PublicCibleSection,
  FondateurSection,
  CtaFinalSection,
} from "@/components/HomeSections";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import MapSection from "@/components/MapSection";
import { faqItems } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <DomainesSection />
      <PourquoiSection />
      <PromoVacancesBlock />
      <PublicCibleSection />
      <FondateurSection />

      <section className="section bg-white">
        <div className="container-jst">
          <SectionHeading eyebrow="Galerie" title="La vie au centre JS TECH" align="center" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CtaFinalSection />

      <section className="section bg-white">
        <div className="container-jst">
          <SectionHeading eyebrow="Nous trouver" title="Où se trouve JS TECH ?" />
          <div className="mt-10">
            <MapSection />
          </div>
        </div>
      </section>
    </>
  );
}
