import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const RequestedFuel = () => {
  const [fuelRequests, setFuelRequests] = useState([]);

  useEffect(() => {
    const fetchFuelRequests = async () => {
      try {
        // Replace this with your actual API call to fetch fuel requests from the database
        const response = await fetch('http://localhost:5000/api/fuel-requests');
        const data = await response.json();
        setFuelRequests(data);
      } catch (error) {
        console.log('Error fetching fuel requests:', error);
      }
    };

    fetchFuelRequests();
  }, []);

  const handleStatusUpdate = async (requestId, status) => {
    try {
      // Make an API call to update the status of the fuel request
      const response = await fetch(`http://localhost:5000/api/fuel-requests/${requestId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        // Update the fuel requests list with the updated status
        const updatedFuelRequests = fuelRequests.map((request) =>
          request._id === requestId ? { ...request, status } : request
        );
        setFuelRequests(updatedFuelRequests);
      } else {
        console.log('Error updating fuel request status:', response.statusText);
      }
    } catch (error) {
      console.log('Error updating fuel request status:', error);
    }
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Requested Fuel List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Driver Name</TableCell>
                <TableCell>License Plate</TableCell>
                <TableCell>VIN</TableCell>
                <TableCell>Vehicle Name</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Update Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fuelRequests.map((request, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{request.driverName}</TableCell>
                  <TableCell>{request.licensePlate}</TableCell>
                  <TableCell>{request.vin}</TableCell>
                  <TableCell>{request.vehicleName}</TableCell>
                  <TableCell>{request.vehicleType}</TableCell>
                  <TableCell>{request.volume}</TableCell>
                  <TableCell>{request.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleStatusUpdate(request._id, 'track coupon')}
                      disabled={request.status === 'track coupon'}
                    >
                      Track Coupon
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

export default RequestedFuel;
