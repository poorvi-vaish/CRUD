import { Router } from "express"; 
import addNew from "../controllers/product/addNew";
import deleteProduct from "../controllers/product/delete";
import updateProduct from "../controllers/product/update"; 
import getAll from "../controllers/product/getAll";

const route = Router();
route.post("/addNew", addNew);
route.delete("/delete/:productId", deleteProduct);
route.put("/update/:productId", updateProduct);
route.get("/getAll", getAll);

export default route;
