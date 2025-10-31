export type Group = {
  area: string;
  total: number;
  employees: Array<{
    id: string;
    fullName: string;
    age: number;
    area: string;
    seniority: string;
    phone: string;
  }>;
};

export async function fetchEmployees(): Promise<Group[]> {
  const base = import.meta.env.VITE_API_URL;
  const res = await fetch(`${base}/api/employees`);
  if (!res.ok) throw new Error("Error fetching employees");
  return res.json();
}

export async function fetchEmployeeById(id: string) {
  const base = import.meta.env.VITE_API_URL;
  const res = await fetch(`${base}/api/employees/${id}`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
}
