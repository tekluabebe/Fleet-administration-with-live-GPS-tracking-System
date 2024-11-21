import React, { useEffect, useState } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink, useHistory } from 'react-router-dom';
import "./Navbar.css";
import Logo from '../static/Logo1.png';

const DriverNavbar = () => {
  const history = useHistory();
  const [driverUsername, setDriverUsername] = useState('');
  //const [driverProfile, setDriverProfile] = useState(null);

  useEffect(() => {
    const loggedInUsername = sessionStorage.getItem('driverUsername');

    if (loggedInUsername) {
      setDriverUsername(loggedInUsername);
    } else {
      // No username found in sessionStorage, redirect to login
      history.replace('/driverLogin');
    }
  }, [history]);

  useEffect(() => {
    const fetchDriverProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/drivers?username=${driverUsername}`);
        const data = await response.json();
        //setDriverProfile(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (driverUsername) {
      fetchDriverProfile();
    }
  }, [driverUsername]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('driverUsername');
    sessionStorage.clear();
    history.replace('/driverLogin');
  };

  const welcomeStyle = {
    textAlign: 'center',
    color:'blue',
    fontSize: '30px',
  };

  return (
    <div>
      <welcome style={welcomeStyle}>Welcome to your dashboard</welcome>      <div className='sidebar'>

        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <img
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                boxShadow: '0 0 0 2px red, 0 0 0 4px white, 0 0 0 6px black',
              }}
              src={Logo}
              alt="Logo"
            />
            <div>
              <span style={{ fontStyle: 'italic', color: 'blue' }}>fleet</span>
              <span style={{ color: 'red', marginLeft: '2px' }}>O</span>
              <span style={{ marginLeft: '-2px', fontStyle: 'italic', WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>B</span>
              <span style={{ color: 'black' }}>N</span>
            </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/driver/Home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/driver/ViewNotification" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">View-Notification</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/driver/ManageFuelLog" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="car">fuel-request </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/driver/SendTripReport" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">SendTripReport</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/driver/fuelRequestPermission" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">fuel requests permission</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/driver/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">View Profile</CDBSidebarMenuItem>
              </NavLink>
             
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </li>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
     
    </div>
  );
};

export default DriverNavbar;
