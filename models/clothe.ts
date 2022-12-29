import mongoose, { Schema, model } from "mongoose";

mongoose.set("strictQuery", true);

const ClotheSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
  }
);

export default model("Clothe", ClotheSchema);
