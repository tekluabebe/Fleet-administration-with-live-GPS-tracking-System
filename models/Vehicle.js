import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
  VIN: {
    type: String,
    required: true,
    unique: true,
  },
  vehicleMake: {
    type: String,
    required: true,
  },

  vehicleModel: {
    type: String,
    required: true,
  },
  Year: {
    type: Date,
    required: true,
  },
  vehicleLicensePlate: {
    code: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    plateNumber: {
      type: String,
      unique: true,
      required: true,
    },
  },
  detail: {
    bodyType: {
       type: String,
      required:true,
    },
    color: {
       type: String,
       required:true,
      },
    engineSize: {
       type: String,
       required:true, 
    },
  },
  GPS_ID: {
    type: String,
    required:true,
  },
  


  vehicleStatus: {
    type: String,
    required: true,
    enum: ['unassigned', 'ready', 'moving', 'under repair', 'needs to be repaired'],
    default:"unassigned",
  },
  // adminid: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Admin',
  // },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
