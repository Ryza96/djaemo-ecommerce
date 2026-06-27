import ProductRow from "./ProductRow";
import { Product } from "@/lib/types/product";

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({
  products,
}: ProductTableProps) {
  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-3 text-left">
            Nama
          </th>

          <th className="border p-3">
            Kategori
          </th>

          <th className="border p-3">
            Harga
          </th>

          <th className="border p-3">
            Stok
          </th>

          <th className="border p-3">
            Status
          </th>

          <th className="border p-3">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
          />
        ))}
      </tbody>
    </table>
  );
}