import React, { useState } from "react";
import "./LubricantForm.css";

const ManageFuelLog = () => {
  const [formData, setFormData] = useState({
    driverName:{},
    vehicleMake:"",
    feulType:"",
    km:"",
    volume:"",
    // fuelStatus:"pending copon",
    tripRoute:{},
    // tripStatus: "pending",
    // vehicleStatus: "ready",
    // dispatcherStatus: "pending...",
  });
  //sessionStorage.removeItem('token');
  //sessionStorage.removeItem('driverUsername');
  const handleReset = () => {
    setFormData({
      driverName: {},
      vehicleMake: "",
      feulType: "",
      km: "",
      volume: "",
      tripRoute: {},
    });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/fuelRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("fuel request sent successfully");
        window.alert("sent");
  
        // Reset form fields
        setFormData({
          driverName:{},
          vehicleMake:"",
          feulType:"",
          km:"",
          volume:"",
          // fuelStatus:"pending copon",
          tripRoute:{},
        });
      } else {
        throw new Error("Error sending fuel request");
      }
    } catch (error) {
      console.error("Error sending fuel request:", error);
      window.alert("Error");
    }
  };
  
  return (
    <div className="lubricant-form-container">
      <h2>Sending fuel  request </h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="driverName.firstName">First Name:</label>
          <input
            type="text"
            id="driverName.firstName"
            name="driverName.firstName"
            value={formData.driverName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverName.lastName">Last Name:</label>
          <input
            type="text"
            id="driverName.lastName"
            name="driverName.lastName"
            value={formData.driverName.lastName}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="driverDetail.licenseNumber">License Number:</label>
          <input
            type="text"
            id="driverDetail.licenseNumber"
            name="driverDetail.licenseNumber"
            value={formData.driverDetail.licenseNumber}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="feulType">feulType :</label>
          <input
            type="text"
            id="feulType"
            name="feulType"
            value={formData.feulType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleMake">Vehicle Make:</label>
          <input
            type="text"
            id="vehicleMake"
            name="vehicleMake"
            value={formData.vehicleMake}
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
          <label htmlFor="km">distance:</label>
          <input
            type="text"
            id="km"
            name="km"
            value={formData.km}
            onChange={handleChange}
            required
          />
        </div>
      

        <div className="form-group">
          <label htmlFor="volume">volume:</label>
          <input
            type="text"
            id="volume"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            required
          />
        </div>



        {/* <div className="form-group">
          <label htmlFor="fuelStatus">fuel Status:</label>
          <select
            id="fuelStatus"
            name="fuelStatus"
            value={formData.fuelStatus}
            onChange={handleChange}
            disabled
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
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="fuelStatus">fuel Status:</label>
          <input
            type="text"
            id="fuelStatus"
            name="fuelStatus"
            value={formData.fuelStatus}
            onChange={handleChange}
            disabled
          />
        </div> */}

        {/* Submit button */}
        <button type="submit">Send fuel request</button>
        <button type="button" onClick={handleReset}>
            Reset
          </button>
      </form>
    </div>
  );
};

export default ManageFuelLog;
