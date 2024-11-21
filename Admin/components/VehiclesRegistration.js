import React, { useState } from "react";
import "./VehicleForm.css";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
 
VIN:"",
vehicleMake:"",
vehicleModel: "",
Year: "",
vehicleLicensePlate:{},
detail:{},
GPS_ID:"",
vehicleStatus: "unassigned"
  });

  const handleReset = () => {
    setFormData({
      VIN:"",
      vehicleMake:"",
      vehicleModel: "",
      Year: "",
      vehicleLicensePlate:{},
      detail:{},
      GPS_ID:"",
      vehicleStatus: "unassigned"
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
      const response = await fetch("http://localhost:5000/api/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("registration successfully");
        window.alert("Registered");

        // Reset form fields
        setFormData({
          VIN:"",
          vehicleMake:"",
          vehicleModel: "",
          Year: "",
          vehicleLicensePlate:{},
          detail:{},
          GPS_ID:"",
          vehicleStatus: "unassigned"
            });
        
      } else {
        throw new Error("Error  registartion");
        
      }
    } catch (error) {
      console.log("error", error);
      window.alert("Error");
    }
  };

  return (
    <div className="lubricant-form-container">
      <h2>vehicle Registration form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}




  
<div className="form-group">
<label htmlFor="VIN">  VIN :</label>
        <input
          type="text"
          id="VIN"
          name="VIN"
          value={formData.VIN}
          onChange={handleChange}
          required
        />
        </div> 


      <div className="form-group">
      <label htmlFor="vehicleMake">  vehicleMake :</label>
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
      <label htmlFor="vehicleModel">  vehicleModel :</label>
      <input
        type="text"
        id="vehicleModel"
        name="vehicleModel"
        value={formData.vehicleModel}
        onChange={handleChange}
        required
      />
      </div> 

 
        <div className="form-group">
        <label htmlFor="Year">year of manufacture:</label>
        <input
          type="date"
          id="Year"
          name="Year"
          value={formData.Year}
          onChange={handleChange}
          required
        />
        </div>


<div className="form-group">
 <label htmlFor="vehicleLicensePlate.code">code:</label>
 <input
  type="text"
  id="vehicleLicensePlate.code"
  name="vehicleLicensePlate.code"
  value={formData.vehicleLicensePlate.code}
  onChange={handleChange}
  required
/>
</div>
<div className="form-group">
<label htmlFor="vehicleLicensePlate.region">region:</label>
<input
  type="text"
  id="vehicleLicensePlate.region"
  name="vehicleLicensePlate.region"
  value={formData.vehicleLicensePlate.region}
  onChange={handleChange}
  required
/>
</div>
 
<div className="form-group">
<label htmlFor="vehicleLicensePlate.plateNumber">plateNumber:</label>
<input
  type="text"
  id="vehicleLicensePlate.plateNumber"
  name="vehicleLicensePlate.plateNumber"
  value={formData.vehicleLicensePlate.plateNumber}
  onChange={handleChange}
  required
/>
</div>

<div className="form-group">
<label htmlFor="detal.bodyType"> body Type:</label>
<input
  type="text"
  id="detail.bodyType"
  name="detail.bodyType"
  value={formData.detail.bodyType}
  onChange={handleChange}
  required
/>
</div>

<div className="form-group">
<label htmlFor="detail.color">  color:</label>
<input
  type="text"
  id="detail.color"
  name="detail.color"
  value={formData.detail.color}
  onChange={handleChange}
  required
 
/>
</div> 

<div className="form-group">
<label htmlFor="detail.engineSize">  engine Size:</label>
<input
  type="text"
  id="detail.engineSize"
  name="detail.engineSize"
  value={formData.detail.engineSize}
  onChange={handleChange}
  required
/>
</div> 



<div className="form-group">
<label htmlFor="GPS_ID">GPS_ID:</label>
<input
  type="GPS_ID"
  id="GPS_ID"
  name="GPS_ID"
  value={formData.GPS_ID}
  onChange={handleChange}
  required
/>
</div>

{/* <div className="form-group">
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
  <option value="needs to be repaire">driving</option>
  <option value="ready">pending</option>
</select>
</div*/


<div className="form-group">
<label htmlFor="vehicleStatus">vehicle Status:</label>
<select
  id="vehicleStatus"
  name="vehicleStatus"
  value={formData.vehicleStatus}
  onChange={handleChange}
  required
>

  <option value="unassigned">unassigned</option>
  <option value="ready">ready</option>
  <option value="moving">moving</option>
  <option value="under repair">under repair</option>
  <option value="needs to be repaired">needs to be repaired</option>

</select>
</div> }

        {/* Submit button */}
        <button type="submit">register</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;




