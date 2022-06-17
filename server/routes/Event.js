import express from "express";
import { Register } from "../controllers/event/Register";
import ImageUpload from "../middlewares/ImageUpload.js";

const router = express.Router();

router.post("/register", ImageUpload, Register);

export default router;
