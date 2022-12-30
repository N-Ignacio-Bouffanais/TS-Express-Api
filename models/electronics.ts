import mongoose, { Schema, model } from "mongoose";

mongoose.set("strictQuery", true);

const ElectroncisSchema = new Schema({
  model_name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
},
  {
    versionKey: false,
  });

export default model("Electronics", ElectroncisSchema);