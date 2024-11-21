import React from "react";


const ViewNotification = ({
  vehicleName,
  vehicleModel,
  maintenanceDate,
  priority,
  contactInformation,
  additionalNotes,
}) => {
  if (!vehicleName) {
    return (
      <>
        <tr className="notification-row">
          <th>Vehicle Name</th>
          <td>{vehicleName}</td>
          <th>Vehicle Model</th>
          <td>{vehicleModel}</td>
          <th>Maintenance Date</th>
          <td>{maintenanceDate}</td>
          <th>Priority</th>
          <td>{priority}</td>
          <th>Contact Information</th>
          <td>{contactInformation}</td>
          <th>Additional Notes</th>
          <td>{additionalNotes}</td>
        </tr>
        <tr className="no-notification-row">
          <td colSpan="12">No sent notification from dispatcher</td>
        </tr>
      </>
    );
  }

  return (
    <tr className="notification-row">
      <th>Vehicle Name</th>
      <td>{vehicleName}</td>
      <th>Vehicle Model</th>
      <td>{vehicleModel}</td>
      <th>Maintenance Date</th>
      <td>{maintenanceDate}</td>
      <th>Priority</th>
      <td>{priority}</td>
      <th>Contact Information</th>
      <td>{contactInformation}</td>
      <th>Additional Notes</th>
      <td>{additionalNotes}</td>
    </tr>
  );
};

export default ViewNotification;
