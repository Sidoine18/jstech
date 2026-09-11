import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function FormationCard({ href, title, description, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl border border-ink-900/8 bg-white p-7 transition-all duration-200 hover:border-azure-300 hover:shadow-soft"
    >
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/75">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-azure-600">
        En savoir plus
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
