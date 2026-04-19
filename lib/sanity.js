import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "my-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// ── GROQ Queries ──

export async function getServices() {
  try {
    return await client.fetch(
      `*[_type == "service"] | order(order asc) {
        _id,
        title,
        slug,
        description,
        price,
        icon,
        order
      }`
    );
  } catch (error) {
    console.error("Failed to fetch services", error);
    return [];
  }
}

export async function getGalleryImages() {
  try {
    return await client.fetch(
      `*[_type == "galleryImage"] | order(order asc) {
        _id,
        title,
        image,
        category,
        order
      }`
    );
  } catch (error) {
    console.error("Failed to fetch gallery images", error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    return await client.fetch(
      `*[_type == "testimonial"] {
        _id,
        name,
        role,
        quote,
        photo
      }`
    );
  } catch (error) {
    console.error("Failed to fetch testimonials", error);
    return [];
  }
}

export async function getTeamMembers() {
  try {
    return await client.fetch(
      `*[_type == "teamMember"] | order(order asc) {
        _id,
        name,
        role,
        photo,
        socialLinks
      }`
    );
  } catch (error) {
    console.error("Failed to fetch team members", error);
    return [];
  }
}
