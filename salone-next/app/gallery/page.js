import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { getGalleryImages, urlFor } from "@/lib/sanity";

export const metadata = {
  title: "Gallery",
  description:
    "View our portfolio of haircuts, makeup, nail designs, and more at Shine Beauty Parlour.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <PageHeader title="Our Gallery" breadcrumbs={[{ label: "Gallery" }]} />

      <section className="py-20 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-dancing text-brand-gold text-3xl mb-2">
              Our Portfolio
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark">
              See Our Professional Work
            </h2>
          </div>

          {images.length > 0 ? (
            <GalleryGrid images={images} urlFor={urlFor} />
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-brand-cream mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📷</span>
              </div>
              <p className="text-gray-400 text-lg">
                Gallery images will appear here once added to your Sanity CMS.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
