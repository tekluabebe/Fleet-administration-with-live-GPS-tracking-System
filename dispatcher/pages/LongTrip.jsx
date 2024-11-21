import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const OfficerForms = () => {
  const [form, setForm] = useState({
    departmentOffice: '',
    requestedWorkType: '',
    employees: [],
    destination: '',
    requesterName: '',
    departmentOfficerName: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend or perform any desired actions
    console.log(form);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Officer Side
      </Typography>

      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          First Part of Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Department Office"
              name="departmentOffice"
              value={form.departmentOffice}
              onChange={handleFormChange}
              fullWidth
            />
          </Grid>
          {/* Add other input fields for the first part of the form */}
        </Grid>

        <div style={{ marginTop: '20px' }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OfficerForms;

