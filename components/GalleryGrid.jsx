"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { urlFor } from "@/lib/sanity";

export default function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    "all",
    ...new Set(images.map((img) => img.category).filter(Boolean)),
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Filter Tabs */}
      {categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-gold text-white shadow-md shadow-brand-gold/30"
                  : "bg-brand-cream text-brand-dark hover:bg-brand-gold/10 hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((img) => {
          const imageUrl = urlFor(img.image).width(800).url();
          return (
            <div
              key={img._id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={imageUrl}
                  alt={img.title || "Gallery image"}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-white font-playfair font-semibold text-lg">
                      {img.title}
                    </p>
                    {img.category && (
                      <p className="text-brand-gold text-sm capitalize mt-1">
                        {img.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <FaTimes size={20} />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={urlFor(selectedImage.image).width(1200).url()}
              alt={selectedImage.title || "Gallery image"}
              width={1200}
              height={900}
              className="rounded-2xl object-contain max-h-[85vh] w-auto"
            />
            {selectedImage.title && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl p-4">
                <p className="text-white font-playfair font-semibold">
                  {selectedImage.title}
                </p>
                {selectedImage.category && (
                  <p className="text-brand-gold text-sm capitalize mt-1">
                    {selectedImage.category}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
