import express from 'express';
import { getAdmin, createAdmin,updateAdmin,deleteAdmin, loginAdmin} from '../controllers/Admin-control.js';

const addRouter = express.Router();

addRouter.get('/', getAdmin);
addRouter.post('/', createAdmin);
addRouter.put('/:id', updateAdmin);
addRouter.delete('/:id', deleteAdmin);
addRouter.post('/login', loginAdmin);




export default addRouter;