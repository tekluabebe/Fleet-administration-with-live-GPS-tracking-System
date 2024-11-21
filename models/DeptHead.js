import mongoose from 'mongoose';

const headSchema = mongoose.Schema({
    officerUsername: {
        type: String,
        required: true,
        unique: true
    },

    officerFullName: {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true,
        }
    },

    departmentName: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phoneNo: {
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

    // adminid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Admin'
    // }
});

const Head = mongoose.model('Head', headSchema);

export default Head;
