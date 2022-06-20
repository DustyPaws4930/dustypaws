import express from "express";
import { Register } from "../controllers/event/Register.js";
import { CheckFormFields } from "../middlewares/EventValidation.js";
import ImageUpload from "../middlewares/ImageUpload.js";

const router = express.Router();

router.post("/register", CheckFormFields, ImageUpload, Register);

export default router;
