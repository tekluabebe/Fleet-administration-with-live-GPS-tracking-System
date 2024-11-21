import './App.css';
import './components/Navbar.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ManageLubricant from "./components/ManageLubricant";
import SendMaintenanceReport from "./components/SendMaintenanceReport";
import ViewNotification from "./components/ViewNotification";
import Navbarr from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
   <div className="App">
    <Router>
    <Navbarr/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/ManageLubricant" component={ManageLubricant}/>
        <Route  exact path= "/SendMaintenanceReport" component={SendMaintenanceReport}/>
        <Route  exact path= "/ViewNotification" component={ViewNotification}/>
      </Switch>
    </Router>
    
  
   </div>
  );
}

export default App;
