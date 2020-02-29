import { connect } from 'mongoose';
import Customer from '../models/Customer';
import seed from './seed'
import { mongoDBURL } from '../Config';
export async function connectDB() {
    const connection = await connect(mongoDBURL, {
        useNewUrlParser: true,
    });


    await Customer.collection.drop()
    await Customer.collection.insertMany(seed);
    
    return connection
}
