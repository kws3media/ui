import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@kws3": path.resolve(__dirname, "./packages/@kws3"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    svelte({
      preprocess: [sveltePreprocess({ typescript: true })],
    }),
  ],
  optimizeDeps: {
    include: ["svelte", path.resolve(__dirname, "./packages/@kws3/ui")],
  },
});
