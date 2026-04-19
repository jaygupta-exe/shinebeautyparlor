"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "/images/hero-slider-1.jpg",
  "/images/hero-slider-2.jpg",
  "/images/hero-slider-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[85vh] py-12 lg:py-0">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-slide-left">
            <p className="font-dancing text-brand-gold text-3xl md:text-4xl mb-3">
              Welcome
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-8">
              Beauty Salon{" "}
              <span className="text-shine">Fashion</span>{" "}
              for Women
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12345678900"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/20 group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-brand-gold text-sm font-semibold">Call Us</p>
                  <p className="text-brand-dark font-medium">+1 234 567 8900</p>
                </div>
              </a>

              <a
                href="mailto:contact@shinebeauty.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/20 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-brand-gold text-sm font-semibold">Mail Us</p>
                  <p className="text-brand-dark font-medium">
                    contact@shinebeauty.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-gold/10">
              {slides.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Beauty salon slide ${i + 1}`}
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out ${
                    i === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <FaChevronRight size={14} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 h-2 bg-brand-gold"
                        : "w-2 h-2 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
