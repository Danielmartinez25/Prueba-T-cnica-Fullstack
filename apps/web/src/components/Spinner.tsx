export default function Spinner({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300 font-medium">
        {message}...
      </p>
    </div>
  );
}
