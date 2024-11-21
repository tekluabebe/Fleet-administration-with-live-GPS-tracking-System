import React, { useState } from "react";
import "./LubricantForm.css";

const SendTripReport = () => {
  const [formData, setFormData] = useState({
    driverDetail:{},
    vehicleDetail:{},
    tripRoute:{},
    tripStatus: "pending",
    vehicleStatus: "ready",
    dispatcherStatus: "pending",
  });
  //sessionStorage.removeItem('token');
  //sessionStorage.removeItem('driverUsername');
  const handleReset = () => {
   setFormData({
    driverDetail:{},
    vehicleDetail:{},
    tripRoute:{},
    tripStatus: "pending",
    vehicleStatus: "ready",
    dispatcherStatus: "pending",
   });
  };
  //const driverUsername = sessionStorage.getItem('driverUsername');
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/driverTripReports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Trip report sent successfully");
        window.alert("Registered");
  
        // Reset form fields
        setFormData({
          driverDetail: {},
          vehicleDetail: {},
          tripRoute: {},
          tripStatus: "pending",
          vehicleStatus: "ready",
          dispatcherStatus: "pending",
        });
      } else {
        throw new Error("Error sending trip report");
      }
    } catch (error) {
      console.error("Error sending trip report:", error);
      window.alert("Error");
    }
  };

  // useEffect(() => {
  //   const fetchDriverProfile = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/drivers");
  //       const data = await response.json();
  //       const driverUsername = data.driverUsername;
  //       sessionStorage.setItem("driverUsername", driverUsername);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   fetchDriverProfile();
  // }, []);
  
  
  return (
    <div className="lubricant-form-container">
      <h2>Sending report About Trip</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="driverDetail.firstName">First Name:</label>
          <input
            type="text"
            id="driverDetail.firstName"
            name="driverDetail.firstName"
            value={formData.driverDetail.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverDetail.lastName">Last Name:</label>
          <input
            type="text"
            id="driverDetail.lastName"
            name="driverDetail.lastName"
            value={formData.driverDetail.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverDetail.licenseNumber">License Number:</label>
          <input
            type="text"
            id="driverDetail.licenseNumber"
            name="driverDetail.licenseNumber"
            value={formData.driverDetail.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleDetail.plateNumber">Plate Number:</label>
          <input
            type="text"
            id="vehicleDetail.plateNumber"
            name="vehicleDetail.plateNumber"
            value={formData.vehicleDetail.plateNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleDetail.vehicleMake">Vehicle Make:</label>
          <input
            type="text"
            id="vehicleDetail.vehicleMake"
            name="vehicleDetail.vehicleMake"
            value={formData.vehicleDetail.vehicleMake}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tripRoute.departureDate">Departure Date:</label>
          <input
            type="date"
            id="tripRoute.departureDate"
            name="tripRoute.departureDate"
            value={formData.tripRoute.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tripRoute.destinaton">Destination:</label>
          <input
            type="text"
            id="tripRoute.destinaton"
            name="tripRoute.destinaton"
            value={formData.tripRoute.destinaton}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tripRoute.returnDate">Return Date:</label>
          <input
            type="date"
            id="tripRoute.returnDate"
            name="tripRoute.returnDate"
            value={formData.tripRoute.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tripStatus">Trip Status:</label>
          <select
            id="tripStatus"
            name="tripStatus"
            value={formData.tripStatus}
            onChange={handleChange}
            required
          >

            <option value="pending">pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="abort">abort</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="vehicleStatus">Vehicle Status:</label>
          <select
            id="vehicleStatus"
            name="vehicleStatus"
            value={formData.vehicleStatus}
            onChange={handleChange}
            required
          >
            <option value="moving">moving</option>
            <option value="needs to be repaire">needs to be repaire</option>
            <option value="ready">ready</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dispatcherStatus">Dispatcher Status:</label>
          <input
            type="text"
            id="dispatcherStatus"
            name="dispatcherStatus"
            value={formData.dispatcherStatus}
            onChange={handleChange}
            disabled
          />
        </div>

        {/* Submit button */}
        <button type="submit">Send Trip Report</button>
        <button type="button" onClick={handleReset}>
            Reset
          </button>
      </form>
    </div>
  );
};

export default SendTripReport;
