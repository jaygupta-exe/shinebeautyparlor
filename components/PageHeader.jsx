import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <section className="relative bg-brand-cream py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 animate-slide-up">
          {title}
        </h1>

        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="animate-fade-in">
            <ol className="flex items-center justify-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-brand-gold hover:text-brand-dark transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaChevronRight className="text-gray-400" size={10} />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-brand-gold hover:text-brand-dark transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-500">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
