"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Shine Beauty Parlour"
              width={180}
              height={60}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-brand-gold text-white shadow-md shadow-brand-gold/30"
                    : "text-brand-dark hover:text-brand-gold hover:bg-brand-gold/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-brand-dark hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 space-y-1 bg-white border-t border-brand-gold/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "bg-brand-gold/10 text-brand-gold border-l-4 border-brand-gold"
                  : "text-brand-dark hover:bg-brand-nude/50 hover:text-brand-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
