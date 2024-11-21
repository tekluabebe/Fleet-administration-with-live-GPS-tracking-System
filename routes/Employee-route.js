import express from 'express';
import { getEmployee, createEmployee, updateEmployee,deleteEmployee, loginEmployee , getEmployeeByUsername} from '../controllers/Employee-control.js';

const employeeRouter = express.Router();

employeeRouter.get('/', getEmployee);
employeeRouter.post('/', createEmployee);
employeeRouter.put('/:id', updateEmployee);
employeeRouter.delete('/:id', deleteEmployee);
employeeRouter.post('/login', loginEmployee);
employeeRouter.get('/employees', getEmployeeByUsername);


export default employeeRouter;