import type { Metadata } from "next";
import Image from "next/image";
import { CalendarClock, GraduationCap, Target, Layers, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Gallery from "@/components/Gallery";
import { audiences } from "@/data/services";
import { formations } from "@/data/formations";

export const metadata: Metadata = {
  title: "Promo Vacances",
  description:
    "Promo Vacances JS TECH : formations intensives en informatique de courte durée, pendant les vacances scolaires, à Bohicon.",
  alternates: { canonical: "/promo-vacances" },
};

export default function PromoVacancesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-900">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(900px 450px at 85% -10%, rgba(242,123,27,0.32), transparent)",
          }}
        />
        <div className="container-jst relative grid grid-cols-1 gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-flame-500 px-4 py-1.5 text-xs font-semibold text-white">
              PROMO VACANCES
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Profitez des vacances pour apprendre le numérique
            </h1>
            <p className="mt-6 max-w-lg text-white/70">
              Les Promo Vacances sont des formations intensives en
              informatique de courte durée, organisées pendant les vacances
              scolaires à l&apos;intention des enseignants, élèves et
              étudiants. Elles permettent aux participants de renforcer
              rapidement leurs compétences numériques et de mieux préparer
              la rentrée académique.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                S&apos;inscrire à la Promo Vacances
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/promo-vacances/placeholder-hero.svg"
              alt="Promo Vacances JS TECH"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="section bg-white">
        <div className="container-jst grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex gap-4 rounded-2xl border border-ink-900/8 p-6">
            <CalendarClock className="shrink-0 text-flame-500" size={26} />
            <div>
              <h3 className="font-semibold text-ink-900">Le concept</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
                Des formations intensives en informatique, de courte durée,
                organisées pendant les vacances scolaires.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-ink-900/8 p-6">
            <Target className="shrink-0 text-flame-500" size={26} />
            <div>
              <h3 className="font-semibold text-ink-900">Les objectifs</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
                Renforcer rapidement les compétences numériques et mieux
                préparer la rentrée académique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIC CIBLE */}
      <section className="section">
        <div className="container-jst">
          <SectionHeading
            eyebrow="Public cible"
            title="À qui s'adresse la Promo Vacances ?"
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {audiences
              .filter((a) => ["Élèves", "Étudiants", "Enseignants"].includes(a.label))
              .map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-ink-900/8 bg-white p-5"
                >
                  <Icon size={20} className="text-azure-600" />
                  <span className="text-sm font-medium text-ink-900">{label}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* DOMAINES DE FORMATION */}
      <section className="section bg-white">
        <div className="container-jst">
          <SectionHeading
            eyebrow="Domaines de formation"
            title="Ce que couvre la Promo Vacances"
            description="Les mêmes domaines d'excellence de JS TECH, dans un format intensif adapté aux vacances."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {formations.map((f) => (
              <div key={f.slug} className="flex items-start gap-4 rounded-2xl border border-ink-900/8 p-6">
                <f.icon size={22} className="mt-0.5 shrink-0 text-azure-600" />
                <div>
                  <h3 className="font-semibold text-ink-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-700/75">{f.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME / INFOS PRATIQUES */}
      <section className="section">
        <div className="container-jst grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/8 bg-white p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
              <Layers size={20} />
            </div>
            <h3 className="font-semibold text-ink-900">Programme</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
              Le programme détaillé de chaque session de Promo Vacances sera
              communiqué directement par JS TECH avant le lancement de la
              formation.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-900/8 bg-white p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-flame-50 text-flame-600">
              <Info size={20} />
            </div>
            <h3 className="font-semibold text-ink-900">Informations pratiques</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
              Dates, horaires et modalités d&apos;inscription seront
              précisés par JS TECH. Contactez-nous pour être informé dès
              l&apos;ouverture des prochaines sessions.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="section bg-white">
        <div className="container-jst">
          <SectionHeading eyebrow="Galerie" title="La Promo Vacances en images" />
          <div className="mt-10">
            <Gallery />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-jst">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-ink-900/8 bg-ink-900 px-6 py-14 text-center sm:px-14">
            <GraduationCap size={32} className="text-flame-400" />
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Inscrivez-vous à la prochaine Promo Vacances
            </h2>
            <Button href="/contact" variant="primary">
              Je m&apos;inscris
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
