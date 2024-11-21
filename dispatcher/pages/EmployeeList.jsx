import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, TextField } from '@mui/material';

const EmployeeLists = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        // Replace this with your actual API call to fetch employee data from the database
        const response = await fetch('/api/employees');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.log('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  const handleEdit = (index) => {
    // Handle edit action for the employee at the specified index
    console.log('Edit employee at index:', index);
  };

  const handleDelete = (index) => {
    // Handle delete action for the employee at the specified index
    console.log('Delete employee at index:', index);
  };

  const handleDetail = (index) => {
    // Handle detail action for the employee at the specified index
    console.log('View detail of employee at index:', index);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Employees list
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{employee.firstName}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>{employee.status}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button variant="contained" color="info" onClick={() => handleDetail(index)}>
                      Detail
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default EmployeeLists;