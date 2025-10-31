import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployeeById } from "../api/employees";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import DataDetail from "../components/DataDetail";
import { ArrowReturn } from "../components/ArrowReturn";

export default function EmployeeDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => fetchEmployeeById(id!),
  });
  if (isLoading)
    return Spinner({ message: "Cargando información del empleado..." });

  if (error)
    return ErrorMessage({
      message: "No se pudo cargar la información del empleado.",
    });
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ArrowReturn />

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm rounded-2xl p-8 transition-all">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500 text-white text-3xl font-bold shadow-md">
            {(() => {
              const [name, lastName] = data.fullName.split(" ");
              const initials = `${name?.[0] ?? ""}${lastName?.[0] ?? ""}`;
              return initials.toUpperCase();
            })()}
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {data.fullName}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">{data.area}</p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
          <DataDetail data={data.age} description="Edad" />
          <DataDetail data={data.seniority} description="Antigüedad" />
          <DataDetail data={data.phone} description="Teléfono" />
          <DataDetail data={data.area} description="Área" />
        </dl>
      </div>
    </div>
  );
}
