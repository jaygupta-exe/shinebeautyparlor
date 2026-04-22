import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

/**
 * Sanity client configuration
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "my-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

/**
 * Utility function to generate image URLs from Sanity image sources
 * @param {object} source - The Sanity image source object
 */
export function urlFor(source) {
  return builder.image(source);
}

// ── GROQ Queries ──

/**
 * Fetches all services ordered by their custom order field
 */
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

/**
 * Fetches all gallery images ordered by their custom order field
 */
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

/**
 * Fetches all client testimonials
 */
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

/**
 * Fetches all team members ordered by their custom order field
 */
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
