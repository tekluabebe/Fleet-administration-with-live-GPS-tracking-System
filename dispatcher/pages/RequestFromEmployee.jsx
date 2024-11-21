import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, Select, MenuItem } from '@mui/material';

const RequestFromEmployee = () => {
  const [tripRequests, setTripRequests] = useState([]);

  useEffect(() => {
    const fetchTripRequests = async () => {
      try {
        // Replace this with your actual API call to fetch trip requests from the database
        const response = await fetch('http://localhost:5000/api/trip-requests');
        const data = await response.json();
        setTripRequests(data);
      } catch (error) {
        console.log('Error fetching trip requests:', error);
      }
    };

    fetchTripRequests();
  }, []);

  const handleDispatcherStatusChange = async (index, status) => {
    try {
      // Make an API call to update the status by dispatcher of the trip request at the specified index
      const updatedRequest = { ...tripRequests[index], dispatcherStatus: status };
      const response = await fetch(`http://localhost:5000/api/trip-requests/${updatedRequest._id}/dispatcher-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRequest),
      });

      if (response.ok) {
        // Update the trip request list with the updated request
        const updatedRequests = [...tripRequests];
        updatedRequests[index] = updatedRequest;
        setTripRequests(updatedRequests);
      } else {
        console.log('Error updating dispatcher status:', response.statusText);
      }
    } catch (error) {
      console.log('Error updating dispatcher status:', error);
    }
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Department Name</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Work Type</TableCell>
                <TableCell>No. of Traveler</TableCell>
                <TableCell>Departure Date</TableCell>
                <TableCell>Return Date</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Status by Department Head</TableCell>
                <TableCell>Driver Name</TableCell>
                <TableCell>License Plate</TableCell>
                <TableCell>VIN</TableCell>
                <TableCell>Vehicle Name</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Status by Dispatcher</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tripRequests.map((request, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{request.departmentName}</TableCell>
                  <TableCell>{request.employeeName}</TableCell>
                  <TableCell>{request.workType}</TableCell>
                  <TableCell>{request.travelerCount}</TableCell>
                  <TableCell>{request.departureDate}</TableCell>
                  <TableCell>{request.returnDate}</TableCell>
                  <TableCell>{request.destination}</TableCell>
                  <TableCell>{request.departmentHeadStatus}</TableCell>
                  <TableCell>{request.driverName}</TableCell>
                  <TableCell>{request.licensePlate}</TableCell>
                  <TableCell>{request.vin}</TableCell>
                  <TableCell>{request.vehicleName}</TableCell>
                  <TableCell>{request.vehicleType}</TableCell>
                  <TableCell>
                    <FormControl>
                      <Select
                        value={request.dispatcherStatus}
                        onChange={(e) => handleDispatcherStatusChange(index, e.target.value)}
                      >
                        <MenuItem value="suspend">Suspend</MenuItem>
                        <MenuItem value="assigned">Assigned</MenuItem>
                      </Select>
                    </FormControl>
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

export default RequestFromEmployee;
