import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DepartmentHeadList = () => {
  const [heads, setHeads] = useState([]);

  useEffect(() => {
    const fetchHeadData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/department_heads');
        const data = await response.json();
        console.log(data); // Check the value of data
        setHeads(data.departmentHeads); // Access departmentHeads array
      } catch (error) {
        console.log('Error fetching department head data:', error);
      }
    };

    fetchHeadData();
  }, []);

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Department Head List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Department Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Activity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {heads.map((head, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{head.firstName}</TableCell>
                  <TableCell>{head.lastName}</TableCell>
                  <TableCell>{head.departmentName}</TableCell>
                  <TableCell>{head.address}</TableCell>
                  <TableCell>{head.phoneNo}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" component={Link} to={`/department_head/${head._id}`}>
                      View Details
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

export default DepartmentHeadList;
