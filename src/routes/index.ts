import { Router } from "express";
import register from "../controllers/user/auth/register";
import login from '../controllers/user/auth/login';
import update from '../controllers/user/update/update';

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.put("/update/:type", update);

export default router;