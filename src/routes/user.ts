import { Router } from "express"; 
import register from "../controllers/user/auth/register"; 
import login from '../controllers/user/auth/login';
import update from '../controllers/user/update/update';
import reset from '../controllers/user/update/reset';

const route = Router();
route.post("/register", register);
route.post("/login", login);
route.put("/update/:type", update);
route.post("/reset/:userId", reset);

export default route;
