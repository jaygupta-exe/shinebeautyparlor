import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Shine Beauty Parlour"
                width={180}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed max-w-md">
              Experience ultimate relaxation and rejuvenation at Shine Beauty
              Parlour. We offer premium beauty services designed to enhance your
              natural glow and elevate your confidence.
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt className="text-brand-gold flex-shrink-0" />
                123 Shine Street, NY 10001
              </p>
              <p className="flex items-center gap-3 text-sm">
                <FaPhoneAlt className="text-brand-gold flex-shrink-0" />
                +1 234 567 8900
              </p>
              <p className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-brand-gold flex-shrink-0" />
                contact@shinebeauty.com
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold font-playfair font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold hover:pl-1 transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-gold font-playfair font-semibold text-lg mb-6">
              Newsletter
            </h4>
            <p className="text-white/50 text-sm mb-4">
              Subscribe for the latest beauty tips and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/10 rounded-l-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
              />
              <button
                type="button"
                className="bg-brand-gold hover:bg-brand-gold/80 text-white px-4 rounded-r-lg transition-colors duration-300"
                aria-label="Subscribe"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-brand-gold">Shine Beauty Parlour</span>. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
