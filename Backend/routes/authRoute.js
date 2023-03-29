import express from "express"
import {deleteUser, getAllUsers, getUser, handleRefreshToken, logedinUser, registerUser, updateUser} from "../controllers/userCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router=express.Router();

router.post("/register",registerUser)
router.post("/login",logedinUser)


router.get("/users",getAllUsers)
router.get("/refresh",handleRefreshToken)
router.get("/find/:id",authMiddleware,isAdmin,getUser)
router.delete("/delete/:id",deleteUser)
router.put("/update/:id",updateUser)


export default router