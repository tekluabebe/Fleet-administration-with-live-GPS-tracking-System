import React, { useEffect, useState } from 'react';

const DriverDetail = ({ driverId }) => {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        // Replace this with your actual API call to fetch driver data by ID from the database
        const response = await fetch(`/api/drivers/${driverId}`);
        const data = await response.json();
        setDriver(data);
      } catch (error) {
        console.log('Error fetching driver data:', error);
      }
    };

    fetchDriverData();
  }, [driverId]);

  if (!driver) {
    return <div>Loading driver details...</div>;
  }

  return (
    <div>
      <h2>Driver Details</h2>
      <p>First Name: {driver.firstName}</p>
      <p>Last Name: {driver.lastName}</p>
      <p>Email: {driver.email}</p>
      <p>Phone Number: {driver.phoneNumber}</p>
      <p>Address: {driver.address}</p>
      <p>Driver License: {driver.driverLicense}</p>
      <p>Assigned VIN: {driver.assignedVIN}</p>
      <img src={driver.driverPhoto} alt=" " />
    </div>
  );
};

export default DriverDetail;
