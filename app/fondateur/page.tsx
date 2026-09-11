import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Le fondateur — Mr Elisée SOHOUNGBLE",
  description:
    "Mr Elisée SOHOUNGBLE, fondateur de JS TECH, formateur en TIC et gestionnaire de centre informatique à Bohicon.",
  alternates: { canonical: "/fondateur" },
};

export default function FondateurPage() {
  return (
    <section className="section">
      <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-900/8 order-1 lg:order-2">
          <Image
            src="/images/fondateur/elisee-sohoungble.jpg"
            alt="Mr Elisée SOHOUNGBLE, fondateur de JS TECH"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-3">Le fondateur</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Mr Elisée SOHOUNGBLE
          </h1>
          <p className="mt-4 text-lg font-medium text-azure-600">
            Fondateur de JS TECH — Formateur en TIC et gestionnaire de centre informatique
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-700/80">
            Jeune formateur en TIC et gestionnaire de centre informatique,
            Mr Elisée SOHOUNGBLE a fondé Jehovah Shammah Technologie (JS TECH)
            avec une conviction simple : les technologies de l&apos;information
            et de la communication doivent être accessibles à tous, sans
            distinction d&apos;âge ni de niveau.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-700/80">
            À travers JS TECH, il accompagne élèves, étudiants, enseignants
            et professionnels dans l&apos;acquisition de compétences numériques
            directement utiles à leur réussite académique et professionnelle.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Contacter JS TECH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
