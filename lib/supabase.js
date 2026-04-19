import { createClient } from "@supabase/supabase-js";

// Clean the environment variables to remove any accidental whitespace or quotes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/['"]/g, "");
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim().replace(/['"]/g, "");

// Initialize only if both values are present
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.warn("Supabase URL or Anon Key is missing. Check your environment variables.");
}
