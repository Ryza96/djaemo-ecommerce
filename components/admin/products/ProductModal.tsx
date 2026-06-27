type ProductModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function ProductModal({
  title,
  children,
  onClose,
}: ProductModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 hover:text-black"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}