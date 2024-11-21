import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer,Typography, TableHead, TableRow, Paper, FormControl, Select, MenuItem } from '@mui/material';

const DriverTripReport = () => {
  const [tripReports, setTripReports] = useState([]);

  useEffect(() => {
    const fetchTripReports = async () => {
      try {
        // Replace this with your actual API call to fetch trip reports from the database
        const response = await fetch('http://localhost:5000/api/trip-reports');
        const data = await response.json();
        setTripReports(data);
      } catch (error) {
        console.log('Error fetching trip reports:', error);
      }
    };

    fetchTripReports();
  }, []);

  const handleReportStatusChange = async (index, status) => {
    try {
      // Make an API call to update the report status of the trip report at the specified index
      const updatedReport = { ...tripReports[index], reportStatus: status };
      const response = await fetch(`http://localhost:5000/api/trip-reports/${updatedReport._id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReport),
      });

      if (response.ok) {
        // Update the trip report list with the updated report
        const updatedReports = [...tripReports];
        updatedReports[index] = updatedReport;
        setTripReports(updatedReports);
      } else {
        console.log('Error updating report status:', response.statusText);
      }
    } catch (error) {
      console.log('Error updating report status:', error);
    }
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Driver Trip Reports
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
                <TableCell>Trip Status</TableCell>
                <TableCell>Maintenance Status</TableCell>
                <TableCell>Report Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tripReports.map((report, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{report.driverName}</TableCell>
                  <TableCell>{report.licensePlate}</TableCell>
                  <TableCell>{report.vin}</TableCell>
                  <TableCell>{report.vehicleName}</TableCell>
                  <TableCell>{report.vehicleType}</TableCell>
                  <TableCell>{report.tripStatus}</TableCell>
                  <TableCell>{report.maintenanceStatus}</TableCell>
                  <TableCell>
                    <FormControl>
                      <Select
                        value={report.reportStatus}
                        onChange={(event) => handleReportStatusChange(index, event.target.value)}
                      >
                        <MenuItem value="confirmed">Confirmed</MenuItem>
                        <MenuItem value="unconfirmed">Unconfirmed</MenuItem>
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

export default DriverTripReport;
