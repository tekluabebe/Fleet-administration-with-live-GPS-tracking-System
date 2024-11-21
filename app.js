import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import './tasks/driverExpirationTask.js';





import addRouter from './routes/Admin-route.js';
import driverRouter from './routes/Driver-route.js';
import vehicleRouter from './routes/Vehicle-route.js';
import headRouter from './routes/DeptHead-route.js';
import dispatcherRouter from './routes/Dispatcher-route.js';
import reportRouter from './routes/DriverTripReport-route.js';
import employeeRouter from './routes/Employee-route.js';
import fuelRouter from './routes/FuelRequest-route.js';
import mechanicRouter from './routes/Mechanics-route.js';
import dispRequestRouter from './routes/ReqDispatcherToMechanics-route.js';
import empRequestRouter from './routes/TripRequestFromEmployee-route.js';
import trackRouter from './routes/TrackingData-route.js';





const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/api/admins', addRouter);
app.use('/api/drivers', driverRouter);
app.use('/api/vehicles', vehicleRouter);
app.use('/api/departmentHeads', headRouter);
app.use('/api/dispatchers', dispatcherRouter);
app.use('/api/driverTripReports', reportRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/fuelRequests', fuelRouter);
app.use('/api/mechanics', mechanicRouter);
app.use('/api/maintenanceRequests', dispRequestRouter);
app.use('/api/tripRequests', empRequestRouter);
app.use('/api/trackingData', trackRouter);






mongoose.connect
    ("mongodb+srv://yemongo:66654333@cluster0.qbk3vlm.mongodb.net/yefleet?retryWrites=true&w=majority")
    .then(() => app.listen(5000))
    .then(() => console.log("yefleet connected and it is running on port 5000!"))
    .catch((err) => console.log(err));




