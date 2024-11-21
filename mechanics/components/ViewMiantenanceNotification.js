import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

//import "./prmission.css";

const ViewMiantenanceNotification = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  // Fetch all requests from the database
  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/maintenanceRequests");
      const data = await response.json();
      setRequests(data.maintenanceRequests);
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

  const filteredRequests = requests.filter((request) => {
    const driverFullName = `${request.mechanicFullName.firstName} ${request.mechanicFullName.lastName}`;
    return driverFullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setSelectedStatus(request.maintainceStatus);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      const updatedRequest = { ...selectedRequest, maintainceStatus: selectedStatus };

      const response = await fetch(`http://localhost:5000/api/maintenanceRequests/${selectedRequest._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRequest),
      });

      if (response.ok) {
        // Update the local copy of the request with the new status
        setSelectedRequest(updatedRequest);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="employee-list">
      <h2>Orderd Maintainance List </h2>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th> mechanics FullName </th>
            <th>vehicle Name</th>
            <th>maintenance Status</th>
            {/* <th>workType</th>
            <th>departureDate</th>
            <th>destination</th>
            <th>returnDate</th>
            <th>Status</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request ,index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{request.mechanicFullName.firstName}-{request.mechanicFullName.lastName}</td>
              <td>{request.vehicleMaker}</td>
              <td>{request.maintainceStatus}</td>
              {/* <td>{request.tripRoute.departureDate}</td>
              <td>{request.tripRoute.destination}</td>
              <td>{request.tripRoute.returnDate}</td>
              <td>{request.headStatus}</td> */}
              <td>
                <button onClick={() => handleViewDetails(request)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRequest && (
        <div>
          <h3>additional information</h3>
          <table>
            <tbody>
              <tr>
                <td>vehicle plateNumber:</td>
                <td>{selectedRequest.plateNumber}</td>
              </tr>
              <tr>
                <td>driver Name:</td>
                <td>{selectedRequest.driverName}</td>
              </tr>
              <tr>
                <td>schedule to be finished</td>
                <td>{selectedRequest.schedule.start} to {selectedRequest.schedule.finish}</td>
              </tr>
             
                
                
              
              {/* <tr>
                <td>Destination:</td>
                <td>{selectedRequest.tripRoute.destination}</td>
              </tr>
              <tr>
                <td>Return Date:</td>
                <td>{selectedRequest.tripRoute.returnDate}</td>
              </tr> */}
              <tr>
                <td>maintenance status:</td>
                <td>
                  <select value={selectedStatus} onChange={handleStatusChange}>
                    <option value="material needed">material needed</option>
                    <option value="under repair">under repair</option>
                    <option value="maintained">maintained</option>

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

export default ViewMiantenanceNotification;
