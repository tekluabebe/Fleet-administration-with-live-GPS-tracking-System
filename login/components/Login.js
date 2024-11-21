import React, { useState } from 'react';
import './AdminLogin.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleRoleChange = (e) => {
  //   setRole(e.target.value);
  // };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
        // Redirect to the appropriate dashboard based on the role
        switch (data.role) {
          case "admin":
            history.push("/admin/dashboard");
            break;
          case "dispatcher":
            history.push("/dispatcher/dashboard");
            break;
          case "deptheadofficer":
            history.push("/deptheadofficer/dashboard");
            break;
          case "driver":
            history.push("/driver-dashbaord");
            break;
          case "mechanic":
            history.push("/mechanic/dashboard");
            break;
          case "employee":
            history.push("/employee/dashboard");
            break;
          default:
            console.log("Invalid role");
            break;
        }
      } else {
        // Login failed
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="admin-login-container">
      <form className="login-table" onSubmit={handleLogin}>
        <h1>Welcome To Login page</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">Username:</label>
              </td>
              <td>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} required/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Role:</label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Login;
