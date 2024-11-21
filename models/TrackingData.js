import mongoose from 'mongoose';

const trackSchema = mongoose.Schema({
    
    driverName: {
        type: String,
        required: true
    },

    VIN: {
        type: String,
        required: true
    },


    VehicleType: {
        type: String,
        required: true
    },


    longtude: {
        type: String,
        required: true
    },


    latitude: {
        type: String,
        required: true
    },

    dispatcher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dispatcher'
    },

    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        unique: true
    },

  /*  driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        unique: true
    },*/

});

const Track = mongoose.model('Track', trackSchema);
export default Track;
