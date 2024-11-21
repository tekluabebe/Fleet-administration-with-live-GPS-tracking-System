import React, { useEffect, useState } from 'react';
import './ViewProfile.css'
const YourProfile = () => {
  const [driverProfile, setDriverProfile] = useState({
    mechanicUsername: '',
    mechanicFullName: {
      firstName: '',
      lastName: '',
    },
    phoneNo: '',
    email: '',
    password: '',
    address: '',
    mechanicsStatus: '',
    _id: '',
  });
  
  const [editableProfile, setEditableProfile] = useState({
    mechanicUsername: '',
    mechanicFullName: {
      firstName: '',
      lastName: '',
    },
    phoneNo: '',
    email: '',
    password: '',
    address: '',
    mechanicsStatus: '',
    _id: '',
  });
  

  useEffect(() => {
    const fetchDriverProfile = async () => {
      try {
        const mechanicUsername = sessionStorage.getItem('mechanicUsername');
    
        if (mechanicUsername) {
          const response = await fetch(`http://localhost:5000/api/mechanics/mechanics?mechanicUsername=${mechanicUsername}`);
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
        `http://localhost:5000/api/mechanics/${editableProfile._id}`,
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
      <h2>Driver Profile</h2>
      
      {driverProfile ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>{editableProfile.mechanicUsername}</td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.mechanicFullName.firstName}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        mechanicFullName: {
                          ...editableProfile.mechanicFullName,
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
                    value={editableProfile.mechanicFullName.lastName}
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                        mechanicFullName: {
                          ...editableProfile.mechanicFullName,
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
                <td>status:</td>
                <td>
                  <input
                    type="text"
                    value={editableProfile.mechanicsStatus}
                    disabled
                    onChange={(e) => {
                      setEditableProfile({
                        ...editableProfile,
                       
                          ...editableProfile,
                          mechanicsStatus: e.target.value,
                       
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

export default YourProfile;
