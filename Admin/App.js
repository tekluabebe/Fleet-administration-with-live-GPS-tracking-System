import './App.css';
import './components/Navbar.css';
import Home from "./components/Home";
import Navbarr from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import VehiclesRegistration from "./components/VehiclesRegistration";
import RegisterEmployee from "./components/RegisterEmployee"
import EmployeeList from './components/EmployeeList';
import deptRegistration from './components/deptRegistration';
import deptList from './components/deptlist';
import DriverRegistration from './components/driverRegistration';
import DriverList from './components/driverList';
import VehicleList from './components/VehicleList';
import DispatcherRegistration from './components/dispatcher';
import DispatchertList from './components/dispatcherList';
import MechanicsRegistration from './components/mechanics';
import MechanicsList from './components/mechanicsList';
function App() {
  return (
   <div className="App">
    <Router>
    <Navbarr/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/VehiclesRegistration" component={VehiclesRegistration}/>
        <Route  exact path="/VehicleList" component={VehicleList}/>
        <Route  exact path= "/RegisterEmployee" component={RegisterEmployee}/>
        <Route  exact path="/EmployeeList" component={EmployeeList}/>
        <Route  exact path="/deptRegistration" component={deptRegistration}/>
        <Route  exact path="/deptlist" component={deptList}/>
        <Route  exact path="/driverList" component={DriverList}/>
        <Route  exact path="/driverRegstration" component={DriverRegistration}/>
        <Route  exact path="/dispatcher" component={DispatcherRegistration}/>
        <Route  exact path="/dispatcherList" component={DispatchertList}/>
        <Route  exact path="/mechanics" component={MechanicsRegistration}/>
        <Route  exact path="/mechanicsList" component={MechanicsList}/>
      </Switch>
    </Router>
    
  
   </div>
  );
}

export default App;
