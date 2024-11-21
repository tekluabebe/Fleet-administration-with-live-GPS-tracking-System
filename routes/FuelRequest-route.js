import express from 'express';
import { getFuelRequests, createFuelRequest,updateFuelRequest,deleteFuelRequest} from '../controllers/FuelRequest-control.js';

const fuelRouter = express.Router();

fuelRouter.get('/', getFuelRequests);
fuelRouter.post('/', createFuelRequest);
fuelRouter.put('/:id', updateFuelRequest);
fuelRouter.delete('/:id', deleteFuelRequest);




export default fuelRouter;