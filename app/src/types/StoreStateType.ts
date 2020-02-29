import { CustomerEntity } from "./CustomerEntity";

export interface CustomersHashedEntity {
    [id: string]: CustomerEntity
}
export interface CustomerState {
    customers: CustomersHashedEntity
    fetchedTill: number
    total: number | null
}