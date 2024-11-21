import mongoose from 'mongoose';
import Maintain from "../models/ReqDispatcherToMechanics.js";

const mechanicsSchema = mongoose.Schema({
    mechanicUsername: {
        type: String,
        required: true,
        unique: true
    },
    
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
    mechanicsStatus: {
      type: String,
      required:true,
      enum: ['free', 'at maintaining']
        
  },
  

    // adminid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Admin'
    // }
});


  

  

const Mechanics = mongoose.model('Mechanics', mechanicsSchema);
export default Mechanics;
