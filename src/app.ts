import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import database from "./config/database.config";
import { loadEndpoints } from "./controllers/endpoints";

dotenv.config();
database.sync().then(() => {
  console.log("Database synced");
});

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("version", process.env.VERSION || "v1");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

loadEndpoints(app);

export default app;
