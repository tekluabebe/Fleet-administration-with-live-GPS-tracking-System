import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//const [isLoggedIn, setIsLoggedIn] = useState(false);

//import Home from './mechanics/components/Home';
import Home from './login/components/Home';
import EmployeeHome from './employee/components/Home';
import AdminHome from './Admin/components/Home';
import DeptHome from './departmentheadofficer/Components/Home';
import AdminNavbarr from './Admin/components/Navbar';
import VehicleForm from './Admin/components/VehiclesRegistration';
import EmployeeForm from './Admin/components/RegisterEmployee';
import EmployeeList from './Admin/components/EmployeeList';
import DeptRegistration from './Admin/components/deptRegistration';
import DeptList from './Admin/components/deptlist';
import DriverRegistration from './Admin/components/driverRegistration';
import DriverList from './Admin/components/driverList';
import VehicleList from './Admin/components/VehicleList';
import DispatcherRegistration from './Admin/components/dispatcher';
import DispatchertList from './Admin/components/dispatcherList';
import MechanicsRegistration from './Admin/components/mechanics';
import MechanicsList from './Admin/components/mechanicsList';
import Navbar from './login/components/Navbar';
import ViewNotifications from './departmentheadofficer/Components/Navigation';
import DriverLogin from './login/components/DriverLogin';
import EmployeeLogin from './login/components/EmployeeLogin';
import MechanicsLogin from './login/components/MechanicsLogin';
import DeptHeadOfficerLogin from './login/components/DeptHeadOfficerLogin';
import AdminLogin from './login/components/AdminLogin';
import SendTripReport from './driver/components/SendTripReport';
import ViewNotification from './driver/components/ViewNotification';
import ManageFuelLog from './driver/components/ManageFuelLog';
import EmployeeNavbarr from './employee/components/Navbar';
import RequestList from './employee/components/RequestPermition';
import RequestForm from './employee/components/FormPage';
import ViewProfiles from './employee/components/viewDetail';
import MaintenanceNotification from './mechanics/components/ViewMiantenanceNotification';
import YourProfile from './mechanics/components/mechanicProfile';
import MechanicsNavbar from './mechanics/components/Navbar';
import DriverNavbarr from './driver/components/Navbar';
import ViewFuelNotification from './driver/components/fuelRequestPermission.js';
import YourProfiles from './departmentheadofficer/Components/MyProfile';
import DeptNavbarr from './departmentheadofficer/Components/Navbar';
import DriverHome from './driver/components/DriverHome';
import MechanicsHome from './mechanics/components/Home';
import ViewProfile from './driver/components/profile';

//import  Navbar  from './dispatcher/components';
function App() {
  const handleLogin = () => {
    // Perform login logic here
    // You can navigate to the driver page after successful login using the useNavigate hook
    Redirect('/driver/Home');
    Redirect('./Admin')
  };

  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route exact path="/">
            
            <Navbar />
            <Home />
          </Route>
          
          <Route exact path="/DriverLogin">
          <Navbar />
            <DriverLogin handleLogin={handleLogin} />
            
          </Route>
          <Route exact path="/AdminLogin">
          <Navbar />
            <AdminLogin handleLogin={handleLogin} />
          </Route>
          <Route exact path="/EmployeeLogin">
          <Navbar />
            <EmployeeLogin handleLogin={handleLogin} />
          </Route>
          <Route exact path="/MechanicsLogin">
          <Navbar />
            <MechanicsLogin handleLogin={handleLogin} />
          </Route>
          <Route exact path="/DeptHeadOfficerLogin">
          <Navbar />
            <DeptHeadOfficerLogin handleLogin={handleLogin} />
          </Route>

          <Route path="/driver">
            <DriverNavbarr />
            <Switch>
              <Route  path="/driver/Home" component={DriverHome} />
              <Route  path="/driver/ViewNotification" component={ViewNotification} />
              <Route  path="/driver/SendTripReport" component={SendTripReport} />
              <Route  path="/driver/ManageFuelLog" component={ManageFuelLog} />
              <Route  path="/driver/profile" component={ViewProfile} />
              <Route  path="/driver/fuelRequestPermission" component={ViewFuelNotification} />

              {/* <Route path="/driver"> */}
              {/* <Redirect to="/driver/Home" replace /> */}
              {/* </Route> */}
            </Switch>
          </Route>


          <Route path="/departmentheadofficer">
            { <DeptNavbarr /> }
            <Switch>
              <Route exact path="/departmentheadofficer/Home" component={DeptHome} />
              <Route exact path="/departmentheadofficer/Navigation" component={ViewNotifications} />
              <Route exact path="/departmentheadofficer/MyProfile" component={YourProfiles} />
              {/* <Route path="/departmentheadofficer">
                <Redirect to="/departmentheadofficer/Home" replace />
              </Route> */}
            </Switch>
          </Route>

            <Route path="/employee">
            { <EmployeeNavbarr /> }
            <Switch>
              <Route exact path="/employee/Home" component={EmployeeHome} />
              <Route exact path="/employee/RequestPermition" component={RequestList} />
              <Route exact path="/employee/FormPage" component={RequestForm} />
              <Route exact path="/employee/viewDetail" component={ViewProfiles} />

              {/* <Route path="/employee">
                <Redirect to="/employee/Home" replace />
              </Route> */}
            </Switch>
          </Route>
           

            <Route path="/mechanics">
            { <MechanicsNavbar /> }
            <Switch>
              <Route exact path="/mechanics/Home" component={MechanicsHome} />
              <Route exact path="/mechanics/ViewMiantenanceNotification" component={MaintenanceNotification} />
              <Route exact path="/mechanics/mechanicProfile" component={YourProfile} />

              {/* <Route path="/mechanics">
                <Redirect to="/mechanics/Home" replace />
              </Route> */}
            </Switch>
          </Route>

          <Route path="/Admin">
            <AdminNavbarr />
            <Switch>
              <Route exact path="/Admin/Home" component={AdminHome} />
              <Route exact path="/Admin/VehiclesRegistration" component={ VehicleForm} />
              <Route exact path="/Admin/RegisterEmployee" component={EmployeeForm} />
              <Route exact path="/Admin/EmployeeList" component={EmployeeList} />
              <Route exact path="/Admin/deptRegistration" component={DeptRegistration} />
              <Route exact path="/Admin/deptlist" component={DeptList} />
              <Route exact path="/Admin/driverRegistration" component={DriverRegistration} />
              <Route exact path="/Admin/driverList" component={DriverList} />
              <Route exact path="/Admin/VehicleList" component={VehicleList} />
              <Route exact path="/Admin/dispatcher" component={DispatcherRegistration} />
              <Route exact path="/Admin/dispatcherList" component={DispatchertList} />
              <Route exact path="/Admin/mechanics" component={MechanicsRegistration} />
              <Route exact path="/Admin/mechanicsList" component={MechanicsList} />
              <Route exact path="/Admin/VehicleList" component={VehicleList} />
              <Route exact path="/Admin/VehicleList" component={VehicleList} />
              <Route exact path="/Admin/VehicleList" component={VehicleList} />

              {/* <Route path="/Admin">
                <Redirect to="/Admin/Home" replace />
              </Route> */}
            </Switch>
          </Route>
          {/* ... Other routes */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
