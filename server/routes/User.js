import express from "express";
import { GetNGOUserVisualizationData } from "../controllers/Complaint/Fetch.js";
import { GetReportCount } from "../controllers/datacount/Fetch.js";
import {
  GetAllUsers,
  GetUser,
  Login,
  SignUp,
  TrackWhishlist,
  Update,
} from "../controllers/User.js";
import {
  LoginValidation,
  SignUpValidation,
} from "../middlewares/UserValidation.js";

const router = express.Router();

// All user Post Routes
router.post("/signup", SignUpValidation, SignUp);
router.post("/login", LoginValidation, Login);

// All user Get Routes
router.get("/:id", GetUser);
router.get("/getAllUsers", GetAllUsers);

// All Update routes
router.patch("/update/:id", Update);
router.patch("/whishlist/:id", TrackWhishlist);


router.get("/getAllUsers", GetReportCount);
router.get("/ngodata", GetNGOUserVisualizationData);

export default router;
