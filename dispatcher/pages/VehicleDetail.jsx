
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const VehicleDetail = ({ vehicleId }) => {
  const [vehicleDetail, setVehicleDetail] = useState(null);

  useEffect(() => {
    const fetchVehicleDetail = async () => {
      try {
        // Replace the URL with your actual API endpoint to fetch the vehicle detail
        const response = await fetch(`/api/vehicles/${vehicleId}`);
        const data = await response.json();
        setVehicleDetail(data);
      } catch (error) {
        console.log('Error fetching vehicle detail:', error);
      }
    };

    fetchVehicleDetail();
  }, [vehicleId]);

  if (!vehicleDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Vehicle Detail
        </Typography>
        <ul>
          <li>
            <strong>VIN:</strong> {vehicleDetail.VIN}
          </li>
          <li>
            <strong>Vehicle Type:</strong> {vehicleDetail.vehicleType}
          </li>
          <li>
            <strong>Driver:</strong> {vehicleDetail.driver}
          </li>
          <li>
            <strong>Status:</strong> {vehicleDetail.status}
          </li>
          <li>
            <strong>Manufacturer:</strong> {vehicleDetail.manufacturer}
          </li>
          <li>
            <strong>Year:</strong> {vehicleDetail.year}
          </li>
          <li>
            <strong>Color:</strong> {vehicleDetail.color}
          </li>
          <li>
            <strong>Mileage:</strong> {vehicleDetail.mileage}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default VehicleDetail;