// maintainVehicleStatusMiddleware.js
import Vehicle from '../models/Vehicle.js'; 

const maintainVehicleStatusMiddleware = async (req, res, next) => {
  if (req.body.maintenanceStatus === 'maintained') {
    try {
      const vehicle = await Vehicle.findOne({ 'vehicleLicensePlate.plateNumber': req.body.plateNumber });
      if (vehicle && (vehicle.vehicleStatus === 'under repair' || vehicle.vehicleStatus === 'needs to be repaired')) {
        vehicle.vehicleStatus = 'ready';
        await vehicle.save();
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error updating vehicle status:', error);
    }
  }
  next();
};

export default maintainVehicleStatusMiddleware;

