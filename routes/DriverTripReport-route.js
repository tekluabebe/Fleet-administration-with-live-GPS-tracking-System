import express from 'express';
import {getDriverTripReports, createDriverTripReport, updateDriverTripReport,deleteDriverTripReport} from '../controllers/DriverTripReport-control.js';

const reportRouter = express.Router();

reportRouter.get('/', getDriverTripReports);
reportRouter.post('/', createDriverTripReport);
reportRouter.put('/:id', updateDriverTripReport);
reportRouter.delete('/:id', deleteDriverTripReport);

export default reportRouter;


