import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters."),

  slug: z.string().min(3, "Slug must be at least 3 characters."),

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

  price: z.coerce
    .number()
    .min(0, "Price must be greater than or equal to 0."),

  weight: z.coerce
    .number()
    .nullable()
    .optional(),

  stock: z.coerce
    .number()
    .min(0, "Stock must be greater than or equal to 0.")
    .default(0),

  thumbnail_url: z.string().nullable().optional(),

  is_preorder: z.boolean().default(false),

  is_active: z.boolean().default(true),

  display_order: z.coerce
    .number()
    .default(0),
});

export type CreateProductInput =
  z.infer<typeof createProductSchema>;