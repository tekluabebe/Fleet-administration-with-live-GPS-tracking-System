import Vehicle from "../models/Vehicle.js";




export const getVehicle = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ vehicles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve vehicles" });
  }
};







export const createVehicle = async (req, res, next) => {
  try {
    const { VIN, vehicleLicensePlate } = req.body;
    const errors = [];

    // Check if the adminid is provided
    // if (!adminid) {
    //   errors.push("You are not authorized to register a vehicle!");
    // }

    // Validate VIN length
    if (VIN.length < 11 || VIN.length > 17) {
      errors.push("VIN should be between 11 and 17 characters.");
    }

    // Validate vehicleLicensePlate code
    if (vehicleLicensePlate.code !== "4") {
      errors.push("Please insert a valid organizational code for the license plate.");
    }

    // Check if VIN already exists
    const existingVIN = await Vehicle.findOne({ VIN });
    if (existingVIN) {
      errors.push("VIN already exists. Please use a different VIN.");
    }

    // Check if plate number already exists
    const existingPlateNumber = await Vehicle.findOne({ "vehicleLicensePlate.plateNumber": vehicleLicensePlate.plateNumber });
    if (existingPlateNumber) {
      errors.push("Plate number already exists. Please use a different plate number.");
    }

    if (errors.length > 0) {
      return res.status(409).json({ errors });
    }
    

    const newVehicleData = { ...req.body };
    const newVehicle = await Vehicle.create(newVehicleData);
    return res.status(201).json(newVehicle);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to create vehicle" });
  }
};






















export const updateVehicle = async (req, res, next) => {
  const { id } = req.params;
  const updatedVehicleData = req.body;

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, updatedVehicleData, {
      new: true,
    });

    if (!updatedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json(updatedVehicle);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update vehicle" });
  }
};






export const deleteVehicle = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);

    if (!deletedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete vehicle" });
  }
};