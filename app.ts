import express from "express";
import morgan from "morgan";
import cors from "cors";
import clothesRoutes from "./routes/clothes.routes";
import electronicsRoutes from "./routes/electronics.routes";
import authRoutes from "./routes/auth.routes";
import passport from "passport"
import JWTStrategy from "./middlewares/passport";
import { initialize } from "passport";

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(initialize());

passport.use(JWTStrategy);

//routes
app.use("/api/clothes" , clothesRoutes)
app.use("/api/electronics", electronicsRoutes)
app.use("/api/auth", authRoutes)

export default app;
