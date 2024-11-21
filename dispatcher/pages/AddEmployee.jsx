import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    position: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the employeeData
    console.log(employeeData);
    // Reset the form after submission
    setEmployeeData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      position: '',
      salary: ''
    });
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <Card sx={{ maxWidth: 2000 }}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Add Employee
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={employeeData.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={employeeData.lastName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={employeeData.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Address"
                    name="address"
                    value={employeeData.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                  <TextField
                    label="Position"
                    name="position"
                    value={employeeData.position}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Salary"
                    name="salary"
                    value={employeeData.salary}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddEmployee;