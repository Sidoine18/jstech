import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { Wrench, Settings, HardDrive, LifeBuoy } from "lucide-react";

export const metadata: Metadata = {
  title: "Services informatiques",
  description:
    "Découvrez l'ensemble des services informatiques proposés par JS TECH à Bohicon.",
  alternates: { canonical: "/services" },
};

const items = [
  {
    title: "Assistance et conseil",
    description: "Un accompagnement pour répondre à vos besoins informatiques au quotidien.",
    icon: LifeBuoy,
  },
  {
    title: "Configuration de postes",
    description: "Mise en service et configuration d'équipements informatiques.",
    icon: Settings,
  },
  {
    title: "Entretien du matériel",
    description: "Un suivi régulier pour prolonger la durée de vie de vos équipements.",
    icon: HardDrive,
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container-jst">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
          <Wrench size={22} />
        </div>
        <SectionHeading
          eyebrow="Services"
          title="Services informatiques"
          description="L'ensemble des prestations informatiques proposées par JS TECH pour accompagner particuliers, élèves et professionnels dans leurs besoins numériques."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-ink-900/8 bg-white p-6">
              <item.icon size={22} className="text-azure-600" />
              <h3 className="mt-4 font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/75">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact" variant="primary">
            Demander un service
          </Button>
        </div>
      </div>
    </section>
  );
}
