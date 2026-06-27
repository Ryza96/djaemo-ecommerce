import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3),

  slug: z.string().min(3),

  description: z.string().optional(),

  category: z.enum([
    "premium",
    "pre_order",
    "bundle",
  ]),

  type: z.enum([
    "single",
    "bundle",
  ]),

  price: z.number().min(0),

  weight: z.number().nullable().optional(),

  stock: z.number().min(0).default(0),

  thumbnail_url: z.string().nullable().optional(),

  is_preorder: z.boolean().default(false),

  is_active: z.boolean().default(true),

  display_order: z.number().default(0),
});

export type CreateProductInput =
  z.infer<typeof createProductSchema>;