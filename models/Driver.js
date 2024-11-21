import mongoose from 'mongoose';

const driverSchema = mongoose.Schema({

  driverUsername: {
    type: String,
    required: true,
    unique: true
  },

  

  driverFullName: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true,
      }
  },


  drivingLicense: {
    licenseNumber: {
      type: String,
      unique: true,
      required: true
    },
    expirationDate: {
      type: Date,
      required: true
    },
    expire: {
      type: String,
      // default: 'renewed'
      required: true
    },
  },

  

  vehicleToBeAssigned: {

    plateNumber: {
       type: String,
       required: true
    },
    vehicleMake: {
       type: String,
       required: true
  }
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

  address: {
      type: String,
      required: true
  },
  driverStatus: {
    type: String,
    required: true,
    enum: ['free', 'driving', 'pending']
  },




  // adminid: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Admin'
  // }
});





const Driver = mongoose.model('Driver', driverSchema);

export default Driver;
