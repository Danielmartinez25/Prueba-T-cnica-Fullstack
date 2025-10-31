import "dotenv/config";
import { connectMongo } from "./mongo";
import { EmployeeModel } from "../models/employee.model";

async function main() {
  const uri = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/empleados_db";
  await connectMongo(uri);

  await EmployeeModel.deleteMany({});
  await EmployeeModel.insertMany([
    {
      fullName: "Ana Gómez",
      age: 29,
      area: "IT",
      seniority: "SSr",
      phone: "11-5555-1111",
    },
    {
      fullName: "Luis Pérez",
      age: 41,
      area: "IT",
      seniority: "Sr",
      phone: "11-5555-2222",
    },
    {
      fullName: "Valentina Torres",
      age: 26,
      area: "IT",
      seniority: "Jr",
      phone: "11-5555-3334",
    },
    {
      fullName: "María Ruiz",
      age: 33,
      area: "RRHH",
      seniority: "Jr",
      phone: "11-5555-3333",
    },
    {
      fullName: "Carlos Fernández",
      age: 38,
      area: "RRHH",
      seniority: "Sr",
      phone: "11-5555-5555",
    },
    {
      fullName: "Lucía Romero",
      age: 31,
      area: "RRHH",
      seniority: "SSr",
      phone: "11-5555-6666",
    },
    {
      fullName: "Sofía Díaz",
      age: 25,
      area: "Ventas",
      seniority: "Jr",
      phone: "11-5555-4444",
    },
    {
      fullName: "Martín López",
      age: 34,
      area: "Ventas",
      seniority: "Sr",
      phone: "11-5555-7777",
    },
    {
      fullName: "Brenda Castillo",
      age: 28,
      area: "Finanzas",
      seniority: "SSr",
      phone: "11-5555-8888",
    },
    {
      fullName: "Federico Acosta",
      age: 42,
      area: "Finanzas",
      seniority: "Sr",
      phone: "11-5555-9999",
    },
    {
      fullName: "Camila Navarro",
      age: 27,
      area: "Logística",
      seniority: "Jr",
      phone: "11-5555-0001",
    },
    {
      fullName: "Tomás Rivas",
      age: 36,
      area: "Marketing",
      seniority: "SSr",
      phone: "11-5555-0002",
    },
  ]);

  console.log("Seed OK");
  process.exit(0);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
