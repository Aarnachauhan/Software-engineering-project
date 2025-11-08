import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    roomNo: { type: String, required: true },
    hostelName: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // <-- NEW
  },
  { timestamps: true } // automatically creates createdAt and updatedAt
);

const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;
