import Clothe from "../models/clothe";

export const getClothes = async (req: any, res: any) => {
  const clothes = await Clothe.find();
  res.send(clothes);
};
export const createClothe = async (req:any, res:any ) => {
    const { name, description, size, price } = req.body;
    const clothe = new Clothe({ name, description, size, price });
    await clothe.save();
    res.json(clothe);
};

export const getClothe = async (req:any, res:any) => {
    try {
      const clothe = await Clothe.findById(req.params.id);

      if (!clothe) return res.status(400).json({ message: "Task not found" });

      res.send(clothe);
    } catch (error) {
      return res.status(500).send(error);
    }
};
export const deleteClothe = async (req:any, res:any) => {
    try {
      const clothe = await Clothe.findByIdAndDelete(req.params.id);

      if (!clothe) return res.status(400).json({ message: "Task not found" });

      res.json(clothe);
    } catch (error) {
      return res.status(500).send(error);
    }
};
export const updateClothe = async (req:any, res:any) => {
    const updatedClothe = await Clothe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedClothe);
};

