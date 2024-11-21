import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import "./prmission.css";

const ViewNotification = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tripRequests");
        const data = await response.json();
        setRequests(data.tripRequests);
      } catch (error) {
        console.log("error to fetch", error);
      }
    };

    fetchRequests();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRequests = requests.filter((request) => {
    const driverFullName = `${request.driverDetail.firstName} ${request.driverDetail.lastName}`;
    return driverFullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  return (
    <div className="employee-list">
      <h2>Trip Request List</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>driver fullName</th>
            <th>workType</th>
            <th>licenseNumber</th>
            <th>headStatus</th>
            <th>dispatcherStatus</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {request.driverDetail.firstName} {request.driverDetail.lastName}
              </td>
              <td>{request.workType}</td>
              <td>{request.driverDetail.licenseNumber}</td>
              <td>{request.headStatus}</td>
              <td>{request.dispatcherStatus}</td>
              <td>
                <button
                  onClick={() => handleViewDetails(request)}
                  disabled={
                    request.headStatus !== "approved" ||
                    request.dispatcherStatus !== "approved" ||
                    request.headStatus === "pending" ||
                    request.dispatcherStatus === "pending"
                  }
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
          <h3>Assigned driver and vehicle for Request </h3>
          <table>
            <tbody>
              <tr>
                <td>Department name:</td>
                <td>{selectedRequest.departmentName}</td>
              </tr>
              <tr>
                <td>Representative Name:</td>
                <td>{selectedRequest.representativeName}</td>
              </tr>
              <tr>
                <td>No. of Travelers:</td>
                <td>{selectedRequest.noOfTravelers}</td>
              </tr>
              <tr>
                <td>Departure Date:</td>
                <td>{selectedRequest.tripRoute.departureDate}</td>
              </tr>
              <tr>
                <td>Destination:</td>
                <td>{selectedRequest.tripRoute.destination}</td>
              </tr>
              <tr>
                <td>Return Date:</td>
                <td>{selectedRequest.tripRoute.returnDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewNotification;
