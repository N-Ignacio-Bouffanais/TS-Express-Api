import { Router } from "express";
import { getClothes, createClothe, getClothe, deleteClothe, updateClothe } from "../controllers/clothes.controller";

const router = Router();

router.get("/", getClothes);
router.post("/", createClothe);
router.get("/:id", getClothe);
router.delete("/:id", deleteClothe);
router.put("/:id", updateClothe);

export default router;
