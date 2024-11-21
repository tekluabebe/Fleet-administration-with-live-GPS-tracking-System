import mongoose from 'mongoose';

const driverReportSchema = mongoose.Schema({

    driverDetail: {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true,
        },
        licenseNumber: {
         type: String,
          required: true
        }
    },



    vehicleDetail: {
        plateNumber: {
            type: String,
            required: true,
      
        },
        vehicleMake: {
            type: String,
            required: true,
      
        }
    },



    tripRoute: {
        departureDate: {
            type: Date,
            required: true,
        },
        destinaton: {
            type: String,
            required: true,
        },
        returnDate: {
            type: Date,
            required: true,
        }
    },


    tripStatus: {
        type: String,
        required: true,
        enum: ['pending', 'In Progress', 'Completed', 'abort']
    },

    vehicleStatus: {
        type: String,
        required: true,
        enum: ['moving', 'needs to be repaire', 'ready']
    },

    dispatcherStatus: {
        type: String,
        enum: ['pending', 'seen'],
    }
});

const Report = mongoose.model('Report', driverReportSchema);
export default Report;
