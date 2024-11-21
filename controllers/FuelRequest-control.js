import Fuel from "../models/FuelRequest.js";

export const getFuelRequests = async (req, res, next) => {
  try {
    const fuelRequests = await Fuel.find();
    res.status(200).json({ fuelRequests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve fuel requests" });
  }
};




export const createFuelRequest = async (req, res, next) => {
  try {
    const { driverName, tripRoute } = req.body;

    // Check if a fuel request with the same driver name and trip route already exists
    const existingFuelRequest = await Fuel.findOne({
      'driverName.firstName': driverName.firstName,
      'driverName.lastName': driverName.lastName,
      'tripRoute.departureDate': tripRoute.departureDate,
      'tripRoute.destinaton': tripRoute.destinaton,
      'tripRoute.returnDate': tripRoute.returnDate
    });

    if (existingFuelRequest) {
      return res.status(400).json({ message: 'Fuel already requested' });
    }

    const newFuelRequest = await Fuel.create(req.body);
    res.status(201).json(newFuelRequest);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Failed to create fuel request' });
  }
};




export const updateFuelRequest = async (req, res, next) => {
  const { id } = req.params;
  const updatedFuelRequestData = req.body;

  try {
    const updatedFuelRequest = await Fuel.findByIdAndUpdate(
      id,
      updatedFuelRequestData,
      {
        new: true,
      }
    );

    if (!updatedFuelRequest) {
      return res.status(404).json({ message: "Fuel request not found" });
    }

    res.status(200).json(updatedFuelRequest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update fuel request" });
  }
};

export const deleteFuelRequest = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedFuelRequest = await Fuel.findByIdAndDelete(id);

    if (!deletedFuelRequest) {
      return res.status(404).json({ message: "Fuel request not found" });
    }

    res.status(200).json({ message: "Fuel request deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete fuel request" });
  }
};