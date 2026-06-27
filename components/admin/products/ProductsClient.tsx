"use client";

import { useState } from "react";

import ProductTable from "./ProductTable";
import ProductModal from "./ProductModal";
import ProductForm from "./ProductForm";

import { Product } from "@/lib/types/product";

type ProductsClientProps = {
  products: Product[];
};

export default function ProductsClient({
  products,
}: ProductsClientProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-black px-5 py-2 font-medium text-white transition hover:bg-gray-800"
        >
          + Add Product
        </button>
      </div>

      <ProductTable products={products} />

      {open && (
        <ProductModal
          title="Add Product"
          onClose={() => setOpen(false)}
        >
          <ProductForm
            onCancel={() => setOpen(false)}
          />
        </ProductModal>
      )}
    </>
  );
}