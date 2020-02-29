
import { storeCustomers,storeCustomer } from '../actionCreators/CustomerActionCreators'
import { AppThunkType } from '../types/GenericTypes'
import { apiURL } from '../Config'

export const fetchCustomers = (offset:number = 0):AppThunkType  => async (dispatch,getState) => {
    const oldState = getState()
    const limit:number = 10
    if(oldState.customer.total && offset >= oldState.customer.total){
       return
    }
    if((offset+limit) <= oldState.customer.fetchedTill){
        return
     }

    const fetchReponse = await fetch(`${apiURL}/api/customers?offset=${offset}&limit=${limit}`)
    const jsonResponse = await fetchReponse.json()    
    dispatch(storeCustomers(jsonResponse.customers,limit,offset,jsonResponse.total))
    
}

export const fetchCustomer = (id:string):AppThunkType  => async (dispatch,getState) => {
  
    const fetchReponse = await fetch(`${apiURL}/api/customer/${id}`)
    const jsonResponse = await fetchReponse.json()    
    dispatch(storeCustomer(jsonResponse))
    
}