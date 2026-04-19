import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  getServices,
  getTeamMembers,
  getTestimonials,
} from "@/lib/sanity";
import { FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";

export default async function HomePage() {
  const [services, team, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ]);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-brand-gold/10">
                <Image
                  src="/images/about.jpg"
                  alt="About Shine Beauty Parlour"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Call Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-brand-gold/10">
                <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center shadow-md">
                  <FaCalendarAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-dark">25+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="font-dancing text-brand-gold text-3xl mb-2">
                About Us
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Why People Choose Us!
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Shine Beauty Parlour, our mission is to bring out the best in
                you. With years of experience and a passion for beauty, our
                expert team uses top-quality products to provide personalized
                treatments that leave you feeling radiant and refreshed.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-cream rounded-2xl p-6 text-center">
                  <FaCalendarAlt className="text-brand-gold text-3xl mx-auto mb-3" />
                  <p className="text-3xl font-bold text-brand-dark">25</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="bg-brand-cream rounded-2xl p-6 text-center">
                  <FaUsers className="text-brand-gold text-3xl mx-auto mb-3" />
                  <p className="text-3xl font-bold text-brand-dark">999+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                    Happy Customers
                  </p>
                </div>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition-colors duration-300 shadow-lg shadow-brand-gold/20"
              >
                Explore Services
                <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-dancing text-brand-gold text-3xl mb-2">
              Our Services
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark">
              Explore Our Services
            </h2>
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 py-12">
              Services will appear here once added to Sanity CMS.
            </p>
          )}

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full font-medium hover:bg-brand-gold hover:text-white transition-all duration-300"
            >
              View All Services
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-dancing text-brand-gold text-3xl mb-2">
              Team Members
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark">
              Our Experienced Specialists
            </h2>
          </div>

          {team.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <TeamCard key={member._id} member={member} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 py-12">
              Team members will appear here once added to Sanity CMS.
            </p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-dancing text-brand-gold text-3xl mb-2">
              Testimonials
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark">
              What Clients Say!
            </h2>
          </div>

          {testimonials.length > 0 ? (
            <TestimonalCarouselWrapper testimonials={testimonials} />
          ) : (
            <p className="text-center text-gray-400 py-12">
              Testimonials will appear here once added to Sanity CMS.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

// Wrapper to pass server-fetched data to client component
function TestimonalCarouselWrapper({ testimonials }) {
  return <TestimonialCarousel testimonials={testimonials} />;
}
