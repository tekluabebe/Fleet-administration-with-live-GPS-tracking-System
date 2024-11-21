import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({

    adminUsername: {
        type: String,
        required: true,
        unique: true
    },

    adminFullName: {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true,
        }
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
