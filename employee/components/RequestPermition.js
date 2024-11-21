import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import "./EmployeeList.css";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

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

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const filteredRequests = requests
  .filter((tripRequests) => {
    const firstName = tripRequests.tripRoute.departureDate.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  })
  .sort((a, b) => {
    const dateA = new Date(a.tripRoute.departureDate);
    const dateB = new Date(b.tripRoute.departureDate);
    return dateB - dateA; // Sort in descending order (most recent first)
  });

  return (
    <div className="employee-list">
      <h2>Trip Request List With Status</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>representativeName</th>
            <th>noOfTravelers</th>
            <th>departureDate</th>
            <th>destination</th>
            <th>returnDate</th>
            <th>headStatus</th>
            <th>dispatcherStatus</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{request.representativeName}</td>
              <td>{request.noOfTravelers}</td>
              <td>{request.tripRoute.departureDate}</td>
              <td>{request.tripRoute.destination}</td>
              <td>{request.tripRoute.returnDate}</td>
              <td>{request.headStatus}</td>
              <td>{request.dispatcherStatus}</td>
              <td>
                <button
                  onClick={() => handleViewDetails(request)}
                  disabled={request.headStatus !== "approved" || request.dispatcherStatus !== "approved"}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRequest && (
        <div>
          <h3>Assigned driver and vehicle for Request</h3>
          <table>
            <tbody>
              <tr>
                <td>driver First Name:</td>
                <td>{selectedRequest.driverDetail.firstName}</td>
              </tr>
              <tr>
                <td>driver Last Name:</td>
                <td>{selectedRequest.driverDetail.lastName}</td>
              </tr>
              <tr>
                <td>driver License Number:</td>
                <td>{selectedRequest.driverDetail.licenseNumber}</td>
              </tr>
              <tr>
                <td>vehicle Plate Number:</td>
                <td>{selectedRequest.vehicleDetail.plateNumber}</td>
              </tr>
              <tr>
                <td>Vehicle Make:</td>
                <td>{selectedRequest.vehicleDetail.vehicleMake}</td>
              </tr>
              <tr>
                <td>Distance to travel:</td>
                <td>{selectedRequest.distance}</td>
              </tr>
              <tr>
                <td>tripStatus:</td>
                <td>{selectedRequest.tripStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestList;
