import React, { useState } from "react";
import "./VehicleForm.css";

const DeptRegistration = () => {
  const [formData, setFormData] = useState({
    officerFullName:{},
    officerUsername:"",
    departmentName: "",
    address:"",
    phoneNo: "",
    email: "",
    password:""
  });
  
  const handleReset = () => {
    setFormData({
      officerFullName: {},
      officerUsername: "",
      departmentName: "",
      address: "",
      phoneNo: "",
      email: "",
      password: ""
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
      const response = await fetch("http://localhost:5000/api/departmentHeads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("dept register  successfully");
        window.alert("Registered");
  
        // Reset form fields
        setFormData({
          employeeFullName:{},
          officerUsername:"",
          departmentName: "",
          address:"",
          phoneNo: "",
          email: "",
          password:""
        });
      } else {
        throw new Error("Error registration");
      }
    }  catch (error) {
      console.log("Error registration:", error);
   
      window.alert("Error: " );
    }
    
  };
  
  return (
    <div className="lubricant-form-container">
      <h2>dep't head officer Registration form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="officerFullName.firstName">First Name:</label>
          <input
            type="text"
            id="officerFullName.firstName"
            name="officerFullName.firstName"
            value={formData.officerFullName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="officerFullName.lastName">Last Name:</label>
          <input
            type="text"
            id="officerFullName.lastName"
            name="officerFullName.lastName"
            value={formData.officerFullName.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="officerUsername"> username:</label>
          <input
            type="text"
            id="officerUsername"
            name="officerUsername"
            value={formData.officerUsername}
            onChange={handleChange}
            required
          />
        </div>
             

        <div className="form-group">
          <label htmlFor="departmentName">department Name:</label>
          <input
            type="text"
            id="departmentName"
            name="departmentName"
            value={formData.departmentName}
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

export default DeptRegistration;
