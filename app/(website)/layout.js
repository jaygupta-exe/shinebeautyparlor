import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: {
    default: "Shine Beauty Parlour - Luxury Beauty Salon",
    template: "%s | Shine Beauty Parlour",
  },
  description:
    "Experience ultimate relaxation and rejuvenation at Shine Beauty Parlour. Premium beauty services including haircuts, makeup, skincare, massage, manicure, and pedicure.",
  keywords: [
    "beauty salon",
    "beauty parlour",
    "haircut",
    "makeup",
    "skincare",
    "massage",
    "manicure",
    "pedicure",
  ],
  authors: [{ name: "Shine Beauty Parlour" }],
  creator: "Shine Beauty Parlour Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shinebeautyparlour.com",
    title: "Shine Beauty Parlour - Luxury Beauty Salon",
    description: "Premium beauty services including haircuts, makeup, skincare, and more.",
    siteName: "Shine Beauty Parlour",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists in public/images
        width: 1200,
        height: 630,
        alt: "Shine Beauty Parlour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine Beauty Parlour - Luxury Beauty Salon",
    description: "Premium beauty services including haircuts, makeup, skincare, and more.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
