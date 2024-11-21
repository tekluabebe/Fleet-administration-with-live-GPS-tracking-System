import express from 'express';
import {getDepartmentHeads,createDepartmentHead,updateDepartmentHead, deleteDepartmentHead, deptLogin, getHeadByUsername} from '../controllers/DeptHead-control.js';

const headRouter = express.Router();

headRouter.get('/', getDepartmentHeads);
headRouter.post('/', createDepartmentHead);
headRouter.put('/:id', updateDepartmentHead);
headRouter.delete('/:id', deleteDepartmentHead);
headRouter.post('/login', deptLogin);
headRouter.get('/head', getHeadByUsername);


export default headRouter;
