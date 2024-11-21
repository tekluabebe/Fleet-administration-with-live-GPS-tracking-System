import express from 'express';
import { getDrivers, createDriver, updateDriver,deleteDriver,driverLogin, getDriverByUsername} from '../controllers/Driver-control.js';

const driverRouter = express.Router();





driverRouter.post('/login', driverLogin);
driverRouter.get('/', getDrivers);
driverRouter.post('/', createDriver);
driverRouter.put('/:id', updateDriver);
driverRouter.delete('/:id', deleteDriver);
driverRouter.get('/drivers', getDriverByUsername);

export default driverRouter;


