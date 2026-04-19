"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const { error } = await supabase
        .from("messages")
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-dancing text-brand-gold text-3xl mb-2">
              Get In Touch
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark">
              Have Any Query? Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-brand-cream p-8 rounded-3xl shadow-sm border border-brand-gold/10">
                <h3 className="font-playfair text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-brand-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Our Location</p>
                      <p className="text-gray-500 text-sm mt-1">
                        123 Shine Street, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-brand-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Call Us</p>
                      <p className="text-gray-500 text-sm mt-1">
                        +1 234 567 8900
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-brand-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Email Us</p>
                      <p className="text-gray-500 text-sm mt-1">
                        contact@shinebeauty.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Details */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-brand-gold/5 border border-gray-100">
                <h4 className="text-center text-gray-500 mb-8 max-w-lg mx-auto">
                  Fill out the form below and our team will get back to you as soon as possible.
                </h4>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {status === "success" && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium border border-green-200">
                      ✨ Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium border border-red-200">
                      ❌ Oops! Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all resize-none"
                      placeholder="Leave your message here..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gold hover:bg-brand-dark text-white font-medium py-4 rounded-xl transition-colors duration-300 shadow-md shadow-brand-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
