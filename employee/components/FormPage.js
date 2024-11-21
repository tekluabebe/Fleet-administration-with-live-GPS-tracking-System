import React, { useState } from "react";
import "./RequestForm.css";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    departmentName:"",
    representativeName:"",
    workType:"",
    noOfTravelers:"",
    // driverDetail:{},
    // vehicleDetail:{},
      tripRoute:{},
    // headStatus:"",
     km: "",
    // tripStatus: "",
    // dispatcherStatus: "suspend"
  });
  
  const handleReset = () => {
   setFormData({
    departmentName:"",
    representativeName:"",
    workType:"",
    noOfTravelers:"",
    // driverDetail:{},
    // vehicleDetail:{},
      tripRoute:{},
    // headStatus:"",
     km: "",
   });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e, res) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/tripRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Trip request sent successfully");
        window.alert("Trip Request Sent Successfully");
  
        // Reset form fields
        setFormData({
          departmentName:"",
          representativeName:"",
          workType:"",
          noOfTravelers:"",
          // driverDetail:{},
          // vehicleDetail:{},
          tripRoute:{},
          // headStatus:"",
           //km: "",
          // tripStatus: "",
          // dispatcherStatus: "suspend",
        });
      } else {
        throw new Error("Error ");
      }
    } catch (error) {
      console.error("Error sending trip request:", error);
      window.alert("Error");
      //res.status(409).json({ error });
    }
  };
  
  return (
    <div className="lubricant-form-container">
      <h2>Trip Request Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="departmentName">department name:</label>
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
          <label htmlFor="representativeName">representative Name:</label>
          <input
            type="text"
            id="representativeName"
            name="representativeName"
            value={formData.representativeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workType">work Type:</label>
          <input
            type="text"
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noOfTravelers"> noOfTravers:</label>
          <input
            type="text"
            id="noOfTravelers"
            name="noOfTravelers"
            value={formData.noOfTravelers}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="vehicleDetail.vehicleMake">Vehicle Make:</label>
          <input
            type="text"
            id="vehicleDetail.vehicleMake"
            name="vehicleDetail.vehicleMake"
            value={formData.vehicleDetail.vehicleMake}
            onChange={handleChange}
            required
          />
        </div> */}
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
          <label htmlFor="tripRoute.destination">Destination:</label>
          <input
            type="text"
            id="tripRoute.destination"
            name="tripRoute.destination"
            value={formData.tripRoute.destination}
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
        {/* <div className="form-group">
          <label htmlFor="km">distance:</label>
          <input
          type="text"
            id="km"
            name="km"
            value={formData.km}
            onChange={handleChange}
            required
   
          />
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="headStatus">Head Status:</label>
          <select
          type="text"
            id="headStatus"
            name="headStatus"
            value={formData.headStatus}
            onChange={handleChange}
            disabled
         
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverDetail.firstName">firstName:</label>
          <input
          type="text"
            id="driverDetail.firstName"
            name="driverDetail.firstName"
            value={formData.driverDetail.firstName}
            onChange={handleChange}
            disabled
   
          />
        </div>
          

        <div className="form-group">
          <label htmlFor="driverDetail.lastName">lastName:</label>
          <input
            type="text"
            id="driverDetail.lastName"
            name="driverDetail.lastName"
            value={formData.driverDetail.lastName}
            onChange={handleChange}
            disabled
          />
        </div>


        <div className="form-group">
          <label htmlFor="driverDetail.licennseNumber">licennseNumber:</label>
          <input
          type="text"
            id="driverDetail.licenseNumber"
            name="driverDetail.licenseNumber"
            value={formData.driverDetail.licenseNumber}
            onChange={handleChange}
            disabled
   
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleDetail.plateNUmber">plateNumber:</label>
          <input
          type="text"
            id="vehicleDetail.plateNumber"
            name="vehicleDetail.plateNumber"
            value={formData.vehicleDetail.plateNumber}
            onChange={handleChange}
            disabled
   
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleDetail.vehicleMake">vehicleMake:</label>
          <input
          type="text"
            id="vehicleDetail.vehicleMake"
            name="vehicleDetail.vehicleMake"
            value={formData.vehicleDetail.vehicleMake}
            onChange={handleChange}
            disabled
   
          />
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
          

      

        <div className="form-group">
          <label htmlFor="tripStatus">tripStatus:</label>
          <input
          type="text"
            id="tripStatus"
            name="tripStatus"
            value={formData.tripStatus}
            onChange={handleChange}
            disabled
   
          />
        </div> */}

        {/* Submit button */}
        <button type="submit">Send Trip request</button>
        <button type="button" onClick={handleReset}>
            Reset
          </button>
      </form>
    </div>
  );
};

export default RequestForm;
