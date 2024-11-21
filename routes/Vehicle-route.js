import express from 'express';
import { getVehicle, createVehicle, updateVehicle, deleteVehicle } from '../controllers/Vehicle-control.js';

const vehicleRouter = express.Router();

vehicleRouter.get('/',  getVehicle);
vehicleRouter.post('/', createVehicle);
vehicleRouter.put('/:id', updateVehicle);
vehicleRouter.delete('/:id', deleteVehicle);

export default vehicleRouter;