"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-red-600">
        Terjadi Kesalahan
      </h2>

      <p className="mt-2">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Coba Lagi
      </button>
    </div>
  );
}