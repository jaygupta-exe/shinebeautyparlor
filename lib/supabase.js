import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client configuration and initialization.
 * Clean the environment variables to remove any accidental whitespace or quotes.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/['"]/g, "");
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim().replace(/['"]/g, "");

/**
 * The initialized Supabase client instance.
 * Returns null if environment variables are missing.
 */
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase && process.env.NODE_ENV !== "production") {
  console.warn(
    "⚠️ Supabase URL or Anon Key is missing. Forms and dynamic database features may not work. " +
    "Please check your .env.local file."
  );
}
