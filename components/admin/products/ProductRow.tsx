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
    </tr>
  );
}