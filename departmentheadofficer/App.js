import './App.css';
import './Components/Navbar.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ViewNotifications from './Components/Navigation';
import Home from './Components/Home';
import Navbarr from './Components/Navbar';

function App() {
  return (
   <div className="App">
    <Router>
    <Navbarr/>
      <Switch>
      <Route  exact path="/" component={Home}/>
        <Route  exact path= "/ViewNotifications" component={ViewNotifications}/>
      </Switch>
    </Router>
    
  
   </div>
  );
}

export default App;
