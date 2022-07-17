import ProductSchema from "./ProductSchema.js";

// get all product
export const getProduct = () => {
  return ProductSchema.find();
};

// create product
export const createProduct = (obj) => {
  return ProductSchema(obj).save();
};

// delete product
export const deleteProduct = (_id) => {
  return ProductSchema.findByIdAndDelete(_id);
};

//update product
export const updateProduct = ({ _id, ...obj }) => {
  return ProductSchema.findByIdAndUpdate(_id, obj, { new: true });
};
