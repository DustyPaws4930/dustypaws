import express from "express";
import {
  GetAllNGOUsers,
  GetUser,
  Login,
  SignUp,
  TrackWhishlist,
  Update,
} from "../controllers/user.js";
import {
  LoginValidation,
  SignUpValidation,
} from "../middlewares/UserValidation.js";

const router = express.Router();

router.post("/signup", SignUpValidation, SignUp);
router.post("/login", LoginValidation, Login);
router.get("/:id", GetUser);
router.patch("/update/:id", Update);
router.patch("/whishlist/:id", TrackWhishlist);
router.get("/getAllUsers", GetAllNGOUsers);

export default router;
