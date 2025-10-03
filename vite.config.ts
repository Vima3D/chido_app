import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ← IMPORTAR EL PLUGIN

export default defineConfig({
  base: "/chido_app/", // importante para GitHub Pages
  plugins: [react()], // ahora TypeScript lo reconoce
});
