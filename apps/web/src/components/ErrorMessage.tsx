export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4 shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-red-600">Ocurrió un error</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-1">
        {message} <br />
        <span className="text-sm">
          Verificá tu conexión o intentá recargar.
        </span>
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
