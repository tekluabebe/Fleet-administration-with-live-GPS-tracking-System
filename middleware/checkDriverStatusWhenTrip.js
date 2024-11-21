import Driver from "../models/Driver.js";

// checkDriverStatusMiddleware.js

const checkDriverStatusWhenTrip = async (req, res, next) => {
  const { licenseNumber } = req.body;

  try {
    const driver = await Driver.findOne({ 'drivingLicense.licenseNumber': licenseNumber });

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    if (driver.driverStatus !== 'free') {
      return res.status(400).json({ message: "The driver is not ready at the moment. Please check driver details!" });
    }

    // Driver is free, proceed with the next middleware or route handler
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to check driver status" });
  }
};

export default checkDriverStatusWhenTrip;


