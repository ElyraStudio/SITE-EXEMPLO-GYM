import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(), // Deixa o Tailwind v4 ativo de primeira
    tsconfigPaths()
  ],
  build: {
    outDir: "dist", // Força a criação da pasta dist para o Vercel encontrar
  }
});