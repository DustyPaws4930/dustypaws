import express from "express";
import { GetUser, Login, SignUp } from "../controllers/user.js";
import { LoginValidation, SignUpValidation } from "../middlewares/UserValidation.js";

const router = express.Router();

router.post("/signup", SignUpValidation, SignUp);
router.post("/login", LoginValidation, Login);
router.get("/:id", GetUser);

export default router;