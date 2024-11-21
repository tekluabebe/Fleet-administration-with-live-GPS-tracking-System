import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check username and password against database or API
    // If valid, set user as authenticated and redirect to admin dashboard
    // Otherwise, display error message
    // Example code to redirect to admin dashboard:
  
  };

  return (
    <div className="admin-login-container">
      <form className="login-table" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="username">Username:</label></td>
              <td><input type="text" id="username" value={username} onChange={handleUsernameChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password:</label></td>
              <td><input type="password" id="password" value={password} onChange={handlePasswordChange} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Login</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AdminLogin;
