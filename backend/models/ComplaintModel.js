import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  roomNo: { type: String, required: true },
  hostelName: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;
