import { Link } from "react-router-dom";

export function ArrowReturn() {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
    >
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Volver
    </Link>
  );
}
