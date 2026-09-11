import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Découvrez en images les formations et activités de JS TECH à Bohicon.",
  alternates: { canonical: "/galerie" },
};

export default function GaleriePage() {
  return (
    <section className="section">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Galerie"
          title="La vie au centre JS TECH"
          description="Formations, Promo Vacances, activités et apprenants du centre."
        />
        <div className="mt-12">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
