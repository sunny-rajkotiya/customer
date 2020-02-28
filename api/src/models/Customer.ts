import { Schema, model } from 'mongoose';

export const CustomerAddressSchema: Schema = new Schema({
    address1: {
        type: String,
        required: true,
        unique: false,
    },
    address2: {
        type: String,
        required: true,
        unique: false,
    },
    city: {
        type: String,
        required: true,
        unique: false,
    },
    state: {
        type: String,
        required: true,
        unique: false,
    },
    country: {
        type: String,
        required: true,
        unique: false,
    }
})

export const CustomerCollectionSchema: Schema = new Schema({
    employeeID: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    age: {
        type: Number,
        required: true,
        unique: false,
    },
    addresses: {
        type: [CustomerAddressSchema],
        required: true,
        unique: false
    }
});

export default model('CustomerCollection', CustomerCollectionSchema);
