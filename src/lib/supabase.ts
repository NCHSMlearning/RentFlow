import { createClient } from "@supabase/supabase-js";

const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  || "https://prjwtxbmewskkpcfiklo.supabase.co";
const key = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)
  || "sb_publishable_X6WlYdJxuS1nWwy8avgn2w_RpIppGQ4";

// RentFlow uses its own Postgres schema inside the existing Nexora project.
// The publishable key is intended for browser use; RLS remains the security boundary.
export const supabase = createClient(url, key, {
  db: { schema: "rentflow" },
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
