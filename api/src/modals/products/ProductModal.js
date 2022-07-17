import ProductSchema from "./ProductSchema.js";

export const createProduct = (obj) => {
  return ProductSchema(obj).save;
};
