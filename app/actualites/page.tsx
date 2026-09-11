import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Les actualités de JS TECH : formations, événements et Promo Vacances.",
  alternates: { canonical: "/actualites" },
};

export default function ActualitesPage() {
  return (
    <section className="section">
      <div className="container-jst">
        <SectionHeading
          eyebrow="Actualités"
          title="Actualités de JS TECH"
          description="Suivez les dernières nouvelles du centre."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
