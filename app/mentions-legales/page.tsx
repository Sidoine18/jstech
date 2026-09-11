import type { Metadata } from "next";
import { siteConfig, credit } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section">
      <div className="container-jst max-w-prose">
        <h1 className="text-3xl font-bold sm:text-4xl">Mentions légales</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700/80">
          <div>
            <h2 className="font-semibold text-ink-900">Éditeur du site</h2>
            <p className="mt-2">
              {siteConfig.name} ({siteConfig.shortName})
              <br />
              {siteConfig.address.line1}, {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}, {siteConfig.address.country}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Responsable de la publication</h2>
            <p className="mt-2">{siteConfig.founder}</p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Contact</h2>
            <p className="mt-2">
              Téléphone : {siteConfig.phoneDisplay}
              <br />
              Email : {siteConfig.email}
              <br />
              WhatsApp disponible sur simple demande.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Conception du site</h2>
            <p className="mt-2">
              Ce site a été conçu par{" "}
              <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-azure-600 underline">
                {credit.name}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-ink-900">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, logo,
              images) est la propriété de {siteConfig.shortName}, sauf
              mention contraire. Toute reproduction sans autorisation est
              interdite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
