import { StoreCustomersType,StoreCustomerType,STORE_CUSTOMERS,STORE_CUSTOMER } from "../types/CustomerActionTypes";
import { CustomerEntity } from "../types/CustomerEntity";

export function storeCustomers(customers:CustomerEntity[],limit=10,offset=0,total:null|number=null):StoreCustomersType {
    return {
        type: STORE_CUSTOMERS,
        customers,limit,offset,total
        
    }
}

export function storeCustomer(customer:CustomerEntity):StoreCustomerType {
    return {
        type: STORE_CUSTOMER,
        customer  
    }
}