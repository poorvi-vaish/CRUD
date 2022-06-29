import { Router } from "express";
import addNew from "../controllers/category/addNew";
import updateCategory from "../controllers/category/update";
import deleteCategory from "../controllers/category/delete";
import getAll from "../controllers/category/getAll";

const route = Router();
route.post("/addNew", addNew);
route.put("/update/:categoryId", updateCategory);
route.delete("/delete/:categoryId", deleteCategory);
route.get("/getAll", getAll);

export default route;
