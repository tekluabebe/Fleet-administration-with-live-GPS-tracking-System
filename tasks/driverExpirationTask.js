import cron from 'node-cron';
import moment from 'moment';
import Driver from '../models/Driver.js';

// Schedule the task to run every day at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
  try {
    const drivers = await Driver.find();

    drivers.forEach(async (driver) => {
      const expirationDate = driver.drivingLicense.expirationDate;
      const currentDate = moment().startOf('day');
      const isExpired = moment(expirationDate).startOf('day').isBefore(currentDate);
      const expireStatus = isExpired ? 'expired' : 'renewed';

      // Update the driver's expire field
      driver.drivingLicense.expire = expireStatus;
      await driver.save();
    });

    console.log('Driver expiration status updated successfully.');
  } catch (error) {
    console.log('Failed to update driver expiration status:', error);
  }
});
