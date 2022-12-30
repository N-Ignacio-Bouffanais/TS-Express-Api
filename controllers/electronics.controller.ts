import Electronics from "../models/electronics";

export const getElectronics = async (req: any, res: any) => {
  const elect = await Electronics.find()
  res.send(elect)
};
export const createElectronic = async (req: any, res: any) => {
  const { model_name, price, description, brand } = req.body;
  const elect = new Electronics({model_name, price, description , brand });
  await elect.save()
  res.json(elect)
};
export const getElectronic = async (req: any, res: any) => {
    try {
        const elect = await Electronics.findById(req.params.id);

        if(!elect) return res.status(400).json({ message: "Device not found" });

        res.send(elect)
    } catch (error) {
        return res.status(500).send(error);
    }
};
export const deleteElectronic = async (req: any, res: any) => {
    try {
        const elect = await Electronics.findByIdAndDelete(req.params.id)

        if(!elect) return res.status(500).json({ message: "Device not found" });

        res.json(elect)
    } catch (error) {
        return res.status(500).send(error);
    }
};
export const updateElectronic = async (req: any, res: any) => {
    const updatedElect = await Electronics.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedElect);
};
