import express from "express";

import {Register} from "../controllers/Complaint/Register"

const router = express.Router();

// router.post("/signup", );

//All complaint routes
router.post("/register",Register);

export default router;