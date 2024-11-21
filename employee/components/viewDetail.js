import React, { useEffect, useState } from 'react';
import './ViewProfile.css';
const ViewProfile = () => {
  const [driverProfile, setDriverProfile] = useState({
    employeeUsername: '',
    employeeFullName: {
      firstName: '',
      lastName: '',
    },
    phoneNo: '',
    email: '',
    departmentName: '',
    password: '',
    address: '',
   
    _id: '',
  });
  
  const [editableProfile, setEditableProfile] = useState({
    employeeUsername: '',
    employeeFullName: {
      firstName: '',
      lastName: '',
    },
    phoneNo: '',
    email: '',
    departmentName: '',
    password: '',
    address: '',
    
    _id: '',
  });
  

  useEffect(() => {
    const fetchDriverProfile = async () => {
      try {
        const employeeUsername = sessionStorage.getItem('employeeUsername');
    
        if (employeeUsername) {
          const response = await fetch(`http://localhost:5000/api/employees/employees?employeeUsername=${employeeUsername}`);
          const data = await response.json();
          console.log('API Response:', data);
          setDriverProfile(data.employee); // Store the driver profile in state
          setEditableProfile(data.employee); // Set editable profile for editing
          //console.log(driverProfile);
        } else {
          console.log('employeeUsername not found in sessionStorage');
        }
      } catch (error) {
        console.error(error);
      }
    };
    
  
    fetchDriverProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/employees/${editableProfile._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editableProfile),
        }
      );
  
      const data = await response.json();
      console.log('Update Response:', data);
  
      // Check if the update was successful
      if (response.ok) {
        // Display success alert
        alert('Update successful');
  
        // Update the driverProfile state with the updated data
        setDriverProfile(data);
      } else {
        // Display error alert
        alert('Update failed');
      }
    } catch (error) {
      console.error(error);
      // Display error alert
      alert('Update failed');
    }
  };
  
  

  return (
    <div className='profile-container'> 
      <h2>Your Profile</h2>
      
      {driverProfile ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>{editableProfile.employeeUsername}</td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.employeeFullName.firstName}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        employeeFullName: {
                          ...editableProfile.employeeFullName,
                          firstName: e.target.value,
                        },
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.employeeFullName.lastName}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        employeeFullName: {
                          ...editableProfile.employeeFullName,
                          lastName: e.target.value,
                        },
                      });
                    }}
                  />
                </td>
              </tr>
               
              <tr>
                <td>phone number:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.phoneNo}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        
                          ...editableProfile,
                          phoneNo: e.target.value,
                       
                      });
                    }}
                  />
                </td>
              </tr>


              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.email}
                   
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                       
                          ...editableProfile,
                          email: e.target.value,
                        
                      });
                    }}
                  />
                </td>
              </tr>


              
              <tr>
                <td>password:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.password}
                   
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                       
                          ...editableProfile,
                          password: e.target.value,
                        
                      });
                    }}
                  />
                </td>
              </tr>


              
              <tr>
                <td>address:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.address}
                   
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                       
                          ...editableProfile, 
                          address:e.target.value,
                       
                      });
                    }}
                  />
                </td>
              </tr>


              
              <tr>
                <td>department name:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.departmentName}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                       
                          ...editableProfile,
                          departmentName: e.target.value,
                       
                      });
                    }}
                  />
                </td>
              </tr>

              
              <tr>
                <td>your id:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile._id}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                      
                          ...editableProfile,
                          _id: e.target.value,
                        
                      });
                    }}
                  />
                </td>
              </tr>


              {/* Add more fields for personal information */}
            </tbody>
          </table>
          <button onClick={handleUpdate}>Update</button>

        </div>
      ) : (
        <p>Loading driver profile...</p>
      )}
    </div>
  );
  
};

export default ViewProfile;
