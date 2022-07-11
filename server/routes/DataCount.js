import express from "express";
import {
  GetNGOUserVisualizationData,
  GetReportCount,
} from "../controllers/datacount/Fetch.js";
const router = express.Router();

// router.post("/signup", );

//All complaint routes
router.get("/getReportCount/", GetReportCount);
router.get("/getNGOUserCount/", GetNGOUserVisualizationData);
export default router;
