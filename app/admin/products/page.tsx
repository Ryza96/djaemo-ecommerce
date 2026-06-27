async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const result = await response.json();

  return result.data;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Nama</th>
            <th className="border p-3">Kategori</th>
            <th className="border p-3">Harga</th>
            <th className="border p-3">Stok</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
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
          ))}
        </tbody>
      </table>
    </main>
  );
}