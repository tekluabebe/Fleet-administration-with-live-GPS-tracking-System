import Driver from "../models/Driver.js";
//import updateDriverStatusAsTripReportCompleted from '../middleware/updateDriverStatusAsTripReportCompleted.js';



export const getDrivers = async (req, res, next) => {

  try {
    const drivers = await Driver.find();
    res.status(200).json({ drivers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve drivers" });
  }
};



export const driverLogin = async (req, res, next) => {
  try {
    const { driverUsername, password } = req.body;
    const driver = await Driver.findOne({ driverUsername });
    //const driverUsername= sessionStorage.getItem(driver)

    if (!driver) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (driver.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    //sessionStorage.setItem('driverUsername', driver.driverUsername);

      res.status(200).json({ message: "Login successful", driver });
      console.log(driver);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to perform driver login" });
  }
};








export const createDriver = async (req, res, next) => {
  try {
    const { driverUsername, drivingLicense, vehicleToBeAssigned } = req.body;
    const errors = [];

    // Check if the adminid is provided
    // if (!adminid) {
    //   errors.push("You are not authorized to register a driver!");
    // }

    // Check if the provided username already exists
    const existingUsername = await Driver.findOne({ driverUsername });
    if (existingUsername) {
      errors.push("The username already exists. Please try again with a different username!");
    }

    
    // Check if the provided license number already exists
    if (drivingLicense && drivingLicense.licenseNumber) {
      const existingLicenseNumber = await Driver.findOne({ "drivingLicense.licenseNumber": drivingLicense.licenseNumber });
      if (existingLicenseNumber) {
        const { firstName, lastName } = existingLicenseNumber.driverFullName;
        const driverName = `${firstName} ${lastName}`;
        errors.push(`This License Number already exists and belongs to ${driverName}. Please try again!`);
      }
    }

    // Check if the provided plate number already exists
    if (vehicleToBeAssigned && vehicleToBeAssigned.plateNumber) {
      const existingDriverWithVehicle = await Driver.findOne({ "vehicleToBeAssigned.plateNumber": vehicleToBeAssigned.plateNumber });
      if (existingDriverWithVehicle) {
        const { firstName, lastName } = existingDriverWithVehicle.driverFullName;
        const { plateNumber } = existingDriverWithVehicle.vehicleToBeAssigned;
        const driverName = `${firstName} ${lastName}`;
        errors.push(`This vehicle with plate number ${plateNumber} is already assigned to ${driverName}.`);
      }
    }

    if (errors.length > 0) {
      return res.status(409).json({ errors });
    }

    const newDriverData = { ...req.body };
    const newDriver = await Driver.create(newDriverData);
    res.status(201).json(newDriver);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create driver" });
  }
};







export const updateDriver = async (req, res, next) => {
  const { id } = req.params;
  const updatedDriverData = req.body;
 // await updateDriverStatusAsTripReportCompleted(req, res, next);
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(id, updatedDriverData, {
      new: true,
    });

    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json(updatedDriver);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update driver" });
  }
};


export const deleteDriver = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedDriver = await Driver.findByIdAndDelete(id);

    if (!deletedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json({ message: "Driver deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete driver" });
  }
};



export const getDriverByUsername = async (req, res, next) => {
  const { username } = req.query;

  try {
    const driver = await Driver.findOne({ driverUsername: username });

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json(driver);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve driver" });
  }
};
