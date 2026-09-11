import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({ title, description, icon: Icon }: Props) {
  return (
    <div className="flex gap-4 rounded-2xl border border-ink-900/8 bg-white p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-flame-50 text-flame-600">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-700/75">{description}</p>
      </div>
    </div>
  );
}
