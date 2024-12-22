import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'thotbotglitched',
    description: 'my thoughts',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')),
    customData: `<language>en-us</language>`,
  });
}