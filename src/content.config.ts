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

// One markdown file per GitHub project in src/content/projects/.
// `result` is the headline result, shown only on project cards. Never invent numbers.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      repo: z.url(),
      area: z.string(),
      summary: z.string(),
      result: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      /** A real figure from the project's notebook, in src/assets/projects/. */
      image: image().optional(),
      /** Mark work that isn't finished yet; it shows an "In progress" label. */
      inProgress: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

// One markdown file per academic support service in src/content/services/.
// Each becomes a page at /research-support/<file name>.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    /** Page title for search engines: what students actually type. */
    seoTitle: z.string(),
    description: z.string(),
    short: z.string(),
    icon: z.string(),
    audience: z.string(),
    includes: z.array(z.string()),
    order: z.number().default(100),
  }),
});

export const collections = { research, projects, services };
