import express from "express";
import { createProduct } from "../modals/products/ProductModal.js";

const router = express.Router();

// get the product
router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "Here are the product",
    });
  } catch (error) {
    next(error);
  }
});

// post the product
router.post("/", async (req, res, next) => {
  try {
    const result = createProduct(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "Here are the product",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
