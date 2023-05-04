import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@kws3": path.resolve(__dirname, "./packages/@kws3"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [svelte()],
});
