import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";

const staticRoutes = [
  "",
  "/a-propos",
  "/fondateur",
  "/formations",
  "/formations/informatique",
  "/formations/bureautique",
  "/formations/maintenance-informatique",
  "/promo-vacances",
  "/services",
  "/imprimerie",
  "/galerie",
  "/actualites",
  "/contact",
  "/faq",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const articleEntries = articles.map((a) => ({
    url: `${siteConfig.url}/actualites/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...articleEntries];
}
