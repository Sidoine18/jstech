import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section">
      <div className="container-jst max-w-prose">
        <h1 className="text-3xl font-bold sm:text-4xl">Politique de confidentialité</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700/80">
          <p>
            {siteConfig.shortName} accorde une grande importance à la
            protection des données personnelles des visiteurs de son site.
          </p>

          <div>
            <h2 className="font-semibold text-ink-900">Données collectées</h2>
            <p className="mt-2">
              Le site ne dispose pas de base de données ni de compte
              utilisateur. Les seules données collectées sont celles que
              vous transmettez volontairement via le formulaire de contact
              (nom, téléphone, email, objet, message), afin de répondre à
              votre demande.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Utilisation des données</h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact sont
              utilisées exclusivement pour répondre à votre demande et ne
              sont ni revendues, ni partagées avec des tiers à des fins
              commerciales.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Service tiers d&apos;envoi de formulaire</h2>
            <p className="mt-2">
              Selon la configuration du site, le formulaire de contact peut
              transmettre vos informations à un service externe (Formspree
              ou Web3Forms) chargé uniquement de l&apos;acheminement du
              message vers {siteConfig.shortName}.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Vos droits</h2>
            <p className="mt-2">
              Vous pouvez à tout moment demander la suppression de vos
              informations en contactant {siteConfig.shortName} directement
              par téléphone ou WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
