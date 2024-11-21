import React,{useEffect,useState} from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink, useHistory} from 'react-router-dom';
import Logo from '../static/Logo1.png';
import "../App.css";
const AdminNavbarr = () => {
  const history = useHistory();
  const [adminUsername, setAdminUsername] = useState('');
  //const [driverProfile, setDriverProfile] = useState(null);

  useEffect(() => {
    const loggedInUsername = sessionStorage.getItem('adminUsername');

    if (loggedInUsername) {
      setAdminUsername(loggedInUsername);
    } else {
      // No username found in sessionStorage, redirect to login
      history.replace('/AdminLogin');
    }
  }, [history]);

  useEffect(() => {
    const fetchAdminPrrofile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/admins?username=${adminUsername}`);
        const data = await response.json();
        //setDriverProfile(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (adminUsername) {
      fetchAdminPrrofile();
    }
  }, [adminUsername]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('adminUsername');
    sessionStorage.clear();
   
    history.replace('/AdminLogin');
    window.alert("successfully logged out");
  };

  const welcomeStyle = {
    textAlign: 'center',
    color:'blue',
    fontSize: '30px',
  };
  return (
      <div>
      {/* <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
          <Navbar.Brand className="app-logo" href="/">
              <img
                src={logo}
                width="40"
                height="50"
                className="d-inline-block align-center"
                alt="React Bootstrap logo"
              />{' '}
              FAS
          </Navbar.Brand>
      </Navbar> */}
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
                <span style={{ fontStyle: 'italic', color: 'blue'}}>fleet</span>
                <span style={{ color: 'red', marginLeft: '2px' }}>O</span>
                <span style={{ marginLeft: '-2px', fontStyle: 'italic', WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>B</span>
                <span style={{ color: 'black' }}>N</span>
              </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
             
              <NavLink exact to="/Admin/Home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Admin/RegisterEmployee" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Register-Employee</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Admin/EmployeeList" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">Employee list</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Admin/deptRegistration" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Register-deptheadofficer</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Admin/deptList" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">deptheadofficer list</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Admin/driverRegistration" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">driver-Registration</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/Admin/driverList" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">Driver-list</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/Admin/dispatcher" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Dispatcher-Registration</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/Admin/dispatcherList" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">Dispatcher-List</CDBSidebarMenuItem>
              </NavLink>
              
                            
              <NavLink exact to="/Admin/mechanics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">mechanics-Register</CDBSidebarMenuItem>
              </NavLink>
              
                            
              <NavLink exact to="/Admin/mechanicsList" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">mechanics-List</CDBSidebarMenuItem>
              </NavLink>
              


              <NavLink exact to="/Admin/VehiclesRegistration" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="car">Register-Vehicles</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Admin/VehicleList" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">list vehicles</CDBSidebarMenuItem>
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

export default AdminNavbarr;