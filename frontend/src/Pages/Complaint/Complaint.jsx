import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import "./Complaint.css";

const Complaint = () => {
  const navigate = useNavigate(); // 👈 Hook to navigate
  const [formData, setFormData] = useState({
    roomNo: "",
    hostelName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/complaints",
        formData
      );

      if (response.data.success) {
        alert("Complaint submitted successfully!");
        setFormData({ roomNo: "", hostelName: "", description: "" });
        navigate("/thankyou"); // 👈 Redirects to Thank You page
      } else {
        alert("Failed to submit complaint. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("An error occurred while submitting your complaint.");
    }
  };

  return (
    <div className="complaint-container">
      <form className="complaint-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Submit a Complaint</h2>

        <label>Room No</label>
        <input
          type="text"
          name="roomNo"
          value={formData.roomNo}
          onChange={handleChange}
          placeholder="Enter your room number"
          required
        />

        <label>Hostel Name</label>
        <input
          type="text"
          name="hostelName"
          value={formData.hostelName}
          onChange={handleChange}
          placeholder="Enter your hostel name"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your problem"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default Complaint;
