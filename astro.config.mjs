import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://aleczlopez.github.io",
  integrations: [tailwind(), mdx()],
});
