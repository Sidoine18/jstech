import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { whyJsTech, audiences } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos de JS TECH",
  description:
    "Découvrez Jehovah Shammah Technologie (JS TECH), centre de formation professionnelle en TIC situé à Bohicon, Bénin.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      <section className="section">
        <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3">À propos</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Qui est JS TECH ?
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-700/80">
              {siteConfig.name} (JS TECH) est un centre de formation
              professionnelle spécialisé dans les Technologies de
              l&apos;Information et de la Communication (TIC). Notre objectif
              est de former tout le monde aux TIC, sans distinction d&apos;âge
              ni de niveau, afin de permettre à chacun de maîtriser les outils
              informatiques indispensables dans le monde académique et
              professionnel.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700/80">
              Le centre est implanté à {siteConfig.address.city}, dans
              l&apos;arrondissement d&apos;{siteConfig.address.line2.replace("Arrondissement d'", "")}.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-900/8">
            <Image
              src="/images/hero/placeholder-4.jpg"
              alt="JS TECH, centre de formation en TIC"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-jst">
          <SectionHeading
            eyebrow="Notre mission"
            title="Former. Accompagner. Préparer l'avenir."
            description="Trois mots qui résument l'engagement de JS TECH auprès de chaque apprenant."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-jst">
          <SectionHeading eyebrow="Nos valeurs" title="Pourquoi choisir JS TECH ?" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyJsTech.map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink-900/8 bg-white p-6">
                <h3 className="font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-jst">
          <SectionHeading eyebrow="Public cible" title="À qui s'adressent nos formations ?" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {audiences.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-ink-900/8 p-6 text-center"
              >
                <Icon size={24} className="text-azure-600" />
                <span className="text-sm font-medium text-ink-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
