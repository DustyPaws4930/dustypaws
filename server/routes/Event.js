import express from "express";
import { Register } from "../controllers/event/Register.js";
import { CheckFormFields } from "../middlewares/EventValidation.js";
import { GetEvents } from "../controllers/event/Fetch.js";

const router = express.Router();

router.post("/register", CheckFormFields, Register);
router.get("/fetchAll", GetEvents);

export default router;
