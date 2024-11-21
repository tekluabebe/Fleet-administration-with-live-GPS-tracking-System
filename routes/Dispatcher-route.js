import express from 'express';
import { getDispatchers, createDispatcher, updateDispatcher, deleteDispatcher ,loginDispatcher} from '../controllers/Dispatcher-control.js';

const dispatcherRouter = express.Router();

dispatcherRouter.get('/', getDispatchers);
dispatcherRouter.post('/', createDispatcher);
dispatcherRouter.put('/:id', updateDispatcher);
dispatcherRouter.delete('/:id', deleteDispatcher);
dispatcherRouter.post('/login', loginDispatcher);


export default dispatcherRouter;
