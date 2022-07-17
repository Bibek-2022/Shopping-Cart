import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8000;

// connect to db
import { mongoConnect } from "./src/dbConfig/dbConfig.js";
mongoConnect();

// middlewares
app.use(express.json());

// api
import productRouter from "./src/routers/productRouter.js";
app.use("/api/v1/product", productRouter);

// listen to app
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on PORT ${PORT}`);
});
