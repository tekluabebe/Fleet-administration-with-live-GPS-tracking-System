import './App.css';
import './Components/Navbar.css';
import Home from "./Components/Home";
import Navbarr from './Components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import RequestPermition from './Components/RequestPermition';
import FormPage from './Components/FormPage';
import ShortForm from './Components/ShortForm';
function App() {
  return (
   <div className="App">
    <Router>
    <Navbarr/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/FormPage" component={FormPage}/>
        <Route  exact path="/ShortForm" component={ShortForm}/>
        <Route  exact path="/RequestPermition" component={RequestPermition}/>
      </Switch>
    </Router>
    
  
   </div>
  );
}

export default App;
