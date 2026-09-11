import type { LucideIcon } from "lucide-react";
import { Cpu, FileSpreadsheet, Wrench } from "lucide-react";

export type Formation = {
  slug: "informatique" | "bureautique" | "maintenance-informatique";
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const formations: Formation[] = [
  {
    slug: "informatique",
    title: "Formation informatique",
    short: "De l'initiation au perfectionnement.",
    description:
      "Une formation progressive pour apprivoiser l'outil informatique : découverte de l'ordinateur, manipulation des logiciels courants et acquisition d'une véritable autonomie numérique, quel que soit le niveau de départ.",
    icon: Cpu,
    points: ["Initiation", "Perfectionnement"],
  },
  {
    slug: "bureautique",
    title: "Formation bureautique",
    short: "Les outils indispensables du monde académique et professionnel.",
    description:
      "La maîtrise des logiciels bureautiques est devenue incontournable pour réussir ses études comme sa carrière. JS TECH accompagne chaque apprenant vers une utilisation efficace des outils Microsoft Office et d'Internet.",
    icon: FileSpreadsheet,
    points: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Internet"],
  },
  {
    slug: "maintenance-informatique",
    title: "Maintenance informatique",
    short: "Diagnostiquer, entretenir, dépanner.",
    description:
      "Apprenez les bases essentielles de la maintenance des équipements informatiques : diagnostic des pannes, dépannage, entretien régulier et configuration des postes de travail.",
    icon: Wrench,
    points: ["Diagnostic", "Dépannage", "Entretien", "Configuration"],
  },
];

export function getFormationBySlug(slug: string) {
  return formations.find((f) => f.slug === slug);
}
