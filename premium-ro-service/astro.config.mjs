import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://premium-ro-service.vercel.app', // Apna site URL yahan daalein
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
  build: {
    inlineStylesheets: 'always' // ⭐ CSS inline karne ke liye
  }
});
