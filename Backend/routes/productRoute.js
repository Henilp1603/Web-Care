import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router=express.Router();

router.post("/",createProduct);
router.get("/:id",getProduct);
router.get("/",getAllProducts);
router.put("/:id",authMiddleware,isAdmin,updateProduct);
router.delete("/:id",authMiddleware,isAdmin,deleteProduct)



export default router
