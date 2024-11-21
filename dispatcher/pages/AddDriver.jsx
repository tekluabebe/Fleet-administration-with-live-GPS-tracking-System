import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';

const AddDriver = () => {
  const [driverData, setDriverData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    driverLicense: '',
    assignedVIN: '',
    driverPhoto: null
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setDriverData((prevState) => ({
      ...prevState,
      driverPhoto: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the driverData
    console.log(driverData);
    // Reset the form after submission
    setDriverData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      driverLicense: '',
      assignedVIN: '',
      driverPhoto: null
    });
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
    <div className="mt-20 md:mt-0 md:mx-0">
      <Card sx={{ maxWidth: 2000 }}>
        <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
          Add Driver
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={driverData.firstName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={driverData.lastName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={driverData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  value={driverData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Address"
                  name="address"
                  value={driverData.address}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                <TextField
                  label="Driver License"
                  name="driverLicense"
                  value={driverData.driverLicense}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Assigned VIN"
                  name="assignedVIN"
                  value={driverData.assignedVIN}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ marginBottom: '16px' }}
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

export default AddDriver;
