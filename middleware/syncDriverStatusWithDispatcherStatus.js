
import Driver from '../models/Driver.js';

const syncDriverStatusWithDispatcherStatus = async (next) => {
  if (this.dispatcherStatus === 'assigned') {
    const driver = await Driver.findOneAndUpdate(
      { 'drivingLicense.licenseNumber': this.driverDetail.licenseNumber },
      { $set: { driverStatus: 'pending' } },
      { new: true }
    );
    if (!driver) {
      throw new Error('Driver not found');
    }
  }
  next();
};

export default syncDriverStatusWithDispatcherStatus;

