import type { Metadata } from "next";
import Image from "next/image";
import { Cpu, CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Formation informatique",
  description:
    "Formation informatique à Bohicon avec JS TECH : de l'initiation au perfectionnement, pour tous les niveaux.",
  alternates: { canonical: "/formations/informatique" },
};

export default function FormationInformatiquePage() {
  return (
    <section className="section">
      <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
            <Cpu size={22} />
          </div>
          <p className="eyebrow mb-3">Formation</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Formation informatique
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-700/80">
            Une formation progressive pour apprivoiser l&apos;outil
            informatique : découverte de l&apos;ordinateur, manipulation des
            logiciels courants et acquisition d&apos;une véritable autonomie
            numérique, quel que soit le niveau de départ.
          </p>

          <ul className="mt-8 space-y-3">
            {["Initiation", "Perfectionnement"].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-ink-900">
                <CheckCircle2 size={18} className="text-azure-600" /> {point}
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
            src="/images/formations/informatique.svg"
            alt="Formation informatique JS TECH"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
