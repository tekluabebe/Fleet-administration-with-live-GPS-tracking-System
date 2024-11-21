import mongoose from 'mongoose'; 
const requestSchema = mongoose.Schema({ 
  departmentName: { 
    type: String, 
    required: true, 
  }, 
  representativeName: { 
    type: String, 
    required: true, 
  }, 
  workType: { 
    type: String, 
    required: true, 
  }, 
  noOfTravelers: { 
    type: Number, 
    required: true, 
  }, 
  tripRoute: { 
    departureDate: { 
      type: Date, 
      required: true, 
    }, 
    destination: { 
      type: String, 
      required: true, 
    }, 
    returnDate: { 
      type: Date, 
      required: true, 
    }, 
  }, 
 
  headStatus: { 
    type: String, 
    enum: ['pending', 'approved', 'disapprove'], 
    default: 'pending' 
  }, 
 
 
 
  driverDetail: { 
    firstName: { 
      type: String, 
       default: null 
    }, 
    lastName: { 
      type: String, 
      default: null 
    }, 
    licenseNumber: { 
      type: String, 
      default: null 
    }, 
  }, 
  vehicleDetail: { 
    plateNumber: { 
      type: String, 
      default: null 
    }, 
    vehicleMake: { 
      type: String, 
      default: null 
    }, 
  }, 
  km: { 
    type: String, 
    default: null 
  }, 
  dispatcherStatus: { 
    type: String, 
    enum: ['pending', 'assigned', 'suspend'], 
    default: 'pending' 
     
  }, 
  tripStatus: { 
    type: String, 
 
  }, 
}); 
 
 
 
const Request = mongoose.model('Request', requestSchema); 
export default Request; 