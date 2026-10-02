import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per research item in src/content/research/.
// Keep highlights short and plain: no abstracts, no result numbers.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    highlight: z.string(),
    status: z.enum(['preprint', 'under-review', 'in-progress']),
    area: z.string(),
    year: z.number(),
    /** Where the work lives or comes from, e.g. "arXiv" or "MSc research, University of Ibadan". */
    venue: z.string().optional(),
    coauthors: z.array(z.string()).default([]),
    link: z.url().optional(),
    /** Lower numbers appear first. */
    order: z.number().default(100),
  }),
});

export const collections = { research };
