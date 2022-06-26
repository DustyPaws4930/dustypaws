import express from "express";
<<<<<<< Updated upstream
import { Register } from "../controllers/event/Register.js";
import { CheckFormFields } from "../middlewares/EventValidation.js";
=======
<<<<<<< Updated upstream
import { Register } from "../controllers/event/Register";
=======
import { GetEvents } from "../controllers/event/Fetch.js";
import { Register } from "../controllers/event/Register.js";
import { CheckFormFields } from "../middlewares/EventValidation.js";
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import ImageUpload from "../middlewares/ImageUpload.js";

const router = express.Router();

<<<<<<< Updated upstream
router.post("/register", CheckFormFields, ImageUpload, Register);
=======
<<<<<<< Updated upstream
router.post("/register", ImageUpload, Register);
>>>>>>> Stashed changes

=======
router.post("/register", CheckFormFields, ImageUpload, Register);
router.get("/all", GetEvents);
>>>>>>> Stashed changes
export default router;
