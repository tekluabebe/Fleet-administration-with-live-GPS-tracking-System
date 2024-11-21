import React from 'react';
import { Link } from 'react-router-dom';

const DriverDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Driver Dashboard</h1>
      <div className="dashboard-buttons">
        <Link to="/viewNotifications">View Notifications to assign for a trip</Link>
        <Link to="/sendNotification">Send Notification About Trip</Link>
        <Link to="/manageFuelLog">Manage Fuel Log</Link>
        <Link to="/reportTrip">Report About Trip</Link>
      </div>
    </div>
  );
};

export default DriverDashboard;
