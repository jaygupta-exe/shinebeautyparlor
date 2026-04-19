import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ member }) {
  const imageUrl = member.photo
    ? urlFor(member.photo).width(400).height(500).url()
    : null;

  const socials = [
    { icon: FaFacebookF, url: member.socialLinks?.facebook },
    { icon: FaInstagram, url: member.socialLinks?.instagram },
    { icon: FaLinkedinIn, url: member.socialLinks?.linkedin },
  ].filter((s) => s.url);

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
      {/* Image */}
      {imageUrl && (
        <div className="aspect-[4/5] relative">
          <Image
            src={imageUrl}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <p className="text-brand-gold text-sm font-medium mb-1">
          {member.role}
        </p>
        <h4 className="text-white font-playfair text-xl font-semibold mb-3">
          {member.name}
        </h4>
        {socials.length > 0 && (
          <div className="flex gap-2">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-gold transition-all duration-300"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Name bar (visible when not hovered) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 group-hover:translate-y-full transition-transform duration-500">
        <p className="text-brand-gold text-xs font-medium">{member.role}</p>
        <h4 className="font-playfair font-semibold text-brand-dark">
          {member.name}
        </h4>
      </div>
    </div>
  );
}
