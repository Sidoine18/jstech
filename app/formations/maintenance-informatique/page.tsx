import type { Metadata } from "next";
import Image from "next/image";
import { Wrench, CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Maintenance informatique",
  description:
    "Formation en maintenance informatique à Bohicon avec JS TECH : diagnostic, dépannage, entretien et configuration.",
  alternates: { canonical: "/formations/maintenance-informatique" },
};

export default function FormationMaintenancePage() {
  return (
    <section className="section">
      <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-700">
            <Wrench size={22} />
          </div>
          <p className="eyebrow mb-3">Formation</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Maintenance informatique
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-700/80">
            Apprenez les bases essentielles de la maintenance des équipements
            informatiques : diagnostic des pannes, dépannage, entretien
            régulier et configuration des postes de travail.
          </p>

          <ul className="mt-8 space-y-3">
            {["Diagnostic", "Dépannage", "Entretien", "Configuration"].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-ink-900">
                <CheckCircle2 size={18} className="text-azure-700" /> {point}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="/contact" variant="primary">
              S&apos;inscrire à cette formation
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-900/8">
          <Image
            src="/images/formations/maintenance.svg"
            alt="Formation maintenance informatique JS TECH"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
