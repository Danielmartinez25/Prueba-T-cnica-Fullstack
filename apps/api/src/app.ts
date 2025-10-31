import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import employeesRouter from "./routes/employees.routes";

const app = express();
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/employees", employeesRouter);
export default app;
