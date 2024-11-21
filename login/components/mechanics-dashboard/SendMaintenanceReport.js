

import React, { useState } from 'react';
import axios from 'axios';

const initialFormData = {
  vehicleName: '',
  vehicleType: '',
  usedMaterial: '',
  totalCost: ''
};

const SendMaintenanceReport = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formList, setFormList] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/maintenance_report', formData)
      .then((response) => {
        console.log(response);
        setFormList([...formList, formData]);
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name Of Maintained Vehicle:
          <input type="text" name="vehicleName" value={formData.vehicleName} onChange={handleInputChange} required/>
        </label>
        <br />
        <label>
           Type Of Maintained Vehicle:
          <input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} required/>
        </label>
        <br />
        <label>
          Used-Material For Maintenance:
          <input type="text" name="usedMaterial" value={formData.usedMaterial} onChange={handleInputChange} required/>
        </label>
        <br />
        <label>
          Total Cost:
          <input type="text" name="totalCost" value={formData.totalCost} onChange={handleInputChange} required/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default SendMaintenanceReport;
