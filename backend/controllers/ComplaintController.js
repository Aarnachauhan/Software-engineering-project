import Complaint from "../models/ComplaintModel.js";

export const createComplaint = async (req, res) => {
  try {
    const { roomNo, hostelName, description, category } = req.body; // include category
    const complaint = new Complaint({ roomNo, hostelName, description, category });
    await complaint.save();
    res.json({ success: true, message: "Complaint saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Fetch all complaints
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
};

// Fetch complaints grouped by category
export const getComplaintsByCategory = async (req, res) => {
  try {
    const grouped = await Complaint.aggregate([
      { $group: { _id: "$category", complaints: { $push: "$$ROOT" }, count: { $sum: 1 } } },
    ]);
    res.json(grouped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch complaints by category" });
  }
};
