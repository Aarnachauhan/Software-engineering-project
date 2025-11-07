import express from "express";
import { createComplaint ,getAllComplaints } from "../controllers/ComplaintController.js";

const router = express.Router();

router.post("/", createComplaint);
router.get("/", getAllComplaints); // ✅ NEW


export default router;
