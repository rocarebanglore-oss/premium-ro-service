import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // ⭐ Sahi import

// https://astro.build/config
export default defineConfig({
  site: 'https://roservicesupport.co.in',
  integrations: [sitemap()],
  output: 'server', // ⭐ API route aur SSR ke liye zaroori
  adapter: vercel(), // ⭐ Vercel adapter
  devToolbar: {
    enabled: false
  },
  build: {
    inlineStylesheets: 'auto'
  }
});