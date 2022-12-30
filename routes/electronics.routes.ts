import { Router } from "express";
import { createElectronic, deleteElectronic, getElectronic, getElectronics, updateElectronic } from "../controllers/electronics.controller";

const router = Router();

router.get("/", getElectronics);
router.post("/", createElectronic);
router.get("/:id" , getElectronic);
router.put("/:id", updateElectronic);
router.delete("/:id", deleteElectronic);

export default router;