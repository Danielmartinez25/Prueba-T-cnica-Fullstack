import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage.tsx";
import EmployeeDetail from "./pages/EmployeeDetail.tsx";
import "./index.css";
import Layout from "./components/Layout.tsx";

const qc = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <EmployeesPage /> },
      { path: "employee/:id", element: <EmployeeDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={qc}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
