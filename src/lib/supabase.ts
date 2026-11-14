import { createClient } from "@supabase/supabase-js";

const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  || "https://glssdqflvfkmjcmtqxib.supabase.co";
const key = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)
  || "sb_publishable_SYaAb9QrstSxkTBFUl4FJA_0REhxzLj";

// ESTORA production Supabase project. Only the publishable key belongs in the browser;
// all privileged account operations remain in authenticated Edge Functions.
export const supabase = createClient(url, key, {
  db: { schema: "rentflow" },
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
