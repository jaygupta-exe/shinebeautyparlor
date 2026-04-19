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
  icons: {
    icon: "/images/logo.png",
  },
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
