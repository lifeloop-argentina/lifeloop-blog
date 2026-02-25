import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    image: z.string(),
    imageAlt: z.string().optional(),
    author: z.string().default("Ian Marco de Lifeloop"),
    tags: z.array(z.string()),
    category: z.string(),
    readingTime: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
