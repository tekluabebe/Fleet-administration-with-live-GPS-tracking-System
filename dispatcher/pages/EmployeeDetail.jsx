import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee details from the database based on the employeeId
    const fetchEmployeeDetails = async () => {
      try {
        // Replace this with your actual API call to fetch employee details
        const response = await fetch(`/api/employees/${employeeId}`);
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.log('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [employeeId]);

  if (!employee) {
    return <div>Loading employee details...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>First Name: {employee.firstName}</p>
      <p>Last Name: {employee.lastName}</p>
      <p>Email: {employee.email}</p>
      <p>Phone Number: {employee.phoneNumber}</p>
      <p>Address: {employee.address}</p>
      <p>Position: {employee.position}</p>
      <p>Salary: {employee.salary}</p>
    </div>
  );
};

export default EmployeeDetail;