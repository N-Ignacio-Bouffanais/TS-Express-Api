import { Router } from "express";

const router = Router();

router.get("/products", (req,res) => {
    res.send("Getting all products")
})
router.post("/products", (req, res) => {
  res.send("Creating a product");
});
router.get("/products/:id", (req, res) => {
  res.send("Getting a product");
});
router.delete("/products/:id", (req, res) => {
  res.send("Deleting a product");
});
router.put("/products/:id", (req, res) => {
  res.send("Updating a product");
});

export default router