import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lifeloop.com.ar',
  base: '/blog',
  integrations: [tailwind(), sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark' } },
  build: { format: 'directory' },
});
