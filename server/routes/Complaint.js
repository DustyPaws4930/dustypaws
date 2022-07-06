import express from "express";
import { Register } from "../controllers/Complaint/Register.js";
import ImageUpload from "../middlewares/ImageUpload.js";
import {
  GetAllComplaints,
  GetReportByUserId,
  UpdateComplaintById,
} from "../controllers/Complaint/Fetch.js";

const router = express.Router();

// router.post("/signup", );

//All complaint routes
router.post("/register", Register);
router.get("/getReports/:userId", GetReportByUserId);
router.get("/fetch", GetAllComplaints);
router.patch("/updateById/:id", UpdateComplaintById);
export default router;
