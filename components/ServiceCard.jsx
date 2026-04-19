import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export default function ServiceCard({ service }) {
  const imageUrl = service.icon
    ? urlFor(service.icon).width(200).height(200).url()
    : null;

  return (
    <div className="group bg-white rounded-2xl p-8 border border-brand-gold/10 hover:border-brand-gold/30 shadow-sm hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-500 hover:-translate-y-2">
      {/* Icon */}
      {imageUrl && (
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 relative">
            <Image
              src={imageUrl}
              alt={service.title}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              sizes="80px"
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="font-playfair text-xl font-semibold text-brand-dark text-center mb-3 group-hover:text-brand-gold transition-colors duration-300">
        {service.title}
      </h3>

      {/* Price */}
      {service.price && (
        <p className="text-center text-brand-gold font-semibold text-lg mb-3">
          {service.price}
        </p>
      )}

      {/* Description */}
      {service.description && (
        <p className="text-gray-500 text-sm text-center leading-relaxed">
          {service.description}
        </p>
      )}

      {/* Hover Line */}
      <div className="mt-6 h-0.5 mx-auto bg-gradient-to-r from-transparent via-brand-gold to-transparent w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
