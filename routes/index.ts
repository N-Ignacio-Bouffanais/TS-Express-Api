import { Router } from "express";
import Clothe from "../models/clothe";

const router = Router();

router.get("/clothes", async (req,res) => {
  const clothes = await Clothe.find()
  res.send(clothes)
})
router.post("/clothes", async (req, res) => {
  const {name, description, size, price} = req.body
  const clothe = new Clothe({ name, description, size, price });
  await clothe.save()
  res.json(clothe)
});
router.get("/clothes/:id", async (req, res) => {
  try {
    const clothe = await Clothe.findById(req.params.id);
    res.send(clothe);
  } catch (error) {
    console.log(error)
  }
});
router.delete("/clothes/:id", (req, res) => {
  res.send("Deleting a clothe");
});
router.put("/clothes/:id", (req, res) => {
  res.send("Updating a clothe");
});

export default router