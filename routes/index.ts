import { Router } from "express";
import Clothe from "../models/clothe";

const router = Router();

router.get("/clothes", async (req, res) => {
  const clothes = await Clothe.find();
  res.send(clothes);
});
router.post("/clothes", async (req, res) => {
  const { name, description, size, price } = req.body;
  const clothe = new Clothe({ name, description, size, price });
  await clothe.save();
  res.json(clothe);
});
router.get("/clothes/:id", async (req, res) => {
  try {
    const clothe = await Clothe.findById(req.params.id);

    if (!clothe) return res.status(400).json({ message: "Task not found" });

    res.send(clothe);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/clothes/:id", async (req, res) => {
  try {
    const clothe = await Clothe.findByIdAndDelete(req.params.id);

    if (!clothe) return res.status(400).json({ message: "Task not found" });

    return res.json(clothe);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.put("/clothes/:id", async (req, res) => {
 const updatedClothe = await Clothe.findByIdAndUpdate(req.params.id, req.body, {new:true})
 res.json(updatedClothe)
});

export default router;
