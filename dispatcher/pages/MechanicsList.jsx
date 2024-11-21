import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography  } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const MechanicsList = () => {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    const fetchMechanicData = async () => {
      try {
        // Replace this with your actual API call to fetch mechanic data from the database
        const response = await fetch('http://localhost:5000/api/mechanics');
        const data = await response.json();
        setMechanics(data);
      } catch (error) {
        console.log('Error fetching mechanic data:', error);
      }
    };

    fetchMechanicData();
  }, []);

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <div className="mt-20 md:mt-0 md:mx-0">
        <TableContainer component={Paper}>
          <Typography variant="h5" component="div" sx={{ backgroundColor: '#03a9f4', color: '#fff', padding: '9px', width: '100%' }}>
            Mechanics List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Activity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mechanics.map((mechanic, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{mechanic.firstName}</TableCell>
                  <TableCell>{mechanic.lastName}</TableCell>
                  <TableCell>{mechanic.address}</TableCell>
                  <TableCell>{mechanic.phone}</TableCell>
                  <TableCell>{mechanic.status}</TableCell>
                  <TableCell>
                    <Link to={`/mechanics/${mechanic._id}`}>
                      <FaEye />
                    </Link>
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

export default MechanicsList;
