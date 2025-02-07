import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://thotbotglitched.com',
  prefetch: {
    prefetchAll: true
  },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ],
  },
});
