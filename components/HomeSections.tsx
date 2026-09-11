import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FormationCard from "./FormationCard";
import { formations } from "@/data/formations";
import { whyJsTech, audiences, services } from "@/data/services";
import Button from "./Button";

export function IntroSection() {
  return (
    <section className="section">
      <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow mb-3">Bienvenue chez JS TECH</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Former. Accompagner. Préparer l&apos;avenir.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-700/80">
            JEHOVAH SHAMMAH TECHNOLOGIE (JS TECH) est un centre de formation
            professionnelle spécialisé dans les Technologies de l&apos;Information
            et de la Communication. Notre objectif est de former tout le
            monde aux TIC, sans distinction d&apos;âge ni de niveau, afin de
            permettre à chacun de maîtriser les outils informatiques
            indispensables dans le monde académique et professionnel.
          </p>
          <div className="mt-8">
            <Button href="/a-propos" variant="secondary">
              Découvrir JS TECH <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {audiences.slice(0, 4).map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-ink-900/8 bg-white p-5"
            >
              <Icon size={20} className="text-azure-600" />
              <span className="text-sm font-medium text-ink-900">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DomainesSection() {
  return (
    <section className="section bg-white">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Nos domaines"
          title="Nos domaines de compétence"
          description="Des formations concrètes, pensées pour être immédiatement utiles."
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
          <FormationCard
            href="/services"
            title="Services informatiques"
            description="Découvrez les différentes prestations proposées par JS TECH."
            icon={services[0].icon}
          />
          <FormationCard
            href="/imprimerie"
            title="Imprimerie"
            description="Impression couleur, noir et blanc, photocopie et services associés."
            icon={services[0].icon}
          />
        </div>
      </div>
    </section>
  );
}

export function PourquoiSection() {
  return (
    <section className="section">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Pourquoi JS TECH"
          title="Pourquoi choisir JS TECH ?"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyJsTech.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-ink-900/8 bg-white p-6">
              <span className="text-xs font-semibold text-flame-500">{`0${i + 1}`}</span>
              <h3 className="mt-2 font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromoVacancesBlock() {
  return (
    <section className="section">
      <div className="container-jst">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 sm:px-14 sm:py-16">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(800px 400px at 90% 10%, rgba(242,123,27,0.35), transparent)",
            }}
          />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-flame-500 px-4 py-1.5 text-xs font-semibold text-white">
                PROMO VACANCES
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Profitez des vacances pour apprendre le numérique
              </h2>
              <p className="mt-4 max-w-lg text-white/70">
                Renforcez vos compétences informatiques et préparez
                efficacement votre prochaine rentrée.
              </p>
              <div className="mt-8">
                <Button href="/promo-vacances" variant="primary">
                  Découvrir la Promo Vacances <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/promo-vacances/placeholder-hero.svg"
                alt="Promo Vacances JS TECH"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PublicCibleSection() {
  return (
    <section className="section bg-white">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Public cible"
          title="Nos formations s'adressent à tous"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
  );
}

export function FondateurSection() {
  return (
    <section className="section">
      <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-900/8">
          <Image
            src="/images/fondateur/placeholder.svg"
            alt="Mr Elisée SOHOUNGBLE, fondateur de JS TECH"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow mb-3">À l&apos;origine de JS TECH</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Mr Elisée SOHOUNGBLE
          </h2>
          <p className="mt-4 font-medium text-azure-600">
            Fondateur de JS TECH — Formateur en TIC et gestionnaire de centre informatique
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-700/80">
            Jeune formateur en TIC et gestionnaire de centre informatique,
            Mr Elisée SOHOUNGBLE a fondé JS TECH avec la volonté de rendre
            les technologies de l&apos;information et de la communication
            accessibles à tous, à Bohicon et au-delà.
          </p>
          <div className="mt-8">
            <Button href="/fondateur" variant="secondary">
              Découvrir son parcours <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaFinalSection() {
  return (
    <section className="section bg-white">
      <div className="container-jst">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-ink-900/8 bg-azure-50 px-6 py-14 text-center sm:px-14">
          <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
            Prêt à développer vos compétences numériques ?
          </h2>
          <p className="max-w-md text-ink-700/75">
            Contactez JS TECH dès aujourd&apos;hui pour connaître les
            formations disponibles et les modalités d&apos;inscription.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              S&apos;inscrire à une formation
            </Button>
            <Link
              href="/formations"
              className="inline-flex items-center gap-1 text-sm font-semibold text-azure-700 hover:text-azure-900"
            >
              Voir toutes les formations <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
