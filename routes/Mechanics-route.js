import express from 'express';
import { getMechanics, createMechanic, updateMechanic,deleteMechanic, mechanicsLogin, getMechanicByUsername  } from '../controllers/Mechanics-control.js';

const mechanicRouter = express.Router();

mechanicRouter.get('/', getMechanics);
mechanicRouter.post('/', createMechanic);
mechanicRouter.put('/:id', updateMechanic);
mechanicRouter.delete('/:id', deleteMechanic);
mechanicRouter.post('/login', mechanicsLogin);
mechanicRouter.get('/mechanics', getMechanicByUsername);


export default mechanicRouter;