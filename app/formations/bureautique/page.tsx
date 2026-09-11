import type { Metadata } from "next";
import Image from "next/image";
import { FileSpreadsheet, CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Formation bureautique",
  description:
    "Formation bureautique à Bohicon avec JS TECH : Word, Excel, PowerPoint et Internet.",
  alternates: { canonical: "/formations/bureautique" },
};

export default function FormationBureautiquePage() {
  return (
    <section className="section">
      <div className="container-jst grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-flame-50 text-flame-600">
            <FileSpreadsheet size={22} />
          </div>
          <p className="eyebrow mb-3">Formation</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Formation bureautique
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-700/80">
            La maîtrise des logiciels bureautiques est devenue incontournable
            pour réussir ses études comme sa carrière. JS TECH accompagne
            chaque apprenant vers une utilisation efficace des outils
            Microsoft Office et d&apos;Internet.
          </p>

          <ul className="mt-8 space-y-3">
            {["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Internet"].map(
              (point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-ink-900">
                  <CheckCircle2 size={18} className="text-flame-600" /> {point}
                </li>
              )
            )}
          </ul>

          <div className="mt-9">
            <Button href="/contact" variant="primary">
              S&apos;inscrire à cette formation
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-900/8">
          <Image
            src="/images/formations/bureautique.svg"
            alt="Formation bureautique JS TECH"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
