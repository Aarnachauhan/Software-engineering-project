// ✅ existing import
import Complaint from "../models/ComplaintModel.js";

// Existing createComplaint function remains same
export const createComplaint = async (req, res) => {
  try {
    const { roomNo, hostelName, description } = req.body;
    const complaint = new Complaint({ roomNo, hostelName, description });
    await complaint.save();
    res.json({ success: true, message: "Complaint saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ NEW: getAllComplaints
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 }); // newest first
    res.json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
};
