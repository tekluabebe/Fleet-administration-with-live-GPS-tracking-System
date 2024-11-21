import React, { useState, useEffect } from "react";
import "./EmployeeList.css";
import { TextField } from '@mui/material';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const[selectedVehicles, setSelectedVehicles]= useState(null);
  const[updateData,setUpdatedData]=useState({
    detail:{
      color:""
    },
    GPS_ID:""
  });

  // Fetch all vehicles from the database
  const fetchVehicles = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/vehicles");
      const data = await response.json();
      setVehicles(data.vehicles);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchVehicles when the component mounts
  useEffect(() => {
    fetchVehicles();
  }, []);

  // Delete a vehicle record
  const deleteVehicle = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/vehicles/${id}`, {
        method: "DELETE",
      });
      fetchVehicles();
    } catch (error) {
      console.error(error);
    }
  };

  const updateVehicle = async (id, updatedData) => {
    try {
      await fetch(`http://localhost:5000/api/vehicles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      fetchVehicles();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateVehicles = (vehicle) => {
    setSelectedVehicles(vehicle);
    setUpdatedData({
      detail: {
        color: vehicle.detail.color,
      },
      GPS_ID: vehicle.GPS_ID
    });
  };

  
  const handleCancelUpdate = () => {
    setSelectedVehicles(null);
    setUpdatedData({
      detail: {
        color: ""
      },
      GPS_ID: ""
    });
  };

  const handleSaveUpdate = () => {
    if (selectedVehicles) {
      const id = selectedVehicles._id;
      updateVehicle(id, updateData);
      setSelectedVehicles(null);
      setUpdatedData({
        detail: {
          color: "",
        },
        GPS_ID: ""
      });
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'color') {
      setUpdatedData((prevData) => ({
        ...prevData,
        detail: {
          ...prevData.detail,
          [name]: value
        }
      }));
    } else {
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrivers = vehicles.filter((vehicle) => {
    const firstName = vehicle.vehicleModel.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employee-list">
      <h2>Vehicles List</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>VIN</th>
            <th>Vehicle Make</th>
            <th>Vehicle Model</th>
            <th>Year</th>
            <th>Code</th>
            <th>Region</th>
            <th>Number</th>
            <th>Body Type</th>
            
            <th>Engine Size</th>
            
            <th>Current Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
           {filteredDrivers.map((vehicle, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{vehicle.VIN}</td>
                <td>{vehicle.vehicleMake}</td>
                <td>{vehicle.vehicleModel}</td>
                <td>{vehicle.Year}</td>
                <td>{vehicle.vehicleLicensePlate?.code}</td>
                <td>{vehicle.vehicleLicensePlate?.region}</td>
                <td>{vehicle.vehicleLicensePlate?.plateNumber}</td>
                <td>{vehicle.detail?.bodyType}</td>
                
                <td>{vehicle.detail?.engineSize}</td>
              
                <td>{vehicle.vehicleStatus}</td>
                <td>
                <button onClick={() => handleUpdateVehicles(vehicle)}>Update</button>
                <button onClick={() => deleteVehicle(vehicle._id)}>Delete</button>
                </td>
              </tr>
            ))
           }
        
        </tbody>
      </table>
       

      {selectedVehicles && (
        <div>
          <h3>Update vehicle Information:</h3>
          <form>
          
         
            <div>
              <label>color:</label>
              <input
                type="text"
                name="color"
                value={updateData.detail.color}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>GPS_ID:</label>
              <input
                type="text"
                name="GPS_ID"
                value={updateData.GPS_ID}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button onClick={handleSaveUpdate}>Save</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default VehicleList;
