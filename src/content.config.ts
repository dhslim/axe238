import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const teachings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teachings' }),
  schema: z.object({
    title: z.string(),
    face: z.enum(['lion', 'ox', 'man', 'eagle']).optional(),
    series: z.string().default('Alpha Ministry'),
    summary: z.string(),
    scripture: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    youtubeId: z.string().optional(),
  }),
});

export const collections = { teachings };
