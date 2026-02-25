import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lifeloop.com.ar',
  base: '/blog',
  integrations: [tailwind(), sitemap({
    filter: () => true,
    serialize: (item) => {
      // Fix double /blog/blog/ that Astro generates with base
      item.url = item.url.replace('/blog/blog/', '/blog/');
      return item;
    },
  })],
  markdown: { shikiConfig: { theme: 'github-dark' } },
  build: { format: 'directory' },
});
