import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/actualites/${article.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <article className="section">
      <div className="container-jst max-w-3xl">
        <Link href="/actualites" className="inline-flex items-center gap-2 text-sm font-medium text-azure-600">
          <ArrowLeft size={16} /> Retour aux actualités
        </Link>

        <p className="mt-6 text-xs font-medium text-flame-600">
          {article.category} · {article.date}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{article.title}</h1>

        {article.isDemo && (
          <p className="mt-4 inline-block rounded-full bg-ink-900/5 px-4 py-1.5 text-xs font-medium text-ink-700/70">
            Contenu de démonstration
          </p>
        )}

        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-ink-900/8">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>

        <p className="mt-8 text-base leading-relaxed text-ink-700/80">{article.content}</p>
      </div>
    </article>
  );
}
