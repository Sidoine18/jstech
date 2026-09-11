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
    slug: "ecole-du-numerique-js-tech",
    title: "L'ÉCOLE DU NUMÉRIQUE",
    date: "Vendredi 11 Septembre 2026",
    image: "/images/actualites/797643560_1109071534807094_2895975317620791738_n.jpg",
    excerpt: "NOUVEAU À JS TECH : L'ÉCOLE DU NUMÉRIQUE.",
    content:
      "Après nos différentes formations, JS TECH franchit une nouvelle étape avec la mise en place d'un programme permanent de formation numérique destiné aux élèves du secondaire.\n\n" +
      "👨‍👩‍👧‍👦 Votre enfant peut intégrer JS TECH dès la 6ᵉ ou à n'importe quelle classe du secondaire, jusqu'en Terminale. Il sera accompagné progressivement dans son apprentissage du numérique, avec un parcours qui évolue selon son niveau, ses capacités et ses objectifs.\n\n" +
      "💻 L'objectif ne se limite pas à apprendre l'informatique de base. Nous voulons amener progressivement les enfants à comprendre et maîtriser les technologies d'aujourd'hui et de demain : intelligence artificielle, création de sites web, développement d'applications, programmation, outils numériques, bureautique, Internet et bien plus encore.\n\n" +
      "📚 Un véritable parcours d'apprentissage !\n" +
      "L'élève peut commencer en 6ᵉ, en 5ᵉ, en 4ᵉ, en 3ᵉ, en 2nde, en 1ère ou en Terminale et poursuivre son évolution année après année jusqu'à la fin du secondaire, selon le parcours et le contrat d'apprentissage choisis.\n\n" +
      "Organisation des cours :\n" +
      "🔹 Mercredi soir : 3 heures\n" +
      "🔹 Samedi matin : 3 heures\n" +
      "➡️ 6 heures de formation par semaine\n\n" +
      "💰 Frais d'inscription : 5 000 F CFA par enfant.\n\n" +
      "📌 Pour connaître les modalités de scolarité, les différentes formules et les contrats d'apprentissage, rapprochez-vous du Centre de Formation JS TECH.\n\n" +
      "🌟 Notre vision : préparer dès le secondaire une génération de jeunes capables de comprendre, créer et innover grâce au numérique.\n\n" +
      "JS TECH – La technologie à la portée de tous, votre satisfaction notre priorité ! 💙🧡",
    category: "Annonce",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
