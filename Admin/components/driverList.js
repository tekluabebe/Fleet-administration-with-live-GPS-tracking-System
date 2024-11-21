import React, { useState, useEffect } from "react";
import "./EmployeeList.css";
import { TextField } from '@mui/material';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    driverUsername: "",
    password: "",
    vehicleToBeAssigned: {
      plateNumber: "",
      vehicleMake: ""
    },
    driverStatus: ""
  });

  const fetchDrivers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/drivers");
      const data = await response.json();
      setDrivers(data.drivers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const deleteDriver = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/drivers/${id}`, {
        method: "DELETE",
      });
      fetchDrivers();
    } catch (error) {
      console.error(error);
    }
  };

  const updateDriver = async (id, updatedData) => {
    try {
      await fetch(`http://localhost:5000/api/drivers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      fetchDrivers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateDriver = (driver) => {
    setSelectedDriver(driver);
    setUpdatedData({
      driverUsername: driver.driverUsername,
      password: driver.password,
      vehicleToBeAssigned: {
        plateNumber: driver.vehicleToBeAssigned.plateNumber,
        vehicleMake: driver.vehicleToBeAssigned.vehicleMake
      },
      driverStatus: driver.driverStatus
    });
  };

  const handleCancelUpdate = () => {
    setSelectedDriver(null);
    setUpdatedData({
      driverUsername: "",
      password: "",
      vehicleToBeAssigned: {
        plateNumber: "",
        vehicleMake: ""
      },
      driverStatus: ""
    });
  };

  const handleSaveUpdate = () => {
    if (selectedDriver) {
      const id = selectedDriver._id;
      updateDriver(id, updatedData);
      setSelectedDriver(null);
      setUpdatedData({
        driverUsername: "",
        password: "",
        vehicleToBeAssigned: {
          plateNumber: "",
          vehicleMake: ""
        },
        driverStatus: ""
      });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'plateNumber' || name === 'vehicleMake') {
      setUpdatedData((prevData) => ({
        ...prevData,
        vehicleToBeAssigned: {
          ...prevData.vehicleToBeAssigned,
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
  
  

  const filteredDrivers = drivers.filter((driver) => {
    const firstName = driver.driverFullName.firstName.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employee-list">
      <h2>Driver List</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>License number</th>
            <th>Expiration Date</th>
            <th>Expire</th>
            <th>Plate Number</th>
            <th>Vehicle Make</th>
            <th>Driver Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{driver.driverFullName.firstName} {driver.driverFullName.lastName}</td>
              <td>{driver.address}</td>
              <td>{driver.phoneNo}</td>
              <td>{driver.drivingLicense.licenseNumber}</td>
              <td>{driver.drivingLicense.expirationDate}</td>
              <td>{driver.drivingLicense.expire}</td>
              <td>{driver.vehicleToBeAssigned.plateNumber}</td>
              <td>{driver.vehicleToBeAssigned.vehicleMake}</td>
              <td>{driver.driverStatus}</td>
              <td>
                <button onClick={() => handleUpdateDriver(driver)}>Update</button>
                <button onClick={() => deleteDriver(driver._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDriver && (
        <div>
          <h3>Update Driver Information:</h3>
          <form>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="driverUsername"
                value={updatedData.driverUsername}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                name="password"
                value={updatedData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Plate Number:</label>
              <input
                type="text"
                name="plateNumber"
                value={updatedData.vehicleToBeAssigned.plateNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Vehicle Make:</label>
              <input
                type="text"
                name="vehicleMake"
                value={updatedData.vehicleToBeAssigned.vehicleMake}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Driver Status:</label>
              <input
                type="text"
                name="driverStatus"
                value={updatedData.driverStatus}
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

export default DriverList;
