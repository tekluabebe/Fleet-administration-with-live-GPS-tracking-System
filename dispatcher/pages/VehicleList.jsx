import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, TextField } from '@mui/material';

const VehicleLists = () => {
  // Mock vehicle data
  const [vehicles, setVehicles] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  // Fetch vehicle data from the database (simulated fetch)
  React.useEffect(() => {
    // Simulated fetch from the database
    const fetchData = async () => {
      try {
        // Replace this with your actual API call to fetch vehicle data from the database
        const response = await fetch('/api/vehicles');
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.log('Error fetching vehicle data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index) => {
    // Handle edit action for the vehicle at the specified index
    console.log('Edit vehicle at index:', index);
  };

  const handleDelete = (index) => {
    // Handle delete action for the vehicle at the specified index
    console.log('Delete vehicle at index:', index);
  };

  const handleDetail = (index) => {
    // Handle detail action for the vehicle at the specified index
    console.log('View detail of vehicle at index:', index);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.VIN.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">

        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Vehicles list
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
                <TableCell>S.no</TableCell>
                <TableCell>VIN</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Driver</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredVehicles.map((vehicle, index) => (
                <TableRow key={index}>
                  <TableCell>{vehicle.VIN}</TableCell>
                  <TableCell>{vehicle.vehicleType}</TableCell>
                  <TableCell>{vehicle.driver}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
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

export default VehicleLists;
