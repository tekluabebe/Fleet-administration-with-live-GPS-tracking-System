import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';

const AddVehicles = () => {
  const [vehicleData, setVehicleData] = useState({
    vehicleName: '',
    vehicleType: '',
    VIN: '',
    registrationNo: '',
    model: '',
    make: '',
    licensePlate: '',
    driverName: '',
    vehiclePhoto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setVehicleData((prevState) => ({
      ...prevState,
      vehiclePhoto: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the vehicleData
    console.log(vehicleData);
    // Reset the form after submission
    setVehicleData({
      vehicleName: '',
      vehicleType: '',
      VIN: '',
      registrationNo: '',
      model: '',
      make: '',
      licensePlate: '',
      driverName: '',
      vehiclePhoto: null
    });
  };

  return (
    <div 
    style={{marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}
    >
    <div className="mt-20 md:mt-0 md:mx-0">
      <Card sx={{ maxWidth: 2000 }}>
      <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Add Vehicle
      </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Vehicle Name"
                  name="vehicleName"
                  value={vehicleData.vehicleName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Vehicle Type"
                  name="vehicleType"
                  value={vehicleData.vehicleType}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="VIN"
                  name="VIN"
                  value={vehicleData.VIN}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Registration No."
                  name="registrationNo"
                  value={vehicleData.registrationNo}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Model"
                  name="model"
                  value={vehicleData.model}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Make"
                  name="make"
                  value={vehicleData.make}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="License Plate"
                  name="licensePlate"
                  value={vehicleData.licensePlate}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Driver Name"
                  name="driverName"
                  value={vehicleData.driverName}
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
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </form>
        </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddVehicles;
