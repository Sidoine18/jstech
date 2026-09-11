import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FormationCard from "@/components/FormationCard";
import ServiceCard from "@/components/ServiceCard";
import { formations } from "@/data/formations";
import { services } from "@/data/services";
import { Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos formations",
  description:
    "Découvrez les formations proposées par JS TECH à Bohicon : informatique, bureautique et maintenance informatique.",
  alternates: { canonical: "/formations" },
};

export default function FormationsPage() {
  return (
    <section className="section">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Formations"
          title="Nos formations"
          description="Des parcours conçus pour tous les niveaux, du premier contact avec l'ordinateur à la maîtrise des outils professionnels."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formations.map((f) => (
            <FormationCard
              key={f.slug}
              href={`/formations/${f.slug}`}
              title={f.title}
              description={f.short}
              icon={f.icon}
            />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Au-delà des formations"
            title="Autres prestations JS TECH"
            description="JS TECH propose également des services informatiques et des services d'imprimerie."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ServiceCard {...services[0]} />
            <ServiceCard
              title="Imprimerie"
              description="Impression couleur, noir et blanc, photocopie et autres services d'impression."
              icon={Printer}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
