import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';

const DispatcherForm = ({ form, onSubmit }) => {
  const [driverName, setDriverName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [dispatcherName, setDispatcherName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      driverName,
      licensePlate,
      departureTime,
      returnTime,
      dispatcherName,
    };

    onSubmit(formData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Dispatcher's Section
        </Typography>
        <Typography variant="body2" component="p">
          Officer's Section:
        </Typography>
        <Typography variant="body2" component="p">
          Department Office Name: { }   {/*form.officerSection.departmentOfficeName*/}
        </Typography>
        <Typography variant="body2" component="p">
          Requested Work Type: {}         {/*form.officerSection.requestedWorkType*/}
        </Typography>
        <Typography variant="body2" component="p">
          Employees: {}                   {/*form.officerSection.employees.join(', ')*/}
        </Typography>
        <Typography variant="body2" component="p">
          Destination: {}                 {/*form.officerSection.destination*/}
        </Typography>
        <Typography variant="body2" component="p">
          Requester Name: {}              {/*form.officerSection.requesterName*/}
        </Typography>
        <Typography variant="body2" component="p">
          Department Officer Name: {}     {/*form.officerSection.departmentOfficerName*/}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Driver Name"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="License Plate"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Departure Time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Return Time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Dispatcher Name"
                value={dispatcherName}
                onChange={(e) => setDispatcherName(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Approve
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default DispatcherForm;
