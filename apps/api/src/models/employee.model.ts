import { Schema, model } from "mongoose";

const EmployeeSchema = new Schema(
  {
    fullName: { type: String, required: true, index: true },
    age: { type: Number, required: true },
    area: { type: String, required: true, index: true },
    seniority: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export const EmployeeModel = model("Employee", EmployeeSchema, "employees");
