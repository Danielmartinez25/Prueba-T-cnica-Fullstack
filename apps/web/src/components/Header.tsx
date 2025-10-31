import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-blue-600">
          IThreex
        </h1>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium hover:text-blue-600 transition-colors ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Inicio
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
