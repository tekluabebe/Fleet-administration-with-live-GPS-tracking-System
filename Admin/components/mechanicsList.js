import React, { useState, useEffect } from "react";
import { TextField } from '@mui/material';

import "./EmployeeList.css";

const MechanicsList = () => {
  const [mechanics, setMechanics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const[SelectedMechanics, setSelectedMechanics]=useState(null);
  const [updatedData, setUpdatedData] = useState({
      mechanicUsername:"",
      password:""
  });

  // Fetch all dispatchers from the database
  const fetchMechanics = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/mechanics");
      const data = await response.json();
      setMechanics(data.mechanics);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchDispatchers when the component mounts
  useEffect(() => {
    fetchMechanics();
  }, []);

  // Delete a dispatcher record
  const deleteMechanics = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/mechanics/${id}`, {
        method: "DELETE",
      });
      fetchMechanics(); // Fetch updated list of department heads after deletion
    } catch (error) {
      console.error(error);
    }
  };
  


  const updateMechanics = async (id, updateData) => {
    try {
      await fetch(`http://localhost:5000/api/mechanics/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(updateData),
      });
      fetchMechanics();
      //setUpdatedData({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateMechanics = (mechanic) => {
    setSelectedMechanics(mechanic);
    setUpdatedData({
      mechanicUsername: mechanic.mechanicUsername,
      password: mechanic.password
    });
  };
  
  
  const handleCancelUpdate = () => {
    setSelectedMechanics(null);
    setUpdatedData({
      mechanicUsername:"",
      
      password:"",
    })
  };


  const handleSaveUpdate = () => {
    if (SelectedMechanics) {
      const id = SelectedMechanics._id;
      updateMechanics(id, updatedData);
      setSelectedMechanics(null);
      setUpdatedData({
          mechanicUsername:"",
          password:"",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   const [dispatcherId, property] = name.split('.');
  //   setUpdatedData((prevState) => ({
  //     ...prevState,
  //     [dispatcherId]: {
  //       ...prevState[dispatcherId],
  //       [property]: value
  //     }
  //   }));
  // };
  const filteredMechanics = mechanics.filter((mechanic) => {
    const firstName = mechanic.mechanicFullName.firstName.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });
  
  


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="employee-list">
      <h2>mechanics List</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {filteredMechanics.map(( mechanic, index) => (
            <tr key={index}>
          
            <td>{index + 1}</td>
            <td>{mechanic.mechanicFullName?.firstName}</td>
            <td>{mechanic.mechanicFullName?.lastName}</td>
            <td>{mechanic.mechanicUsername}</td>
            <td>{mechanic.address}</td>
            <td>{mechanic.phoneNo}</td>
            <td>{mechanic.password}</td>
            <td>
            <button onClick={() => handleUpdateMechanics(mechanic)}>Update</button>
            <button onClick={() => deleteMechanics(mechanic._id)}>Delete</button>
             
    </td>
  </tr>
))}
        </tbody>
      </table>

      {SelectedMechanics && (
        <div>
          <h3>Update Head Information:</h3>
          <form>
          
         
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="mechanicUsername"
                value={updatedData.mechanicUsername}
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
              <button onClick={handleSaveUpdate}>Save</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default MechanicsList;
