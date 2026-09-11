import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/actualites/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white transition-shadow hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-azure-50">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {article.isDemo && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink-700">
            Contenu de démonstration
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-flame-600">{article.category} · {article.date}</p>
        <h3 className="mt-2 text-lg font-semibold text-ink-900">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/75 flex-1">{article.excerpt}</p>
      </div>
    </Link>
  );
}
