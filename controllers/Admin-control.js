import Admin from "../models/Admin.js";




export const getAdmin = async (req, res, next) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({ admins });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to retrieve Admins" });
  }
};



export const createAdmin = async (req, res, next) => {
  try {
    const newAdmin = await Admin.create(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create admin" });
  }
};


export const loginAdmin = async (req, res, next) => {
  


  try {
     const { adminUsername, password } = req.body;
    // Find the admin by username
    const admin = await Admin.findOne({ adminUsername });
    
    if (!admin) {
      return res.status(404).json({ message: 'Admin is not found' });
    }

    // Check if the password is correct
    //const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    if (admin.password!==password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a token or session to authenticate the admin

    // Return success response
    res.status(200).json({ message: 'Admin login successful', adminId: admin._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to login admin' });
  }
};

export const updateAdmin = async (req, res, next) => {
  const { id } = req.params;
  const updatedAdminData = req.body;

  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(id, updatedAdminData, {
      new: true,
    });

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(updatedAdmin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update admin" });
  }
};





export const deleteAdmin = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete admin" });
  }
};







