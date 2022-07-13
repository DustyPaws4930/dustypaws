import express from "express";
import { Register } from "../controllers/Complaint/Register.js";
import {
  GetAllComplaints,
  GetReportByUserId,
  UpdateComplaintById,
  GetReportCount,
} from "../controllers/Complaint/Fetch.js";

const router = express.Router();

// router.post("/signup", );

//All complaint routes
router.post("/register", Register);
router.get("/getReports/:userId", GetReportByUserId);
router.get("/getReportCount/", GetReportCount);
router.get("/fetch", GetAllComplaints);
router.patch("/updateById/:id", UpdateComplaintById);
export default router;
