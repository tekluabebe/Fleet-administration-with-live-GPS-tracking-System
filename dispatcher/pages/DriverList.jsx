import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, TextField } from '@mui/material';

const DriverLists = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        // Replace this with your actual API call to fetch driver data from the database
        const response = await fetch('/api/drivers');
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.log('Error fetching driver data:', error);
      }
    };

    fetchDriverData();
  }, []);

  const handleEdit = (index) => {
    // Handle edit action for the driver at the specified index
    console.log('Edit driver at index:', index);
  };

  const handleDelete = (index) => {
    // Handle delete action for the driver at the specified index
    console.log('Delete driver at index:', index);
  };

  const handleDetail = (index) => {
    // Handle detail action for the driver at the specified index
    console.log('View detail of driver at index:', index);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Drivers list
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
              {filteredDrivers.map((driver, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{driver.firstName}</TableCell>
                  <TableCell>{driver.lastName}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.status}</TableCell>
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

export default DriverLists;