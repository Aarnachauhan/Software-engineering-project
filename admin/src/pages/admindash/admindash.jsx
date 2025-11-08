import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [complaintsByCategory, setComplaintsByCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/complaints/category");
        setComplaintsByCategory(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Complaints Dashboard</h2>
      {complaintsByCategory.map((group) => (
        <div key={group._id}>
          <h3>Category: {group._id} (Total: {group.count})</h3>
          <ul>
            {group.complaints.map((c) => (
              <li key={c._id}>
                Room: {c.roomNo}, Hostel: {c.hostelName}, Description: {c.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
