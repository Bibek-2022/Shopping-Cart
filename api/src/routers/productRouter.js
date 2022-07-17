import express from "express";
import { getProductController } from "../controllers/ProuctController.js";
import {
  productValidation,
  updateProductValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../modals/products/ProductModal.js";

const router = express.Router();

// get the product
router.get("/", getProductController);

// post the product
router.post("/", productValidation, async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createProduct(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Here are the product",
          result,
        })
      : res.json({
          status: "error",
          message: "Product could not be created",
          result,
        });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = await deleteProduct(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "Product Deleted",
          result,
        })
      : res.json({
          status: "error",
          message: "Product could not be deleted",
          result,
        });
  } catch (error) {
    next(error);
  }
});

router.put("/", updateProductValidation, async (req, res, next) => {
  try {
    const result = await updateProduct(req.body);
    console.log(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Product Updated",
          result,
        })
      : res.json({
          status: "error",
          message: "Product could not be upated",
          result,
        });
  } catch (error) {
    next(error);
  }
});

export default router;
