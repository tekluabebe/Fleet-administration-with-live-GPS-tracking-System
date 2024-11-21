import Employee from "../models/Employee.js";


export const getEmployee = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ employees });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve employees" });
  }
};


export const loginEmployee = async (req, res, next) => {
  try {
    const { employeeUsername, password } = req.body;
    
    // Find the employee by username
    const employee = await Employee.findOne({ employeeUsername });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Check if the password is correct
    if (employee.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Return success response
    res.status(200).json({ message: "Employee login successful", employeeId: employee._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login employee" });
  }
};



export const createEmployee = async (req, res, next) => {
  try {

    const { employeeUsername } = req.body;
    
    // if (!adminid) {
    //   return res.status(401).json({ message: "You are not authorized to create a user. Please provide the adminid." });
    // }

    const existingUsername = await Employee.findOne({ employeeUsername });
    if (existingUsername) {
      return res.status(409).json({ message: "The username already exists. Please try again with a different username." });
    }   

    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create employee" });
  }
};


export const updateEmployee = async (req, res, next) => {
  const { id } = req.params;
  const updatedEmployeeData = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      updatedEmployeeData,
      {
        new: true,
      }
    );


    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update employee" });
  }
};



export const deleteEmployee = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete employee" });
  }
};


export const getEmployeeByUsername = async (req, res, next) => {
  try {
    const { employeeUsername } = req.query;
    
    const employee = await Employee.findOne({ employeeUsername});
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json({ employee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve employee" });
  }
};
