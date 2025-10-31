import { useQuery } from "@tanstack/react-query";
import { fetchEmployees, type Group } from "../api/employees";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { User } from "lucide-react";

export default function EmployeesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });
  if (isLoading) return Spinner({ message: "Cargando empleados..." });

  if (error)
    return ErrorMessage({ message: "No se pudieron cargar los empleados." });
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Empleados por área
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Total de áreas: {data?.length ?? 0}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data!.map((g: Group) => (
          <section
            key={g.area}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="px-4 py-4 sm:px-5 sm:py-5 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {g.area}
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 px-2.5 py-1 text-xs font-medium">
                  <User className="h-5 w-5 text-blue-600" />
                  {g.total} {g.total === 1 ? "empleado" : "empleados"}
                </span>
              </div>
            </div>

            <ul className="divide-y divide-gray-100 dark:divide-gray-800">
              {g.employees.map((e) => (
                <li key={e.id} className="group/item">
                  <Link
                    to={`/employee/${e.id}`}
                    className="flex items-center gap-3 px-4 py-3 sm:px-5 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500 text-white text-sm font-semibold">
                      {e.fullName
                        .split(" ")
                        .slice(0, 2)
                        .map((s) => s[0])
                        .join("")
                        .toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate font-medium text-gray-900 dark:text-gray-100">
                          {e.fullName}
                        </p>
                        <span className="hidden sm:inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[11px] font-medium text-gray-700 dark:text-gray-300">
                          {e.seniority}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                        Edad {e.age} • {e.phone}
                      </p>
                    </div>

                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-gray-300 group-hover/item:text-blue-500 transition-colors"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.29 6.71a1 1 0 0 1 1.42 0l4 4a1 1 0 0 1 0 1.42l-4 4a1 1 0 1 1-1.42-1.42L12.59 12 9.29 8.12a1 1 0 0 1 0-1.41Z" />
                    </svg>
                  </Link>
                </li>
              ))}
              {g.employees.length === 0 && (
                <li className="px-4 py-6 sm:px-5 text-sm text-gray-500 dark:text-gray-400">
                  No hay empleados en esta área.
                </li>
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
