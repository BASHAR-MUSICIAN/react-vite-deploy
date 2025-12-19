import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  
    port: 5174,
    allowedHosts: [
      "insessorial-uninterred-mirtha.ngrok-free.dev", // your ngrok domain
      "*.ngrok-free.dev"
      base: process.env.VITE_BASE_PATH || "/react-vite-deploy",
    ]
  }
});
