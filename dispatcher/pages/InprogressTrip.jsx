import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';

const OfficerForm = ({ onSubmit }) => {
  const [departmentOfficeName, setDepartmentOfficeName] = useState('');
  const [requestedWorkType, setRequestedWorkType] = useState('');
  const [employees, setEmployees] = useState([]);
  const [destination, setDestination] = useState('');
  const [requesterName, setRequesterName] = useState('');
  const [departmentOfficerName, setDepartmentOfficerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      departmentOfficeName,
      requestedWorkType,
      employees,
      destination,
      requesterName,
      departmentOfficerName,
    };

    onSubmit(formData);
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <Card>
        <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
          Officer's Section
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Department Office Name"
                  value={departmentOfficeName}
                  onChange={(e) => setDepartmentOfficeName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Requested Work Type"
                  value={requestedWorkType}
                  onChange={(e) => setRequestedWorkType(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Employees"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value.split(','))}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Requester Name"
                  value={requesterName}
                  onChange={(e) => setRequesterName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Department Officer Name"
                  value={departmentOfficerName}
                  onChange={(e) => setDepartmentOfficerName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficerForm;
