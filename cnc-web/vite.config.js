import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // ✅ base must be TOP-LEVEL (not inside server)
  base: process.env.VITE_BASE_PATH || "/react-vite-deploy/",

  plugins: [react()],

  server: {
    host: true,
    port: 5174,
    allowedHosts: [
      "insessorial-uninterred-mirtha.ngrok-free.dev",
      ".ngrok-free.dev", // allows any subdomain (recommended)
    ],
  },
});
