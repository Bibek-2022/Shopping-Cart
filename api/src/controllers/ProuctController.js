import { getProduct } from "../modals/products/ProductModal.js";

export const getProductController = async (req, res, next) => {
  try {
    const result = await getProduct();
    result
      ? res.json({
          status: "success",
          message: "Here are the product",
          result,
        })
      : res.json({
          status: "error",
          message: "Cant get the product",
          result,
        });
  } catch (error) {
    next(error);
  }
};
