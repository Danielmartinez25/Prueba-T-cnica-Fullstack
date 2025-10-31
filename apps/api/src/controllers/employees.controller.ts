import { Request, Response } from "express";
import { employeesService } from "../services/employees.service";

export const list = async (_: Request, res: Response) => {
  const data = await employeesService.listGrouped();
  res.json(data);
};

export const byId = async (req: Request, res: Response) => {
  const emp = await employeesService.byId(req.params.id);
  if (!emp) return res.status(404).json({ message: "Not found" });
  res.json(emp);
};
