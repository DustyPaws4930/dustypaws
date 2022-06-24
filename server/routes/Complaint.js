import express from "express";
import { Register } from "../controllers/Complaint/Register.js";
import ImageUpload from "../middlewares/ImageUpload.js";
import { GetReportByUserId } from "../controllers/Complaint/Fetch.js";
const router = express.Router();

// router.post("/signup", );

//All complaint routes
router.post("/register", ImageUpload, Register);
router.get("/getReports/:userId", GetReportByUserId);
export default router;
