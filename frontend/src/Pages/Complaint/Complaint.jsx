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
    // Step 1️⃣ — Send description to Flask ML API for prediction
    const mlResponse = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: formData.description }),
    });

    const mlData = await mlResponse.json();
    const predictedCategory = mlData.prediction;
    console.log("Predicted category:", predictedCategory);

    // Step 2️⃣ — Send complaint + predicted category to Node backend
    const response = await axios.post("http://localhost:4000/api/complaints", {
      ...formData,
      category: predictedCategory, // 👈 include ML category
    });

    // Step 3️⃣ — Handle success/failure
    if (response.data.success) {
      alert(`Complaint submitted successfully! Category: ${predictedCategory}`);
      setFormData({ roomNo: "", hostelName: "", description: "" });
      navigate("/thankyou");
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
