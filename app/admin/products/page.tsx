import ProductsClient from "@/components/admin/products/ProductsClient";
import { Product } from "@/lib/types/product";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }

  const result = await response.json();

  return result.data;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <ProductsClient products={products} />
    </main>
  );
}