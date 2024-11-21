import React, { useState, useEffect } from "react";
import { TextField } from '@mui/material';

import "./EmployeeList.css";

const DispatcherList = () => {
  const [dispatchers, setDispatchers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const[selectedDispatcher, setSelectedDispatcher]= useState(null);
  const [updatedData, setUpdatedData] = useState({
     dispatcherUsername:"",
     password:"",
  });

  // Fetch all dispatchers from the database
  const fetchDispatchers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/dispatchers");
      const data = await response.json();
      setDispatchers(data.dispatchers);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchDispatchers when the component mounts
  useEffect(() => {
    fetchDispatchers();
  }, []);

  // Delete a dispatcher record
  const deleteDispatcher = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/dispatchers/${id}`, {
        method: "DELETE",
      });
      fetchDispatchers();
    } catch (error) {
      console.error(error);
    }
  };
  

  const updateDispatcher = async (id, updateData) => {
    try {
      await fetch(`http://localhost:5000/api/dispatchers/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(updateData),
      });
      fetchDispatchers();
      //setUpdatedData({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateDispatcher = (dispatcher) => {
    setSelectedDispatcher(dispatcher);
    setUpdatedData({
      dispatcherUsername: dispatcher.dispatcherUsername,
      password: dispatcher.password
    });
  };
  
  
  const handleCancelUpdate = () => {
    setSelectedDispatcher(null);
    setUpdatedData({
      dispatcherUsername:"",
      password:"",
    })
  };

  const handleSaveUpdate = () => {
    if (selectedDispatcher) {
      const id = selectedDispatcher._id;
      updateDispatcher(id, updatedData);
      setSelectedDispatcher(null);
      setUpdatedData({

          dispatcherUsername:"",
          password:""
      });
    }
  };



  // const filteredDispatchers = Object.values(dispatchers).filter(
  //   (dispatcher) =>
  //     (dispatcher.dispatcherFullName?.firstName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
  //     (dispatcher.dispatcherFullName?.lastName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
  //     (dispatcher.dispatcherUsername?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
  //     (dispatcher.address?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
  //     (dispatcher.phoneNo?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
  //     (dispatcher.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
  //     (dispatcher.password?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  // );
  
  


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };


  const filteredDispatchers = dispatchers.filter((dispatcher) => {
    const firstName = dispatcher.dispatcherFullName.firstName.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employee-list">
      <h2>Dispatcher List</h2>
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
        {filteredDispatchers.map(( dispatcher, index) => (
            <tr key={index}>
          
            <td>{index + 1}</td>
            <td>{dispatcher.dispatcherFullName?.firstName}</td>
            <td>{dispatcher.dispatcherFullName?.lastName}</td>
            <td>{dispatcher.dispatcherUsername}</td>
            <td>{dispatcher.address}</td>
            <td>{dispatcher.phoneNo}</td>
            <td>{dispatcher.password}</td>
            <td>
            <button onClick={() => handleUpdateDispatcher(dispatcher)}>Update</button>
            <button onClick={() => deleteDispatcher(dispatcher._id)}>Delete</button>
    </td>
  </tr>
))}


        </tbody>
      </table>

      {selectedDispatcher && (
        <div>
          <h3>Update dispatcher Information:</h3>
          <form>
          
         
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="dispatcherUsername"
                value={updatedData.dispatcherUsername}
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

export default DispatcherList;
