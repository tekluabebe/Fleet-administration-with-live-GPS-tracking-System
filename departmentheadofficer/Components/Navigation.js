import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import "./prmission.css";

const ViewNotifications = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  // Fetch all requests from the database
  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tripRequests");
      const data = await response.json();
      setRequests(data.tripRequests);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchRequests when the component mounts
  useEffect(() => {
    fetchRequests();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredRequests = requests.filter((tripRequests) => {
    const firstName = tripRequests.departmentName.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setSelectedStatus(request.headStatus);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      const updatedRequest = { ...selectedRequest, headStatus: selectedStatus };

      const response = await fetch(`http://localhost:5000/api/tripRequests/${selectedRequest._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRequest),
      });

      if (response.ok) {
        // Update the local copy of the request with the new status
        const updatedRequests = requests.map((request) =>
          request._id === updatedRequest._id ? updatedRequest : request
        );
        setRequests(updatedRequests);
        setSelectedRequest(updatedRequest);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="employee-list">
      <h2>Trip Request List</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>department Name</th>
            <th>representative Name</th>
            <th>noOfTravelers</th>
            <th>workType</th>
            <th>departureDate</th>
            <th>destination</th>
            <th>returnDate</th>
            <th>head-Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{request.departmentName}</td>
              <td>{request.representativeName}</td>
              <td>{request.noOfTravelers}</td>
              <td>{request.workType}</td>
              <td>{request.tripRoute.departureDate}</td>
              <td>{request.tripRoute.destination}</td>
              <td>{request.tripRoute.returnDate}</td>
              <td>{request.headStatus}</td>
              <td>
                <button onClick={() => handleViewDetails(request)}>change Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRequest && (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Head Status:</td>
                <td>
                  <select value={selectedStatus} onChange={handleStatusChange}>
                   
                    <option value="disapprove">disapprove</option>
                    <option value="approved">Approved</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button onClick={handleUpdateStatus}>Update Status</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewNotifications;
