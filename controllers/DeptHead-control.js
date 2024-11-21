import Head from "../models/DeptHead.js";


export const getDepartmentHeads = async (req, res, next) => {
  try {
    const departmentHeads = await Head.find();
    res.status(200).json({ departmentHeads });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve department heads" });
  }
};





export const createDepartmentHead = async (req, res, next) => {
  try {
    const { officerUsername, email } = req.body;


    // if (!adminid) {
    //   return res.status(401).json({ message: "You are not authorized to create a officer. Please provide the adminid." });
    // }

    const existingUsername = await Head.findOne({ officerUsername });
    if (existingUsername) {
      return res.status(409).json({ message: "The username already exists. Please try again with a different username." });
    }

    

    const newDepartmentHead = await Head.create(req.body);
    res.status(201).json(newDepartmentHead);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create department head" });
  }
};

export const updateDepartmentHead = async (req, res, next) => {
  const { id } = req.params;
  const updatedHeadData = req.body;

  try {
    const updatedDepartmentHead = await Head.findByIdAndUpdate(
      id,
      updatedHeadData,
      { new: true }
    );

    if (!updatedDepartmentHead) {
      return res.status(404).json({ message: "Department head not found" });
    }

    res.status(200).json(updatedDepartmentHead);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update department head" });
  }
};





export const deptLogin = async (req, res, next) => {
  try {
    const { officerUsername, password } = req.body;
    const dept = await Head.findOne({ officerUsername });

    if (!dept) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (dept.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Store the officerUsername in sessionStorage
    //req.sessionSto.officerUsername = officerUsername;

    res.status(200).json({ message: "Login successful", dept });
    console.log(dept);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to perform driver login" });
  }
};





export const deleteDepartmentHead = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedDepartmentHead = await Head.findByIdAndDelete(id);

    if (!deletedDepartmentHead) {
      return res.status(404).json({ message: "Department head not found" });
    }

    res.status(200).json({ message: "Department head deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete department head" });
  }
};


export const getHeadByUsername = async (req, res, next) => {
  const { officerUsername } = req.query;

  try {
    const head = await Head.findOne({ officerUsername });

    if (!head) {
      return res.status(404).json({ message: "head not found" });
    }

    res.status(200).json(head);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve driver" });
  }
};