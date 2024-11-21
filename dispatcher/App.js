import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Notification,  Sidebar} from './components';
import {AddDriver, AddEmployee, AddGeofence, AddVehicles, CompletedTrip, CreateNewTrip, DriverList, 
  EmployeeList, GeneralSetting, GeofenceEvent, HistoryOfTracking, IncomeAndExpeense, InprogressTrip, 
  LiveLocation, PreviouseTrip, VehicleList, EmployeeDetail, DriverDetail, VehicleDetail, UrgentTripForm,LongTrip } from './pages';

import { useStateContext } from './context/ContextProvider';


const App = () => {
  
 const {activeMenu} = useStateContext();

  return (
    <div>
      <BrowserRouter>

          <div className="flex relative dark:bg-main-dark-bg">

            <div className="justify-between fixed right-4 bottom-4 " style={{zIndex:'1000'}}>

              <TooltipComponent content="Setting" position="Top">
                <button>
                  <FiSettings className="bg-yellow-500 rounded-full text-xl hover:bg-light-gray " />
                </button>
              </TooltipComponent>

            </div>


            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg 
              bg-white">
              <Sidebar/>
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg ">
              <Sidebar/>
              </div>
            )}

            <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`
            }>
            <div className="fixed md:static bg-gray-200 dark:bg-main-dark-bg navbar w-full md:w-fall">
              <Navbar />
            </div>

              
            


            <div>
            <Routes>
            {/* Home */ }
            <Route path="/" element= "Home" />
            <Route path="/Dashboard" element= "Home" />

            {/* Vehicles */ }
            <Route path="/Vehicles list" element={<VehicleList />}/>
            <Route path="/Add vehicles" element={<AddVehicles />}/>
            <Route path="/Vehicle detail" element={<VehicleDetail />}/>

            {/* Drivers */ }
            <Route path="/Driver list" element={<DriverList />}/>
            <Route path="/Add driver" element={<AddDriver />} />
            <Route path="/Driver detail" element={<DriverDetail />}/>

            {/* Trip */ }
            <Route path="/Create new trip" element={<CreateNewTrip />}/>
            <Route path="/Inprogress trip" element={<InprogressTrip />}/>
            <Route path="/Previouse trip" element={<PreviouseTrip />} />
            <Route path="/See urgent trip" element={<UrgentTripForm />} />
             <Route path="/See long trip" element={<LongTrip />} />
                

            {/* Employees */ }
            <Route path="/Employee list" element={<EmployeeList />}/>
            <Route path="/Add employee" element={<AddEmployee />} />
            <Route path="/Employee Detail" element={<EmployeeDetail />}/>

            {/* Tracking */ }
            <Route path="/Live location" element={<LiveLocation />}/>
            <Route path="/History of tracking" element={<HistoryOfTracking />}/>

            {/* Geofence */ }
            <Route path="/Geofence event" element={<GeofenceEvent />}/>
            <Route path="/Add geofence" element={<AddGeofence />}/>

            {/* Report */ }
            <Route path="/Completed trip" element={<CompletedTrip />}/>
            <Route path="/Income and expeense" element={<IncomeAndExpeense />}/>

            {/* Setting */ }
            <Route path="/General setting" element={<GeneralSetting />}/>
            
            {/* Notification */ }
            <Route path="/Notification" element={<Notification />}/>
          



            </Routes>
            </div>
            </div>



          </div>
        </BrowserRouter>
      


    </div>
  );
};

export default App;