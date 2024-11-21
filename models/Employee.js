import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    employeeUsername: {
        type: String,
        required: true,
        unique: true
    },

    employeeFullName: {
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
    departmentName: {
        type: String,
        required: true  
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    /*adminid: {
      type: mongoose.Schema.Types.ObjectId,
       ref: 'Admin'
    }*/
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
