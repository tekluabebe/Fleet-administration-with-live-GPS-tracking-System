import React, { useState } from "react";
import axios from "axios";
import "./LubricantForm.css";

const ManageLubricant = () => {
  const [formData, setFormData] = useState({
    vehicleId: "",
    make: "",
    model: "",
    licensePlateNumber: "",
    dateAndTime: "",
    lubricantType: "",
    quantity: "",
    odometerReading: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("/api/lubricant_log", formData);
      // Reset form fields
      setFormData({
        vehicleId: "",
        make: "",
        model: "",
        licensePlateNumber: "",
        dateAndTime: "",
        lubricantType: "",
        quantity: "",
        odometerReading: "",
        additionalNotes: "",
      });
      console.log("Lubricant data submitted successfully");
    } catch (error) {
      console.error("Error submitting lubricant data:", error);
    }
  };

  return (
    <div className="lubricant-form-container">
      <h2>Lubricant Maintenance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleId">Vehicle ID:</label>
          <input
            type="text"
            id="vehicleId"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="licensePlateNumber">License Plate Number:</label>
          <input
            type="text"
            id="licensePlateNumber"
            name="licensePlateNumber"
            value={formData.licensePlateNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="odometerReading">Odometer Reading:</label>
          <input
            type="number"
            id="odometerReading"
            name="odometerReading"
            value={formData.odometerReading}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManageLubricant;

