import * as Router from 'koa-router';
import { healthCheck,fetchAllCustomers,fetchCustomer } from '../contollers';

export default (router: Router): Router => {
    router.get('/health', healthCheck)
    router.get('/customer/:id',fetchCustomer)
    router.get('/customers', fetchAllCustomers)

    return router;
};
