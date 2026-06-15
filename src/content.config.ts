import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cuento = defineCollection({
	loader: glob({ base: './src/content/cuento', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			pubIn: z.string(),
			pubLink: z.string(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const poema = defineCollection({
	loader: glob({ base: './src/content/poema', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			pubIn: z.string(),
			pubLink: z.string(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});
export const collections = { cuento, poema };
