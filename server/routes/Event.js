import express from "express";
import { Register } from "../controllers/event/Register.js";
import { CheckFormFields } from "../middlewares/EventValidation.js";
import { Register } from "../controllers/event/Register";
import { GetEvents } from "../controllers/event/Fetch.js";
import { Register } from "../controllers/event/Register.js";
import { CheckFormFields } from "../middlewares/EventValidation.js";
import ImageUpload from "../middlewares/ImageUpload.js";

const router = express.Router();

router.post("/register", CheckFormFields, ImageUpload, Register);
router.post("/register", ImageUpload, Register);

router.get("/all", GetEvents);
export default router;
