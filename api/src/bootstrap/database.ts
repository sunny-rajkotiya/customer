import { connect } from 'mongoose';
import Customer from '../models/Customer';
import seed from './seed'
export async function connectDB() {
    const connection = await connect('mongodb://root:password@customermongo:27017', {
        useNewUrlParser: true,
    });


    await Customer.collection.drop()
    await Customer.collection.insertMany(seed);
    
    return connection
}
