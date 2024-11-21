import Dispatcher from "../models/Dispatcher.js";

export const getDispatchers = async (req, res, next) => {
  try {
    const dispatchers = await Dispatcher.find();
    res.status(200).json({ dispatchers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve dispatchers" });
  }
};


export const loginDispatcher = async (req, res, next) => {
  try {
    const { dispatcherUsername, password } = req.body;

    // Find the dispatcher by username
    const dispatcher = await Dispatcher.findOne({ dispatcherUsername });

    // Check if the dispatcher exists
    if (!dispatcher) {
      return res.status(401).json({ message: "try Invalid username or password" });
    }

    // Check if the password is correct
    //const isValidPassword = await dispatcher.isValidPassword(password);
    if (dispatcher.password!==password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    

    // Generate a token for the authenticated dispatcher (you may use a JWT library)
    //const token = generateToken(dispatcher);

    res.status(200).json({ dispatcher });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};






export const createDispatcher = async (req, res, next) => {
  try {

    const {dispatcherUsername} = req.body;
    // if (!adminid) {
    //   return res.status(401).json({ message: "You are not authorized to create a dispatcher. Please provide the adminid." });
    // }

    const existingUsername = await Dispatcher.findOne({ dispatcherUsername });
    if (existingUsername) {
      return res.status(409).json({ message: "The username already exists. Please try again with a different username." });
    }

    const newDispatcher = await Dispatcher.create(req.body);
    res.status(201).json(newDispatcher);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create dispatcher" });
  }
};


export const updateDispatcher = async (req, res, next) => {
  const { id } = req.params;
  const updatedDispatcherData = req.body;

  try {
    const updatedDispatcher = await Dispatcher.findByIdAndUpdate(
      id,
      updatedDispatcherData,
      { new: true }
    );

    if (!updatedDispatcher) {
      return res.status(404).json({ message: "Dispatcher not found" });
    }

    res.status(200).json(updatedDispatcher);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update dispatcher" });
  }
};


export const deleteDispatcher = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedDispatcher = await Dispatcher.findByIdAndDelete(id);

    if (!deletedDispatcher) {
      return res.status(404).json({ message: "Dispatcher not found" });
    }

    res.status(200).json({ message: "Dispatcher deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete dispatcher" });
  }
};
