export type Article = {
  slug: string;
  title: string;
  date: string; // format lisible, à ajuster
  image: string;
  excerpt: string;
  content: string;
  category: string;
  isDemo?: boolean;
};

// Aucune actualité réelle n'a été communiquée pour le moment.
// L'article ci-dessous est un contenu de démonstration clairement
// identifié comme tel : il illustre le fonctionnement de la page
// Actualités et doit être remplacé par de vraies publications
// dans /content ou directement dans ce fichier.
export const articles: Article[] = [
  {
    slug: "bienvenue-sur-le-site-js-tech",
    title: "Bienvenue sur le nouveau site de JS TECH",
    date: "À venir",
    image: "/images/actualites/placeholder-1.svg",
    excerpt:
      "JS TECH lance son site vitrine pour présenter ses formations et services informatiques. (Contenu de démonstration)",
    content:
      "Ceci est un exemple d'article de démonstration. Les actualités réelles de JS TECH — formations, événements, Promo Vacances — seront publiées ici prochainement.",
    category: "Annonce",
    isDemo: true,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
