import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const RequestToMechanics = () => {
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  useEffect(() => {
    const fetchMaintenanceRequests = async () => {
      try {
        // Replace this with your actual API call to fetch maintenance requests from the database
        const response = await fetch('http://localhost:5000/api/maintenance-requests');
        const data = await response.json();
        setMaintenanceRequests(data);
      } catch (error) {
        console.log('Error fetching maintenance requests:', error);
      }
    };

    fetchMaintenanceRequests();
  }, []);

  const handleStatusChange = async (index, status) => {
    try {
      // Make an API call to update the status of the maintenance request at the specified index
      const updatedRequest = { ...maintenanceRequests[index], status };
      const response = await fetch(`http://localhost:5000/api/maintenance-requests/${updatedRequest._id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRequest),
      });

      if (response.ok) {
        // Update the maintenance request list with the updated request
        const updatedRequests = [...maintenanceRequests];
        updatedRequests[index] = updatedRequest;
        setMaintenanceRequests(updatedRequests);
      } else {
        console.log('Error updating maintenance request status:', response.statusText);
      }
    } catch (error) {
      console.log('Error updating maintenance request status:', error);
    }
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
         <form onSubmit={handleStatusChange}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>VIN</TableCell>
                <TableCell>Vehicle Name</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Problem Type</TableCell>
                <TableCell>Schedule</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maintenanceRequests.map((request, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{request.vin}</TableCell>
                  <TableCell>{request.vehicleName}</TableCell>
                  <TableCell>{request.vehicleType}</TableCell>
                  <TableCell>{request.problemType}</TableCell>
                  <TableCell>{request.schedule}</TableCell>
                  <TableCell>
                    {request.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </form>
      </div>
    </div>
  );
 };
export default RequestToMechanics;
