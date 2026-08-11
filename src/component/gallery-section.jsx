import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import {
  gallery,
  galleryCategories,
  gallerySectionContent,
} from "@/data/gallery";

const placeholderColors = [
  "from-blue-400 to-blue-600",
  "from-red-400 to-red-600",
  "from-green-400 to-green-600",
  "from-amber-400 to-amber-600",
  "from-purple-400 to-purple-600",
  "from-teal-400 to-teal-600",
];

function PlaceholderImage({ index, alt, className = "" }) {
  return (
    <div
      className={`bg-gradient-to-br ${
        placeholderColors[index % placeholderColors.length]
      } ${className}`}
      role="img"
      aria-label={alt}
    />
  );
}

export function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const filtered =
    filter === "all"
      ? gallery
      : gallery.filter((item) => item.category === filter);

  const selectedItem =
    lightbox !== null ? filtered[lightbox] : null;

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-16 sm:py-24"
      aria-label="Gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-service">
            {gallerySectionContent.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {gallerySectionContent.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {gallerySectionContent.description}
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Gallery categories"
        >
          {galleryCategories.map((category) => (
            <button
              key={category.value}
              type="button"
              role="tab"
              aria-selected={filter === category.value}
              onClick={() => {
                setFilter(category.value);
                setLightbox(null);
              }}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        {filtered.length > 0 ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id ?? index}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  className="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`View: ${item.alt}`}
                >
                  <PlaceholderImage
                    index={index}
                    alt={item.alt}
                    className={
                      index % 3 === 0
                        ? "aspect-[4/3]"
                        : index % 3 === 1
                          ? "aspect-square"
                          : "aspect-[3/4]"
                    }
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/35">
                    <ZoomIn className="h-7 w-7 scale-75 text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
                  </div>

                  {/* Caption */}
                  {item.caption && (
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-8 text-left transition-transform group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-card px-6 py-12 text-center">
            <p className="text-sm text-muted-foreground">
              No images found for this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] max-w-4xl overflow-hidden rounded-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <PlaceholderImage
                index={lightbox}
                alt={selectedItem.alt}
                className="aspect-video w-full min-w-[280px] sm:min-w-[500px] lg:min-w-[800px]"
              />

              {selectedItem.caption && (
                <div className="bg-card px-5 py-4">
                  <p className="text-sm font-medium text-foreground">
                    {selectedItem.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
