import express from "express";
import morgan from "morgan";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

// connect to db
import { mongoConnect } from "./src/dbConfig/dbConfig.js";
mongoConnect();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
// api
import productRouter from "./src/routers/productRouter.js";

app.use("/api/v1/product", productRouter);

// listen to app
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on PORT ${PORT}`);
});
