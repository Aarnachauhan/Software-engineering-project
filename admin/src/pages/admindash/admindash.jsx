import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/complaints")
      .then((res) => {
        setComplaints(res.data);
      })
      .catch((err) => {
        console.error("Error fetching complaints:", err);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>All Complaints</h2>
      {complaints.length === 0 ? (
        <p>No complaints found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Hostel Name</th>
              <th>Description</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c._id}>
                <td>{c.roomNo}</td>
                <td>{c.hostelName}</td>
                <td>{c.description}</td>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
