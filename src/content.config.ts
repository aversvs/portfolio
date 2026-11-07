import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    year: z.union([z.number(), z.string()]),
    demo: z.string().optional(),
    repo: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
