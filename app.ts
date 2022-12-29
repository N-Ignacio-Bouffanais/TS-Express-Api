import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRoutes from "./routes";

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())

app.use("/api" , productsRoutes)

export default app;
