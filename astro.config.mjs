import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nimio.org",
  integrations: [tailwind()],
  output: "static"
});
