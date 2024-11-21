import React, { useState } from "react";
import "./VehicleForm.css";

const MechanicsRegistration = () => {
  const [formData, setFormData] = useState({
   mechanicFullName: {},
    mechanicUsername: "",
    address: "",
    phoneNo: "",
    password: "",
    email: "",
    mechanicStatus:"free"
    
  });

  const handleReset = () => {
    setFormData({
      mechanicFullName: {},
      mechanicUsername: "",
      address: "",
      phoneNo: "",
      password: "",
      email: "",
      mechanicStatus:"free"
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
      const response = await fetch("http://localhost:5000/api/mechanics", {
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
           mechanicFullName: {},
            mechanicUsername: "",
            address: "",
            phoneNo: "",
            password: "",
            email: "",
            mechanicStatus:""
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
      <h2>mechanics Registration form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="mechanicUsername"> username:</label>
          <input
            type="text"
            id="mechanicUsername"
            name="mechanicUsername"
            value={formData.mechanicUsername}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mechanicFullName.firstName">First Name:</label>
          <input
            type="text"
            id="mechanicFullName.firstName"
            name="mechanicFullName.firstName"
            value={formData.mechanicFullName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mechanicFullName.lastName">Last Name:</label>
          <input
            type="text"
            id="mechanicFullName.lastName"
            name="mechanicFullName.lastName"
            value={formData.mechanicFullName.lastName}
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
          <label htmlFor="mechanicsStatus"> mechanicStatus:</label>
          <select
            
            id="mechanicsStatus"
            name="mechanicsStatus"
            value={formData.mechanicStatus}
            onChange={handleChange}
            required
          >
            <option value="free">free</option>
            <option value="at maintaining">at maintaining</option>
          
          </select>
        </div>

        {/* Submit button */}
        <button type="submit">register</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default MechanicsRegistration;
