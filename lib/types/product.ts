export type ProductCategory =
  | "premium"
  | "pre_order"
  | "bundle";

export type ProductType =
  | "single"
  | "bundle";

export interface Product {
  id: string;

  name: string;

  slug: string;

  description: string | null;

  category: ProductCategory;

  type: ProductType;

  price: number;

  weight: number | null;

  stock: number;

  thumbnail_url: string | null;

  is_preorder: boolean;

  is_active: boolean;

  display_order: number;

  created_at: string;

  updated_at: string;
}

export interface CreateProductDTO {
  name: string;

  slug: string;

  description?: string;

  category: ProductCategory;

  type: ProductType;

  price: number;

  weight?: number;

  stock?: number;

  thumbnail_url?: string;

  is_preorder?: boolean;

  is_active?: boolean;

  display_order?: number;
}

export interface UpdateProductDTO
  extends Partial<CreateProductDTO> {}