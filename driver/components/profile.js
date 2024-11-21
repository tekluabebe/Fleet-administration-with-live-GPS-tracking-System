import React, { useEffect, useState } from 'react';
import './ViewProfile.css';
const ViewProfile = () => {
  const [driverProfile, setDriverProfile] = useState({
    driverUsername: '',
    driverFullName: {
      firstName: '',
      lastName: '',
    },
    drivingLicense: {
      licenseNumber: '',
      expirationDate: '',
      expire: '',
    },
    vehicleToBeAssigned: {
      plateNumber: '',
      vehicleMake: '',
    },
    phoneNo: '',
    email: '',
    password: '',
    address: '',
    driverStatus: '',
    _id: '',
  });
  
  const [editableProfile, setEditableProfile] = useState({
    driverUsername: '',
    driverFullName: {
      firstName: '',
      lastName: '',
    },
    drivingLicense: {
      licenseNumber: '',
      expirationDate: '',
      expire: '',
    },
    vehicleToBeAssigned: {
      plateNumber: '',
      vehicleMake: '',
    },
    phoneNo: '',
    email: '',
    password: '',
    address: '',
    driverStatus: '',
    _id: '',
  });
  

  useEffect(() => {
    const fetchDriverProfile = async () => {
      try {
        const driverUsername = sessionStorage.getItem('driverUsername');
    
        if (driverUsername) {
          const response = await fetch(`http://localhost:5000/api/drivers/drivers?username=${driverUsername}`);
          const data = await response.json();
          console.log('API Response:', data);
          setDriverProfile(data); // Store the driver profile in state
          setEditableProfile(data); // Set editable profile for editing
          //console.log(driverProfile);
        } else {
          console.log('driverUsername not found in sessionStorage');
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
        `http://localhost:5000/api/drivers/${editableProfile._id}`,
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
    <div className="profile-container">
      <h2>Driver Profile</h2>
      
      {driverProfile ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>{editableProfile.driverUsername}</td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.driverFullName.firstName}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        driverFullName: {
                          ...editableProfile.driverFullName,
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
                    value={editableProfile.driverFullName.lastName}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        driverFullName: {
                          ...editableProfile.driverFullName,
                          lastName: e.target.value,
                        },
                      });
                    }}
                  />
                </td>
              </tr>
                  
              <tr>
                <td>licenseNumber:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.drivingLicense.licenseNumber}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        drivingLicense: {
                          ...editableProfile.drivingLicense,
                          licenseNumber: e.target.value,
                          
                        },
                      });
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>license Expiration Date:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.drivingLicense.expirationDate}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        drivingLicense: {
                          ...editableProfile.drivingLicense,
                          expirationDate: e.target.value,
                        },
                      });
                    }}
                  />
                </td>
              </tr> 



              <tr>
                <td>status:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.drivingLicense.expire}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        drivingLicense: {
                          ...editableProfile.drivingLicense,
                          expire: e.target.value,
                        },
                      });
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>assigned vehicle plateNumber:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.vehicleToBeAssigned.plateNumber}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        vehicleToBeAssigned: {
                          ...editableProfile.vehicleToBeAssigned,
                          plateNumber: e.target.value,
                        },
                      });
                    }}
                  />
                </td>
              </tr>

               
              <tr>
                <td>assigned vehicle Make:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.vehicleToBeAssigned.vehicleMake}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        vehicleToBeAssigned: {
                          ...editableProfile.vehicleToBeAssigned,
                          vehicleMake: e.target.value,
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
                <td>driver status:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.driverStatus}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                       
                          ...editableProfile,
                          driverStatus: e.target.value,
                       
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
