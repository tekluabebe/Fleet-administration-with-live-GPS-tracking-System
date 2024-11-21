import express from 'express';
//import checkDriverStatusWhenTrip from '../middleware/checkDriverStatusWhenTrip.js';
import { getRequestFromEmployees, createRequestFromEmployee, updateRequestFromEmployee,deleteRequestFromEmployee } from '../controllers/TripRequestFromEmployee-control.js';

const empRequestRouter = express.Router();

empRequestRouter.get('/', getRequestFromEmployees);
empRequestRouter.post('/',  createRequestFromEmployee);
empRequestRouter.put('/:id', updateRequestFromEmployee);
empRequestRouter.delete('/:id', deleteRequestFromEmployee);


export default empRequestRouter;