// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        casino: resolve(__dirname, "casino/index.html"),
        sport: resolve(__dirname, "sport/index.html"),
      },
    },
  },
});
