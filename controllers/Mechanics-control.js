import Mechanics from "../models/Mechanics.js";

export const getMechanics = async (req, res, next) => {
  try {
    const mechanics = await Mechanics.find();
    res.status(200).json({ mechanics });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve mechanics" });
  }
};





export const createMechanic = async (req, res, next) => {
  try {

    // const { mechanicUsername } = req.body;
    // if (!mechanicUsername) {
    //   return res.status(401).json({ message: "You are not authorized to register a mechanics. Please provide the adminid." });
    // }

    //const existingUsername = await Mechanics.findOne({ mechanicUsername });
    // if (existingUsername) {
    //   return res.status(409).json({ message: "The username already exists. Please try again with a different username." });
    // }

    const newMechanic = await Mechanics.create(req.body);
    res.status(201).json(newMechanic);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create mechanic" });
  }
};




export const mechanicsLogin = async (req, res, next) => {
  try {
    const { mechanicUsername, password } = req.body;
    const mechanic = await Mechanics.findOne({ mechanicUsername });

    if (!mechanic) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (mechanic.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful" , mechanic});
    console.log(mechanic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to perform driver login" });
  }
};


export const updateMechanic = async (req, res, next) => {
  const { id } = req.params;
  const updatedMechanicData = req.body;

  try {
    const updatedMechanic = await Mechanics.findByIdAndUpdate(
      id,
      updatedMechanicData,
      {
        new: true,
      }
    );

    if (!updatedMechanic) {
      return res.status(404).json({ message: "Mechanic not found" });
    }

    res.status(200).json(updatedMechanic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update mechanic" });
  }
};


export const deleteMechanic = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedMechanic = await Mechanics.findByIdAndDelete(id);

    if (!deletedMechanic) {
      return res.status(404).json({ message: "Mechanic not found" });
    }

    res.status(200).json({ message: "Mechanic deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete mechanic" });
  }
};


export const getMechanicByUsername = async (req, res, next) => {
  const { mechanicUsername } = req.query;

  try {
    const mechanic = await Mechanics.findOne({ mechanicUsername });

    if (!mechanic) {
      return res.status(404).json({ message: "mechanics not found" });
    }

    res.status(200).json(mechanic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve driver" });
  }
};