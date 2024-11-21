import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const LiveLocation = () => {
  const [center, setCenter] = useState(null);
  const [vehiclePosition, setVehiclePosition] = useState(null);

  const maxLatitude = 38.0; // Maximum latitude for random vehicle movement
  const minLatitude = 37.5; // Minimum latitude for random vehicle movement
  const maxLongitude = -122.0; // Maximum longitude for random vehicle movement
  const minLongitude = -123.0; // Minimum longitude for random vehicle movement

  useEffect(() => {
    // Simulating vehicle movement
    const simulateVehicleMovement = () => {
      const randomLatitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
      const randomLongitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;

      setVehiclePosition({
        lat: randomLatitude,
        lng: randomLongitude,
      });
    };

    const interval = setInterval(simulateVehicleMovement, 5000);

    return () => clearInterval(interval);
  }, [maxLatitude, minLatitude, maxLongitude, minLongitude]); // Include dependencies in the dependency array

  useEffect(() => {
    // Rest of your code...

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log('Error retrieving location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const mapContainerStyle = {
    width: '98%',
    height: 'calc(100vh - 100px)',
    margin: '20px',
  };
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyDuRkuouM4dxcTI9U8E_nqfPmIzTSjblL8">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {vehiclePosition && <Marker position={vehiclePosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default LiveLocation;