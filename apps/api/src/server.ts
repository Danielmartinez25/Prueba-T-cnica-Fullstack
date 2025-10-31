import "dotenv/config";
import app from "./app";
import { connectMongo } from "./db/mongo";

const port = Number(process.env.PORT ?? 4000);
const uri = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/empleados_db";

connectMongo(uri).then(() => {
  app.listen(port, () => console.log(`API on http://localhost:${port}`));
});
