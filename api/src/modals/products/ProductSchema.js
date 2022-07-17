import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    type: {
      type: String,
      required: true,
      maxlength: 50,
    },
    cost: {
      type: Number,
      required: true,
      maxlength: 50,
    },
    description: {
      type: String,
      default: "",
      maxlength: 500,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
