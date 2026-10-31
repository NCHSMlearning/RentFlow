import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This is a project site, not an account-root site.
  base: "/RentFlow/",
});
