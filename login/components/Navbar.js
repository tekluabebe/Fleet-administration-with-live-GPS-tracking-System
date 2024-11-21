import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  return (
    <div className='fleet'>
      <div className='logo'>
      <span style={{ fontFamily: 'Arial', fontSize: '32px', color: '#fff' }}>
            Welcome To Oromia Broadcasting fleet administration system
          </span>    
     </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <span style={{ color: 'white' }} onClick={toggleLoginOptions}> login as</span>    
          </li>
          {showLoginOptions && (
            <ul className='login-options' >
              <li>
                <Link to='/AdminLogin'> Admin</Link>
              </li>
              <li>
                <Link to='/EmployeeLogin'>Employee</Link>
              </li>
              <li>
                <Link to='/DriverLogin'>Driver</Link>
              </li>
              <li>
                <Link to='/DeptHeadOfficerLogin'>Deptheadofficer</Link>
              </li>
              <li>
                <Link to='/MechanicsLogin'>Mechanics</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
