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
    src: "/images/galerie/placeholder-1.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g2",
    src: "/images/galerie/placeholder-2.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g3",
    src: "/images/galerie/placeholder-3.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g4",
    src: "/images/galerie/placeholder-4.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g5",
    src: "/images/galerie/placeholder-5.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g6",
    src: "/images/galerie/placeholder-6.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g7",
    src: "/images/galerie/placeholder-7.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g8",
    src: "/images/galerie/placeholder-8.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g9",
    src: "/images/galerie/placeholder-9.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g10",
    src: "/images/galerie/placeholder-10.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g11",
    src: "/images/galerie/placeholder-11.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
  },
  {
    id: "g12",
    src: "/images/galerie/placeholder-12.jpg",
    alt: "Promo Vacances JS TECH",
    category: "promo-vacances",
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
