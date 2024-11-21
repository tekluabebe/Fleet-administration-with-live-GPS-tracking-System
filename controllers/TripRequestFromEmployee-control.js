import Request from "../models/TripRequestFromEmployee.js";
//import syncDriverStatusWithDispatcherStatus from '../middleware/syncDriverStatusWithDispatcherStatus.js';
//import checkDriverStatus from '../middleware/checkDriverStatus.js';

export const getRequestFromEmployees = async (req, res, next) => {
  try {
    const tripRequests = await Request.find();
    res.status(200).json({ tripRequests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve requests from employees" });
  }
};




















export const createRequestFromEmployee = async (req, res, next) => {
  try {
    const { representativeName, tripRoute } = req.body;

    // Check if a trip request with the same representative name and trip route exists
    const existingRequest = await Request.findOne({
      representativeName: representativeName,
      'tripRoute.departureDate': tripRoute.departureDate,
      'tripRoute.destinaton': tripRoute.destinaton,
      'tripRoute.returnDate': tripRoute.returnDate,
    });

    if (existingRequest) {
      // A trip request with the same representative name and trip route already exists
      const errorMessage = `Trip already requested by ${existingRequest.representativeName}`;
      res.status(409).json({ error: errorMessage });
    } else {
      // Create the new request
      const newRequest = new Request(req.body);
      await newRequest.save();

      res.status(200).json(newRequest);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the request.' });
  }
};




















export const updateRequestFromEmployee = async (req, res, next) => {
  const { id } = req.params;
  const updatedRequestData = req.body;

  try {
    /*// Apply the middleware to synchronize driver status
    await syncDriverStatusWithDispatcherStatus(req, res, async () => {
      // Check if the driver is free before updating the request
      await checkDriverStatus(req, res, async () => {
      here here here 
      });
    });*/

        const updatedRequest = await Request.findByIdAndUpdate(
          id,
          updatedRequestData,
          {
            new: true,
          }
        );

        if (!updatedRequest) {
          return res.status(404).json({ message: "Request from employee not found" });
        }

        res.status(200).json({message: "successfully updated",updatedRequest});



  } catch (error) {
   // if (error.message === 'The driver is not ready at the moment. Please check driver detail!') {
     // res.status(400).json({ error: error.message });
  //  } else {
      console.log(error);
      res.status(500).json({ message: "Failed to update request from employee" });
    }
  //}
};



















export const deleteRequestFromEmployee = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedRequest = await Request.findByIdAndDelete(id);

    if (!deletedRequest) {
      return res.status(404).json({ message: "Request from employee not found" });
    }

    res.status(200).json({ message: "Request from employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete request from employee" });
  }
};
