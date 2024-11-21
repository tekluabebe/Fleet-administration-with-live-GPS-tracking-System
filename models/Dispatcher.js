import mongoose from 'mongoose';

const dispatcherSchema = mongoose.Schema({


    dispatcherUsername: {
        type: String,
        required: true,
        unique: true
    },
    
    dispatcherFullName: {
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

const Dispatcher = mongoose.model('Dispatcher', dispatcherSchema);

export default Dispatcher;
