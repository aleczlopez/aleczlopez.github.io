import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    category: z.string(),
    duration: z.string().optional(),
    tech: z.array(z.string()),
    problem: z.string(),
    approach: z.string().optional(),
    result: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { "case-studies": caseStudies, pages };
