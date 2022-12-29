import mongoose, { Schema, model } from "mongoose";

mongoose.set("strictQuery", true);

const ClotheSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Img_Url: {
    type: String,
    required: true,
  },
});

export default model("Clothe", ClotheSchema);