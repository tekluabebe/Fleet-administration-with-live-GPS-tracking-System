import Maintain from "../models/ReqDispatcherToMechanics.js";
import Mechanics from '../models/Mechanics.js';


export const getMaintenanceRequests = async (req, res, next) => {
  try {
    const maintenanceRequests = await Maintain.find();
    res.status(200).json({ maintenanceRequests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve maintenance requests" });
  }
};







export const createMaintenanceRequest = async (req, res, next) => {
  try {
    const { plateNumber, schedule } = req.body;
    const errors = [];

    // Check if both plateNumber and schedule fields exist in the request
    if (!plateNumber|| !schedule) {
      errors.push("plateNumber and schedule fields are required.");
    }

    // Check if a maintenance request with the same plateNumber and schedule already exists
    const existingMaintenanceRequest = await Maintain.findOne({ plateNumber: plateNumber, 'schedule.start': schedule.start, 'schedule.finish': schedule.finish });
    if (existingMaintenanceRequest) {
      errors.push("The vehicle is already requested to be maintained");
    }

    // Check if the mechanic is available
    // const mechanic = await Mechanics.findOne({ mechanicUsername: req.body.mechanicUsername });
    // if (!mechanic) {
    //   errors.push("Mechanic not found!");
    // } else if (mechanic.mechanicsStatus !== 'free') {
    //   errors.push("Mechanic is busy!");
    // }

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Create the maintenance request
    const newMaintenanceRequest = await Maintain.create(req.body);
    res.status(201).json(newMaintenanceRequest);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create maintenance request" });
  }
};












export const updateMaintenanceRequest = async (req, res, next) => {
  const { id } = req.params;
  const updatedMaintenanceRequestData = req.body;

  try {
    const updatedMaintenanceRequest = await Maintain.findByIdAndUpdate(
      id,
      updatedMaintenanceRequestData,
      {
        new: true,
      }
    );

    if (!updatedMaintenanceRequest) {
      return res.status(404).json({ message: "Maintenance request not found" });
    }

    res.status(200).json(updatedMaintenanceRequest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update maintenance request" });
  }
};











export const deleteMaintenanceRequest = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedMaintenanceRequest = await Maintain.findByIdAndDelete(id);

    if (!deletedMaintenanceRequest) {
      return res.status(404).json({ message: "Maintenance request not found" });
    }

    res.status(200).json({ message: "Maintenance request deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete maintenance request" });
  }
};