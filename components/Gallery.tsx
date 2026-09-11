"use client";

import { useState } from "react";
import Image from "next/image";
import {
  galleryImages,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "toutes">("toutes");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    filter === "toutes"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === cat.value
                ? "bg-ink-900 text-white"
                : "bg-white text-ink-700 border border-ink-900/10 hover:border-ink-900/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-ink-900/8"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          images={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}
