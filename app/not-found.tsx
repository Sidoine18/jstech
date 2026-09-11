import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="container-jst text-center">
        <p className="eyebrow mb-3">Erreur 404</p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Cette page semble avoir pris un autre chemin.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-700/75">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </section>
  );
}
