import { CustomerState, CustomersHashedEntity } from "../types/StoreStateType";
import { CustomerActionTypes,StoreCustomerType,StoreCustomersType,STORE_CUSTOMERS,STORE_CUSTOMER } from "../types/CustomerActionTypes";
const defaultState: CustomerState = { 
    fetchedTill: 0,
    total: null,
    customers: {}
}

function storeCustomers(state:CustomerState,action:StoreCustomersType){
    return {
        ...state,
       fetchedTill: state.fetchedTill>action.offset+action.limit? state.fetchedTill: action.offset+action.limit,
       total: action.total,
       customers: Object.assign({},state.customers,action.customers.reduce<CustomersHashedEntity>((customersHash,customer)=>{
        customersHash[customer._id] = customer
        return customersHash
       },{}))
    } 
}

function storeCustomer(state:CustomerState,action:StoreCustomerType){
    return {
        ...state,
       customers: {...state.customers,...{[action.customer._id]:action.customer}}
    } 
}

export default function(state = defaultState,action:CustomerActionTypes){
   
    switch(action.type){
        
        case STORE_CUSTOMERS: 
            return  storeCustomers(state,action)
        case STORE_CUSTOMER: 
            return  storeCustomer(state,action)
        default:
            return state
    }
    
}