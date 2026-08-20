import { defineConfig } from "vite";

// base: "./" makes built asset paths relative, so this works on GitHub Pages
// no matter what the repo (and therefore the pages URL) is named.
export default defineConfig({
  base: "./",
});
