import { Product } from "@/lib/types/product";

type ProductRowProps = {
  product: Product;
};

export default function ProductRow({
  product,
}: ProductRowProps) {
  return (
    <tr>
      <td className="border p-3">
        {product.name}
      </td>

      <td className="border p-3 text-center">
        {product.category}
      </td>

      <td className="border p-3 text-right">
        Rp {product.price.toLocaleString("id-ID")}
      </td>

      <td className="border p-3 text-center">
        {product.stock}
      </td>

      <td className="border p-3 text-center">
        {product.is_active ? "Aktif" : "Nonaktif"}
      </td>

      <td className="border p-3">
        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            Edit
          </button>

          <button
            type="button"
            className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}