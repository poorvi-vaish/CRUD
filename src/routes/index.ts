import { Router } from "express";
import register from "../controllers/user/auth/register";
import login from '../controllers/user/auth/login';
import update from '../controllers/user/update/update';
import reset from '../controllers/user/update/reset';
import addNew from "../controllers/product/addNew";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.put("/update/:type", update);
router.post("/reset/:userId", reset);
router.post("/addNew", addNew);

export default router;