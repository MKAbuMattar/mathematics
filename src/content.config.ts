import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const formulas = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/formulas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    topic: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { formulas };
