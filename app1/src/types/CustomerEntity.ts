export interface CustomerAddressEntity {
    address1: string,
    address2: string,
    city: string,
    state: string,
    country: string
}
export interface CustomerEntity {
    _id: string,
    name: string,
    age: number
    employeeID: string,
    addresses?: CustomerAddressEntity[]
}