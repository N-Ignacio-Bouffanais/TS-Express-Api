import { Router } from "express";
import Electronics from "../models/electronics";

const router = Router();

router.get("/", () => {
    console.log("Getting all electronics")
})

export default router;