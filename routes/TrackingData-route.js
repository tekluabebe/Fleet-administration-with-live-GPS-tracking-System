import express from 'express';
import { getTrackingData, createTrackingData, updateTrackingData,deleteTrackingData } from '../controllers/TrackingData-control.js';

const trackRouter = express.Router();

trackRouter.get('/', getTrackingData);
trackRouter.post('/', createTrackingData);
trackRouter.put('/:id', updateTrackingData);
trackRouter.delete('/:id', deleteTrackingData);


export default trackRouter;