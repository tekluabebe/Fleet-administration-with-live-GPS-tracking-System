import React,{useEffect, useState} from 'react'
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
import "../App.css";
const DeptNavbarr = () => {
  const history = useHistory();
  const [officerUsername, setOfficerUsername] = useState('');

  useEffect(() => {
    const loggedInUsername = sessionStorage.getItem('officerUsername');

    if (loggedInUsername) {
      setOfficerUsername(loggedInUsername);
    } else {
      history.replace('/DeptHeadOfficerLogin');
    }
  }, [history]);

  useEffect(() => {
    const fetchOfficerProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/departmentHeads?username=${officerUsername}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (officerUsername) {
      fetchOfficerProfile();
    }
  }, [officerUsername]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('officerUsername');
    sessionStorage.clear();
    history.replace('/DeptHeadOfficerLogin');
  };


  const welcomeStyle = {
    textAlign: 'center',
    color:'blue',
    fontSize: '30px',
  };

  

    return(
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
                <span style={{ fontStyle: 'italic', color: 'blue'}}>fleet</span>
                <span style={{ color: 'red', marginLeft: '2px' }}>O</span>
                <span style={{ marginLeft: '-2px', fontStyle: 'italic', WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>B</span>
                <span style={{ color: 'black' }}>N</span>
              </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/departmentheadofficer/Home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/departmentheadofficer/Navigation" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">View-Notification</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/departmentheadofficer/MyProfile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">View-profile</CDBSidebarMenuItem>
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
export default DeptNavbarr
