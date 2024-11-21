import Track from "../models/TrackingData.js";

export const getTrackingData = async (req, res, next) => {
  try {
    const trackingData = await Track.find();
    res.status(200).json({ trackingData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve tracking data" });
  }
};


















export const createTrackingData = async (req, res, next) => {
  try {
    const newTrackingData = await Track.create(req.body);
    res.status(201).json(newTrackingData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create tracking data" });
  }
};
























export const updateTrackingData = async (req, res, next) => {
  const { id } = req.params;
  const updatedTrackingData = req.body;

  try {
    const updatedData = await Track.findByIdAndUpdate(
      id,
      updatedTrackingData,
      {
        new: true,
      }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Tracking data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update tracking data" });
  }
};





















export const deleteTrackingData = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedData = await Track.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Tracking data not found" });
    }

    res.status(200).json({ message: "Tracking data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete tracking data" });
  }
};