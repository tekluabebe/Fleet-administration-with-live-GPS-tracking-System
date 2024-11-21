import Report from "../models/DriverTripReport.js";

export const getDriverTripReports = async (req, res, next) => {
  try {
    const driverTripReports = await Report.find();
    res.status(200).json({ driverTripReports });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve driver trip reports" });
  }
};


export const createDriverTripReport = async (req, res, next) => {
  try {
    const newDriverTripReport = await Report.create(req.body);
    res.status(201).json(newDriverTripReport);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create driver trip report" });
  }
};














export const updateDriverTripReport = async (req, res, next) => {
  const { id } = req.params;
  const updatedDriverTripReportData = req.body;

  try {
    const updatedDriverTripReport = await Report.findByIdAndUpdate(
      id,
      updatedDriverTripReportData,
      { new: true }
    );

    if (!updatedDriverTripReport) {
      return res.status(404).json({ message: "Driver trip report not found" });
    }

    res.status(200).json(updatedDriverTripReport);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update driver trip report" });
  }
};










export const deleteDriverTripReport = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedDriverTripReport = await Report.findByIdAndDelete(id);

    if (!deletedDriverTripReport) {
      return res.status(404).json({ message: "Driver trip report not found" });
    }


    
    res.status(200).json({ message: "Driver trip report deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete driver trip report" });
  }
};
