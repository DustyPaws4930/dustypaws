import express from "express";
import { Register } from "../controllers/Complaint/Register.js";
import ImageUpload from "../middlewares/ImageUpload.js";

const router = express.Router();

// router.post("/signup", );

//All complaint routes
router.post("/register", ImageUpload, Register);

export default router;
