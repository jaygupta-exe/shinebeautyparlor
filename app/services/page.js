import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { getServices } from "@/lib/sanity";

export const metadata = {
  title: "Services",
  description:
    "Explore our premium beauty services including haircuts, makeup, skincare, massage, manicure, and pedicure at Shine Beauty Parlour.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-dancing text-brand-gold text-3xl mb-2">
              What We Offer
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark">
              Explore Our Premium Services
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Indulge in our expert services tailored to your unique beauty
              needs. We guarantee a luxurious experience that leaves you looking
              stunning and feeling your absolute best.
            </p>
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-brand-cream mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <p className="text-gray-400 text-lg">
                Services will appear here once added to your Sanity CMS.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Go to your Sanity Studio and add services to see them here.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
