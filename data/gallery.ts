export type GalleryCategory =
  | "formations"
  | "promo-vacances"
  | "activites"
  | "centre"
  | "apprenants";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};

// Images de démonstration (placeholders) — à remplacer par de vraies
// photos de JS TECH dans /public/images/galerie/ en conservant les
// mêmes noms de fichiers, ou en mettant à jour les chemins ci-dessous.
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/galerie/placeholder-1.svg",
    alt: "Séance de formation en informatique (illustration)",
    category: "formations",
  },
  {
    id: "g2",
    src: "/images/galerie/placeholder-2.svg",
    alt: "Atelier bureautique (illustration)",
    category: "formations",
  },
  {
    id: "g3",
    src: "/images/galerie/placeholder-3.svg",
    alt: "Promo Vacances JS TECH (illustration)",
    category: "promo-vacances",
  },
  {
    id: "g4",
    src: "/images/galerie/placeholder-4.svg",
    alt: "Activité pratique au centre (illustration)",
    category: "activites",
  },
  {
    id: "g5",
    src: "/images/galerie/placeholder-5.svg",
    alt: "Le centre JS TECH (illustration)",
    category: "centre",
  },
  {
    id: "g6",
    src: "/images/galerie/placeholder-6.svg",
    alt: "Apprenants de JS TECH (illustration)",
    category: "apprenants",
  },
];

export const galleryCategories: { value: GalleryCategory | "toutes"; label: string }[] = [
  { value: "toutes", label: "Toutes" },
  { value: "formations", label: "Formations" },
  { value: "promo-vacances", label: "Promo Vacances" },
  { value: "activites", label: "Activités" },
  { value: "centre", label: "Centre" },
  { value: "apprenants", label: "Apprenants" },
];
