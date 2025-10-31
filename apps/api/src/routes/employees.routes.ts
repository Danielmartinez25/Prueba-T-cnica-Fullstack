import { Router } from "express";
import * as ctrl from "../controllers/employees.controller";
const r = Router();

r.get("/", ctrl.list);
r.get("/:id", ctrl.byId);

export default r;
