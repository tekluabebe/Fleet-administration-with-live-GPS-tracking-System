import express from 'express';
//import maintainVehicleStatusMiddleware from '../middleware/maintainVehicleStatusMiddleware.js';
//import updateMechanicStatusWhenMaintained from '../middleware/updateMechanicStatusWhenMaintained.js';

import { getMaintenanceRequests, createMaintenanceRequest, updateMaintenanceRequest,deleteMaintenanceRequest } from '../controllers/ReqDispatcherToMechanics-control.js';

const dispRequestRouter = express.Router();

dispRequestRouter.get('/', getMaintenanceRequests);
dispRequestRouter.post('/', createMaintenanceRequest);
dispRequestRouter.put('/:id', updateMaintenanceRequest);
dispRequestRouter.delete('/:id', deleteMaintenanceRequest);


export default dispRequestRouter;