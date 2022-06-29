import { Router } from "express";
import userRouter from "./user";
import categoryRouter from "./category";
import productRouter from "./product";

const router = Router();
router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);

export default router;
