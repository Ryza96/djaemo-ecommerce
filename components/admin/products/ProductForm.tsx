type ProductFormProps = {
  onCancel: () => void;
};

export default function ProductForm({
  onCancel,
}: ProductFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">
          Product Name
        </label>

        <input
          type="text"
          placeholder="D'Jaemo Jamur Krispi Balado"
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Category
        </label>

        <select className="w-full rounded-lg border border-gray-300 p-3">
          <option>Premium</option>
          <option>Pre Order</option>
          <option>Bundle</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Price
        </label>

        <input
          type="number"
          placeholder="14499"
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Stock
        </label>

        <input
          type="number"
          placeholder="0"
          className="w-full rounded-lg border border-gray-300 p-3"
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
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}