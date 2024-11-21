import mongoose from 'mongoose';

const fuelSchema = mongoose.Schema({

    driverName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
    },


    VehicleMake: {
        type: String,
       
    },

    feulType: {
        type: String,
        required: true
    },

    tripRoute: {

        departureDate: {
            type: Date
        },
        destinaton: {
            type: String
        },
        returnDate: {
            type: Date
        }
    },

    km: {
        type: String,
        required: true
    },    



    volume: {
        type: String,
        required: true
    },


    fuelStatus: {
        type: String,
        enum: ['take cupon', 'taken','pending'],
           default:"pending",  

    }

});

const Fuel = mongoose.model('Fuel', fuelSchema);
export default Fuel;
