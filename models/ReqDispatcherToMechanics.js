import mongoose from 'mongoose';
import Mechanics from '../models/Mechanics.js';


const dispToMechSchema = mongoose.Schema({
    plateNumber: {
        type: String,
        required: true
    },
    vehicleMaker: {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },    
    // mechanicUsername: {
    //     type: String,
    //     required: true
    // },
    mechanicFullName: {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true,
        }
    },
    

    schedule: {
        start:{
            type: Date,
            required: true
            },
        finish:{        
            type: Date,
            required: true
        }
    },

    maintainceStatus: {
        type: String,     
        enum: ['material needed','pending', 'under repair', 'maintained'],
        default: 'pending'
    }

});


const Maintain = mongoose.model('Maintain', dispToMechSchema);
export default Maintain;
