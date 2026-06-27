import { createSupabaseServer } from "@/lib/supabase/server";
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from "@/lib/types/product";

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    const supabase = createSupabaseServer();

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) throw error;

    return data as Product[];
  }

  async findById(id: string): Promise<Product | null> {
    const supabase = createSupabaseServer();

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return null;

    return data as Product;
  }

  async create(payload: CreateProductDTO): Promise<Product> {
    const supabase = createSupabaseServer();

    const { data, error } = await supabase
      .from("products")
      .insert(payload)
      .select()
      .single();

    if (error) throw error;

    return data as Product;
  }

  async update(
    id: string,
    payload: UpdateProductDTO
  ): Promise<Product> {
    const supabase = createSupabaseServer();

    const { data, error } = await supabase
      .from("products")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data as Product;
  }

  async delete(id: string): Promise<void> {
    const supabase = createSupabaseServer();

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }
}

export const productRepository = new ProductRepository();