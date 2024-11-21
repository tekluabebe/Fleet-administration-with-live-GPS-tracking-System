import './App.css';
import './components/Navbar.css';
import './Admin/component/Navbar.css';
import Home from './Admin/components/Home';
import AdminNavbarr from '../Admin/components/Navbar';
import VehicleForm from '../Admin/components/VehiclesRegistration';
import EmployeeForm from '../Admin/components/RegisterEmployee';
import EmployeeList from '../Admin/components/EmployeeList';
import DeptRegistration from '../Admin/components/deptRegistration';
import DeptList from '../Admin/components/deptlist';
import DriverRegistration from '../Admin/components/driverRegistration';
import DriverList from '../Admin/components/driverList';
import VehicleList from '../Admin/components/VehicleList';
import DispatcherRegistration from '../Admin/components/dispatcher';
import DispatchertList from '../Admin/components/dispatcherList';
import MechanicsRegistration from '../Admin/components/mechanics';
import MechanicsList from '../Admin/components/mechanicsList';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Login from "./components/Login";
import DriverLogin from './components/DriverLogin';
import DispatcherLogin from './components/DispatcherLogin';
import EmployeeLogin from './components/EmployeeLogin';
import MechanicsLogin from './components/MechanicsLogin';
import DeptHeadOfficerLogin from './components/DeptHeadOfficerLogin';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import SendTripReport from '../driver/components/SendTripReport';
import ManageFuelLog from '../driver/components/ManageFuelLog';
import ViewNotification from '../driver/components/ViewNotification';
import Home from '../driver/components/Home';
import driverNavbarr from '../driver/components/Navbar';
import Home from '../employee/components/Home';
import employeeNavbarr from '../employee/Components/Navbar';
import RequestPermition from '../employee/components/RequestPermition';
import RequestForm from '../employee/components/FormPage';
import ViewMaintenanceNotification from '../mechanics/components/ViewMiantenanceNotification';
import Home from '../mechanics/components/Home';
import MechanicsNavbar from '../mechanics/components/Navbar';

function App() {
  return (
   <div className="App">
   <Router>
   <Navbar/>
   <MechanicsNavbar/>
   <AdminNavbarr/>
   <driverNavbarr/>
   <employeeNavbarr/>
      <Switch>
      <Route  exact path="/" component={Home}/>      
      <Route exact path= "/DriverLogin" component={DriverLogin}/>
      <Route exact path= "/DispatcherLogin" component={DispatcherLogin}/>
      <Route exact path= "/EmployeeLogin" component={EmployeeLogin}/>
      <Route exact path= "/MechanicsLogin" component={MechanicsLogin}/>
      <Route exact path= "/DeptHeadOfficerLogin" component={DeptHeadOfficerLogin}/>
      <Route  exact path="/Admin/ " component={Home}/>      
      <Route exact path= "/AdminLogin" component={AdminLogin}/>
      <Route exact path= "/Admin/VehicleForm" component={VehicleForm}/>
      <Route exact path= "/Admin/EmployeeForm" component={EmployeeForm}/>
      <Route exact path= "/Admin/EmployeeList" component={EmployeeList}/>
      <Route exact path= "/Admin/DeptRegistration" component={DeptRegistration}/>
      <Route exact path= "/Admin/DeptList" component={DeptList}/>
      <Route exact path= "/Admin/DriverRegistration" component={DriverRegistration}/>
      <Route exact path= "/Admin/DriverList" component={DriverList}/>
      <Route exact path= "/Admin/VehicleList" component={VehicleList}/>
      <Route exact path= "/Admin/DispatcherRegistration" component={DispatcherRegistration}/>
      <Route exact path= "/Admin/DispatchertList" component={DispatchertList}/>
      <Route exact path= "/Admin/MechanicsRegistration" component={MechanicsRegistration}/>
      <Route exact path= "/Admin/MechanicsList" component={MechanicsList}/>
      <Route  exact path="/driver/ " component={Home}/>      
      <Route exact path= "/driver/SendTripReport" component={SendTripReport}/>
      <Route exact path= "/driver/ManageFuelLog" component={ManageFuelLog}/>
      <Route exact path= "/driver/ViewNotification" component={ViewNotification}/>
      <Route exact path= "/employee/" component={Home}/>
      <Route exact path= "/employee/RequestPermition" component={RequestPermition}/>
      <Route exact path= "/employee/RequestForm" component={RequestForm}/>
      <Route exact path="/machanics/ " component={Home}/>
      <Route exact path= "/mechanics/ViewMaintenanceNotification" component={ViewMaintenanceNotification}/>
      
     </Switch>
  </Router>
   </div>
  );
}

export default App;


    



