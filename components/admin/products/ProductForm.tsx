"use client";

import { useState } from "react";

type ProductFormProps = {
  onCancel: () => void;
};

export default function ProductForm({
  onCancel,
}: ProductFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("premium");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          slug: name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"),

          description: "",

          category,

          type:
            category === "bundle"
              ? "bundle"
              : "single",

          price,

          weight: null,

          stock,

          thumbnail_url: null,

          is_preorder: category === "pre_order",

          is_active: true,

          display_order: 999,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ?? "Failed to create product."
        );
      }

      alert("✅ Product berhasil dibuat.");

      console.log(result);

      setName("");
      setCategory("premium");
      setPrice(0);
      setStock(0);
    } catch (error) {
      console.error(error);

      alert("❌ Gagal membuat product.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">
          Product Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3"
        >
          <option value="premium">Premium</option>
          <option value="pre_order">Pre Order</option>
          <option value="bundle">Bundle</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Price
        </label>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full rounded-lg border border-gray-300 p-3"
          min={0}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Stock
        </label>

        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="w-full rounded-lg border border-gray-300 p-3"
          min={0}
          required
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </form>
  );
}