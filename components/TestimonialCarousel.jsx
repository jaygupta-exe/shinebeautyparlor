"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];
  const photoUrl = t.photo
    ? urlFor(t.photo).width(100).height(100).url()
    : null;

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Card */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-gold/5 border border-brand-gold/10 text-center">
        <FaQuoteLeft className="text-brand-gold/20 text-5xl mx-auto mb-6" />

        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light italic">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Avatar */}
        {photoUrl && (
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-brand-gold ring-offset-2">
            <Image
              src={photoUrl}
              alt={t.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <h4 className="font-playfair font-semibold text-brand-dark text-lg">
          {t.name}
        </h4>
        {t.role && (
          <p className="text-brand-gold text-sm mt-1">{t.role}</p>
        )}
      </div>

      {/* Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-gold hover:scale-110 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-gold hover:scale-110 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={14} />
          </button>
        </>
      )}

      {/* Dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-brand-gold"
                  : "w-2 h-2 bg-brand-gold/30 hover:bg-brand-gold/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
