import { RouterContext } from 'koa-router';
import Customer from '../models/Customer';

export async function fetchAllCustomers(ctx: RouterContext): Promise<void> {
    
    const limit = ctx.request.query.limit? +ctx.request.query.limit: 10
    const offset = ctx.request.query.offset? +ctx.request.query.offset: 0

    const customers = await Customer.find({},{"_id":1,"employeeID":2,"name":3,"age":4})
                    .skip(offset)
                    .limit(limit)
                    .exec()

    const total = await Customer.count({}).exec()
    ctx.body = {
        total,
        customers
    }
    
}

export async function fetchCustomer(ctx: RouterContext): Promise<void> {
    let customer = await Customer.findById(ctx.params.id).exec()
    if(customer){
        ctx.body = customer;
    } else {
        ctx.body = {
            
        }
    }
    
}


