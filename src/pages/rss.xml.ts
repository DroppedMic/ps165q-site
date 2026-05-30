import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('news', ({ data }) => !data.draft))
    .sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: 'P.S. 165Q · Shooting Stars News',
    description:
      'News, calendar updates, and highlights from P.S. 165Q Edith K. Bergtraum School in Flushing, Queens.',
    site: context.site ?? 'https://droppedmic.github.io/ps165q-site/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      author: post.data.author,
      categories: post.data.tags,
      link: `/news/${post.id.replace(/\.md$/, '')}/`,
    })),
    customData: '<language>en-US</language>',
    stylesheet: false,
  });
}
