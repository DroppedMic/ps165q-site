import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().default('P.S. 165Q'),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const staff = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/staff' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      initials: z.string().max(3),
      email: z.string().email().optional(),
      bio: z.string().optional(),
      order: z.number().default(99),
      photo: image().optional(),
    }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    color: z.enum(['navy', 'gold', 'coral', 'green', 'plum', 'blue']),
    summary: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    learnMoreUrl: z.string().url().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string().optional(),
    badge: z.enum(['upcoming', 'closed', 'testing', 'none']).default('none'),
    location: z.string().default('P.S. 165Q'),
    description: z.string().optional(),
  }),
});

export const collections = { news, staff, programs, events };
