
import Driver from "../models/Driver.js";
import Report from "../models/DriverTripReport.js";

 
 
 const updateDriverStatusAsTripReportCompleted = async (req, res, next) => {
    try {
      // Retrieve the license number from the report schema
      const { licenseNumber } = req.body.driverDetail;
  
      // Find the driver associated with the license number
      const driver = await Driver.findOne({ 'drivingLicense.licenseNumber': licenseNumber });
  
      if (!driver) {
        // If no driver is found, respond with an error message
        return res.status(404).json({ error: 'Driver not found' });
      }
  
      // Check if the trip status is "Completed" in the report schema
      if (req.body.tripStatus === 'Completed') {
        // Update the driver status to "free" in the driver schema
        driver.driverStatus = 'free';
        await driver.save();
      }
  
      // Continue to the next middleware or route handler
      next();
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error in updateDriverStatusMiddleware:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export default updateDriverStatusAsTripReportCompleted;