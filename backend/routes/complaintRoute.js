import express from "express";
import { createComplaint, getAllComplaints, getComplaintsByCategory } from "../controllers/ComplaintController.js";

const router = express.Router();

router.post("/", createComplaint);
router.get("/", getAllComplaints);
router.get("/category", getComplaintsByCategory); // fetch category-wise

export default router;
