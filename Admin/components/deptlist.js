import React, { useState, useEffect } from "react";
import { TextField } from '@mui/material';

import "./EmployeeList.css";

const DeptList = () => {
  const [heads, setHeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHead, setSelectedHead] = useState(null);
  const[updatedData, setUpdatedData]=useState({
    officerUsername:"",
    departmentName:"",
    password:"",

  });

  // Fetch all employees from the database
  const fetchHeads = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/departmentHeads");
      const data = await response.json();
      setHeads(data.departmentHeads);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchEmployees when the component mounts
  useEffect(() => {
    fetchHeads();
  }, []);

  // Delete a department head record
  const deleteHead = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/departmentHeads/${id}`, {
        method: "DELETE",
      });
      fetchHeads(); // Fetch updated list of department heads after deletion
    } catch (error) {
      console.error(error);
    }
  };

  // Update a department head record
  const updateHead = async (id, updatedData) => {
    try {
      await fetch(`http://localhost:5000/api/departmentHeads/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      fetchHeads();
    } catch (error) {
      console.error(error);
    }
  };

const handleUpdateHead = (head) => {
  setSelectedHead(head);
  setUpdatedData({
    officerUsername: head.officerUsername,
    departmentName: head.departmentName,
    password: head.password
  });
};


  const handleCancelUpdate = () => {
    setSelectedHead(null);
    setUpdatedData({
      officerUsername:"",
      departmentName:"",
      password:"",
    })
  };

  const handleSaveUpdate = () => {
    if (selectedHead) {
      const id = selectedHead._id;
      updateHead(id, updatedData);
      setSelectedHead(null);
      setUpdatedData({
          officerUsername:"",
          departmentName:"",
          password:"",
      });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  

  const filteredHeads = heads.filter((head) => {
    const firstName = head.officerFullName.firstName.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employee-list">
      <h2>Head List</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredHeads.map((head, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{head.officerFullName.firstName}</td>
              <td>{head.officerFullName.lastName}</td>
              <td>{head.email}</td>
              <td>{head.departmentName}</td>
              <td>{head.address}</td>
              <td>{head.phoneNo}</td>
              <td>{head.password}</td>
              <td>
                <button onClick={() => handleUpdateHead(head)}>Update</button>
                <button onClick={() => deleteHead(head._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedHead && (
        <div>
          <h3>Update Head Information:</h3>
          <form>
          
         
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="officerUsername"
                value={updatedData.officerUsername}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Department Name:</label>
              <input
                type="text"
                name="departmentName"
                value={updatedData.departmentName}
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

export default DeptList;
