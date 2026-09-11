import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { imprimerieServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services d'imprimerie",
  description:
    "JS TECH propose des services d'imprimerie à Bohicon : impression couleur, noir et blanc, photocopie.",
  alternates: { canonical: "/imprimerie" },
};

export default function ImprimeriePage() {
  return (
    <section className="section">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Imprimerie"
          title="Services d'imprimerie"
          description="JS TECH met à votre disposition des services d'impression et de reproduction de documents."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {imprimerieServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact" variant="primary">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
