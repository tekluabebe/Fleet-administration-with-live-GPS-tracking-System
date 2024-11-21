import React, { useState } from "react";
import "./VehicleForm.css";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    employeeFullName:{},
    employeeUsername:"",
    address:"",
    phoneNo: "",
    departmentName: "",
    email: "",
    password:"",
  });
  //localStorage.removeItem("token");
  const handleReset = () => {
   setFormData({
    employeeFullName:{},
    employeeUsername:"",
    address:"",
    phoneNo: "",
    departmentName: "",
    email: "",
    password:"",
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
      const response = await fetch("http://localhost:5000/api/employees", {
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
          employeeFullName:{},
          employeeUsername:"",
          address:"",
          phoneNo: "",
          departmentName: "",
          email: "",
          password:"",
        });
      } else {
        throw new Error("Error sending trip report");
      }
    } catch (error) {
      console.error("Error sending trip report:", error);
      window.alert("Error");
    }
  };
  
  return (
    <div className="lubricant-form-container">
      <h2>Employee Registration form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="employeeFullName.firstName">First Name:</label>
          <input
            type="text"
            id="employeeFullName.firstName"
            name="employeeFullName.firstName"
            value={formData.employeeFullName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeFullName.lastName">Last Name:</label>
          <input
            type="text"
            id="employeeFullName.lastName"
            name="employeeFullName.lastName"
            value={formData.employeeFullName.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeUsername"> username:</label>
          <input
            type="text"
            id="employeeUsername"
            name="employeeUsername"
            value={formData.employeeUsername}
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

export default EmployeeForm;
