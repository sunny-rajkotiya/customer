import { CustomerEntity } from "./CustomerEntity"

export const STORE_CUSTOMERS = 'STORE_CUSTOMERS'
export const STORE_CUSTOMER = 'STORE_CUSTOMER'
export type StoreCustomersType = {
    type: typeof STORE_CUSTOMERS,
    customers: CustomerEntity[],
    limit: number,
    offset: number,
    total: number | null

}

export type StoreCustomerType = {
    type: typeof STORE_CUSTOMER,
    customer: CustomerEntity

}

export type CustomerActionTypes = StoreCustomersType | StoreCustomerType