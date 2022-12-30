import express from "express";
import morgan from "morgan";
import cors from "cors";
import clothesRoutes from "./routes/clothes.routes";
import electronicsRoutes from "./routes/electronics.routes";

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())

app.use("/api/clothes" , clothesRoutes)
app.use("/api/electronics", electronicsRoutes)

export default app;
