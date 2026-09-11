import type { LucideIcon } from "lucide-react";
import {
  Printer,
  Copy,
  FileImage,
  Wrench,
  GraduationCap,
  Users,
  Baby,
  Briefcase,
  School,
  Sparkles,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "Services informatiques",
    description:
      "L'ensemble des prestations informatiques proposées par JS TECH pour accompagner particuliers, élèves et professionnels dans leurs besoins numériques.",
    icon: Wrench,
  },
];

export const imprimerieServices: ServiceItem[] = [
  {
    title: "Impression couleur",
    description: "Impression de documents en couleur, nette et soignée.",
    icon: FileImage,
  },
  {
    title: "Impression noir et blanc",
    description: "Impression rapide de documents en noir et blanc.",
    icon: Printer,
  },
  {
    title: "Photocopie",
    description: "Reproduction de documents administratifs et académiques.",
    icon: Copy,
  },
  {
    title: "Autres services d'impression",
    description: "D'autres prestations d'imprimerie disponibles selon vos besoins.",
    icon: Sparkles,
  },
];

export type Audience = {
  label: string;
  icon: LucideIcon;
};

export const audiences: Audience[] = [
  { label: "Élèves", icon: School },
  { label: "Étudiants", icon: GraduationCap },
  { label: "Enseignants", icon: Users },
  { label: "Jeunes", icon: Baby },
  { label: "Adultes", icon: Users },
  { label: "Professionnels", icon: Briefcase },
];

export type WhyItem = {
  title: string;
  description: string;
};

export const whyJsTech: WhyItem[] = [
  {
    title: "Accessible",
    description: "Des formations destinées à tous, sans distinction d'âge ou de niveau.",
  },
  {
    title: "Pratique",
    description: "Des compétences directement utiles dans les études et la vie professionnelle.",
  },
  {
    title: "Proximité",
    description: "Un centre implanté à Bohicon, au cœur d'Avogbanna.",
  },
  {
    title: "Accompagnement",
    description: "Une approche orientée vers la progression réelle de chaque apprenant.",
  },
];
