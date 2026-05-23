import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://lumynitystudios.net",
  build: {
    format: 'preserve',
  },
  image: {
    responsiveStyles: true,
  }
});
