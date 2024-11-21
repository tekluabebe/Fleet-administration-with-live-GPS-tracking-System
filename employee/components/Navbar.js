import React,{useEffect,useState} from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink, useHistory} from 'react-router-dom';
//import {Navbar} from 'react-bootstrap';
import Logo from '../static/Logo1.png';
const EmployeeNavbarr = () => {
  const history = useHistory();
  const [employeeUsername, setEmployeeUsername] = useState('');
  //const [driverProfile, setDriverProfile] = useState(null);

  useEffect(() => {
    const loggedInUsername = sessionStorage.getItem('employeeUsername');

    if (loggedInUsername) {
      setEmployeeUsername(loggedInUsername);
    } else {
      // No username found in sessionStorage, redirect to login
      history.replace('/employeeLogin');
    }
  }, [history]);

  useEffect(() => {
    const fetchEmplyeeProfile = async () => {

      try {
        const response = await fetch(`http://localhost:5000/api/employees?username=${employeeUsername}`);
        const data = await response.json();
        //setDriverProfile(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (employeeUsername) {
      fetchEmplyeeProfile();
    }
  }, [employeeUsername]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('employeeUsername');
    sessionStorage.clear();
    history.replace('/employeeLogin');
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
              <span style={{ fontStyle: 'italic', color: 'blue' }}>fleet</span>
              <span style={{ color: 'red', marginLeft: '2px' }}>O</span>
              <span style={{ marginLeft: '-2px', fontStyle: 'italic', WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>B</span>
              <span style={{ color: 'black' }}>N</span>
            </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/employee/Home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/employee/FormPage" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="road">RequestForm</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/employee/RequestPermition" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation mark">Request-permition</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/employee/viewDetail" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation mark">View-Detail</CDBSidebarMenuItem>
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

export default EmployeeNavbarr;