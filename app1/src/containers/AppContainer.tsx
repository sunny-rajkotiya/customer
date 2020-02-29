import { connect,ConnectedProps } from "react-redux";
import {fetchCustomers,fetchCustomer} from '../thunkActions/CustomersThunkActionCreators'
import { RootState } from "../reducers";
import {App} from '../components/App'
import React from 'react'

const mapState = (state:RootState) => ({state})
const mapDispatch = {
    fetchCustomers,fetchCustomer
}

const AppConnector = connect(mapState,mapDispatch)

export type StoreProps = ConnectedProps<typeof AppConnector>

export const AppContainer = AppConnector((props)=>(
    <App {...props}></App>
))

