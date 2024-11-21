import React, { useState } from "react";
import "./VehicleForm.css";

const DriverRegistration = () => {
  const [formData, setFormData] = useState({
    driverFullName:{},
    drivingLicense:{},
    vehicleToBeAssigned:{},
    driverUsername:"",
    phoneNo: "",
    email: "",
    password:"",
    address: "",
    driverStatus:"free"
    
    
  });
  
  const handleReset = () => {
   setFormData({
    driverFullName:{},
    drivingLicense:{},
    vehicleToBeAssigned:{},
    driverUsername:"",
    phoneNo: "",
    email: "",
    password:"",
    address: "",
    driverStatus:"free"
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
      const response = await fetch("http://localhost:5000/api/drivers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("driver registration  successfully");
        window.alert("Registered");
  
        // Reset form fields
        setFormData({
          driverFullName:{},
          drivingLicense:{},
          vehicleToBeAssigned:{},
          driverUsername:"",
          phoneNo: "",
          email: "",
          password:"",
          address: "",
          driverStatus:"free"
        });
      } else {
        throw new Error("Error registration");
      }
    } catch (error) {
      console.log("Error registration:", error);
      
      window.alert("Error");
    }
  };
  
  return (
    <div className="lubricant-form-container">
      <h2>driver Registration form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="driverFullName.firstName">First Name:</label>
          <input
            type="text"
            id="driverFullName.firstName"
            name="driverFullName.firstName"
            value={formData.driverFullName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverFullName.lastName">Last Name:</label>
          <input
            type="text"
            id="driverFullName.lastName"
            name="driverFullName.lastName"
            value={formData.driverFullName.lastName}
            onChange={handleChange}
            required
          />
        </div>
           
        <div className="form-group">
          <label htmlFor="driverUsername">username:</label>
          <input
            type="text"
            id="driverUsername"
            name="driverUsername"
            value={formData.driverUsername}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="drivingLicense.licenseNumber"> license number:</label>
          <input
            type="text"
            id="drivingLicense.licenseNumber"
            name="drivingLicense.licenseNumber"
            value={formData.drivingLicense.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="drivingLicense.expirationDate">  expirationDate:</label>
          <input
            type="date"
            id="drivingLicense.expirationDate"
            name="drivingLicense.expirationDate"
            value={formData.drivingLicense.expirationDate}
            onChange={handleChange}
            required
          />
        </div> 

        <div className="form-group">
          <label htmlFor="drivingLicense.expire">  expir status:</label>
          <input
            type="text"
            id="drivingLicense.expire"
            name="drivingLicense.expire"
            value={formData.drivingLicense.expire}
            onChange={handleChange}
            required
          />
        </div> 


        <div className="form-group">
          <label htmlFor="vehicleToBeAssigned.plateNumber">  plateNumber :</label>
          <input
            type="text"
            id="vehicleToBeAssigned.plateNumber"
            name="vehicleToBeAssigned.plateNumber"
            value={formData.vehicleToBeAssigned.plateNumber}
            onChange={handleChange}
            required
          />
        </div> 
         
         
        <div className="form-group">
          <label htmlFor="vehicleToBeAssigned.vehicleMake">  vehicleMake :</label>
          <input
            type="text"
            id="vehicleToBeAssigned.vehicleMake"
            name="vehicleToBeAssigned.vehicleMake"
            value={formData.vehicleToBeAssigned.vehicleMake}
            onChange={handleChange}
            required
          />
        </div> 

           
        <div className="form-group">
          <label htmlFor="phoneNo">phone number:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password"> password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
     
        <div className="form-group">
          <label htmlFor="driverStatus"> driverStatus:</label>
          <select
            type="text"
            id="driverStatus"
            name="driverStatus"
            value={formData.driverStatus}
            onChange={handleChange}
            required
            >
            <option value="moving">free</option>
            <option value="driving">driving</option>
            <option value="ready">pending</option>
          </select>
        </div>
      
      
        {/* <div className="form-group">
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
        </div> */}
        {/* <div className="form-group">
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
          <label htmlFor="dispatcherStatus">Dispatcher Status:</label>
          <input
            type="text"
            id="dispatcherStatus"
            name="dispatcherStatus"
            value={formData.dispatcherStatus}
            onChange={handleChange}
            disabled
          />
        </div> */}

        {/* Submit button */}
        <button type="submit">register</button>
        <button type="button" onClick={handleReset}>
            Reset
          </button>
      </form>
    </div>
  );
};

export default DriverRegistration;
