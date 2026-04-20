"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const aboutSlides = [
  "/images/about-slide-1.png",
  "/images/about-slide-2.png",
  "/images/about-slide-3.png",
];

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + aboutSlides.length) % aboutSlides.length);
  const next = () =>
    setCurrent((c) => (c + 1) % aboutSlides.length);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-gold/10">
      <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
        {aboutSlides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`About Shine Beauty Parlour ${i + 1}`}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${
              i === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            priority={i === 0}
            quality={100}
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
          aria-label="Previous about slide"
        >
          <FaChevronLeft size={14} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
          aria-label="Next about slide"
        >
          <FaChevronRight size={14} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {aboutSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-brand-gold"
                  : "w-2 h-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to about slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
