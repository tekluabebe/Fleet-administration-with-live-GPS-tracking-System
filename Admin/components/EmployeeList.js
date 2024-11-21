import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    employeeUsername:"",
    departmentName:"",
    password:""
  });

  // Fetch all employees from the database
  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/employees");
      const data = await response.json();
  
      // Update the fetched data to include the _id field
      const employeesWithData = data.employees.map((employee) => {
        return {
          ...employee,
          id: employee._id, // Add the _id field as "id"
        };
      });
  
      setEmployees(employeesWithData);
    } catch (error) {
      console.error(error);
    }
  };
  

  // Call fetchEmployees when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete an employee record
  const deleteEmployee = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: "DELETE",
      });
      fetchEmployees(); // Fetch updated list of employees after deletion
    } catch (error) {
      console.error(error);
    }
  };

const updateEmployee = async (id, updatedData) => {
  try {
    await fetch(`http://localhost:5000/api/employees/${id}`, {
      // Use the selectedEmployee value as the _id for updating
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    fetchEmployees(); // Fetch updated list of employees after update
    setSelectedEmployee(null); // Reset the selected employee
    setUpdatedData({}); // Reset the updated data
  } catch (error) {
    console.error(error);
  }
};

  
  const handleUpdateEmployee = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee's _id
    setUpdatedData({
      // Set the updatedData based on the employee object
      employeeUsername: employee.employeeUsername,
      departmentName: employee.departmentName,
      password: employee.password,
    });
  };
  
  

  const handleCancelUpdate = () => {
    setSelectedEmployee(null);
    setUpdatedData({
   employeeUsername:"",
   departmentName:"",
   password:"",
    });
  };
  const handleSaveUpdate = () => {
    if (selectedEmployee) {
      const id = selectedEmployee._id;
      updateEmployee(id, updatedData);
      setSelectedEmployee(null);
      setUpdatedData({
        employeeUsername:"",
        departmentName:"",
        password:""
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const firstName = employee.employeeFullName.firstName.toLowerCase();
    return firstName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <TextField label="Search" variant="outlined" size="small" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
      <thead>
  <tr>
    <th>S.No.</th>
    <th>ID</th> {/* Add a new table header for ID */}
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
    <th>Address</th>
    <th>Phone Number</th>
    <th>Department Name</th>
    <th>Password</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {filteredEmployees.map((employee, index) => (
    <tr key={employee._id}>
      <td>{index + 1}</td>
      <td>{employee.id}</td> {/* Display the ID */}
      <td>{employee.employeeFullName.firstName}</td>
      <td>{employee.employeeFullName.lastName}</td>
      <td>{employee.employeeUsername}</td>
      <td>{employee.address}</td>
      <td>{employee.phoneNo}</td>
      <td>{employee.departmentName}</td>
      <td>{employee.password}</td>
      <td>
        <button onClick={() => handleUpdateEmployee(employee)}>Update</button>
        <button onClick={() => deleteEmployee(employee.id)}>Delete</button> {/* Pass the ID for deletion */}
      </td>
    </tr>
  ))}
</tbody>

</table>

      {selectedEmployee && (
        <div>
          <h2>Update Employee</h2>
          <form>
            <div>
              <label>Username:</label>
              <input type="text" name="employeeUsername" value={updatedData.employeeUsername} onChange={handleInputChange} />
            </div>
            <div>
              <label>Department Name:</label>
              <input type="text" name="departmentName" value={updatedData.departmentName} onChange={handleInputChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" name="password" value={updatedData.password} onChange={handleInputChange} />
            </div>
            <div>
              
                 <button onClick={handleSaveUpdate}>Save</button>
              <button onClick={ handleCancelUpdate}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      
    </div>
  );
};

export default EmployeeList;
