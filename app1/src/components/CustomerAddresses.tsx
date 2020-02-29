

import React, { StatelessComponent, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CustomerAddress } from "./CustomerAddress";

import { CustomersHashedEntity } from "../types/StoreStateType";
import { CustomerAddressEntity } from "../types/CustomerEntity";
import { EmptyListWrapper } from "./EmptyListWrapper";
import { StoreProps } from "../containers/AppContainer";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {TableContainer,Table,TableHead,TableBody,TableRow,Paper,TableCell, Box} from '@material-ui/core';

function getAddresses(id:string|undefined,customers:CustomersHashedEntity){
    if(id!==undefined && customers[id]!==undefined && customers[id].addresses!==undefined){
        return customers[id].addresses as CustomerAddressEntity[]
    }

    return []
}

export const CustomerAddresses:StatelessComponent<{customers:CustomersHashedEntity} & Pick<StoreProps,"fetchCustomer">> = ({customers,fetchCustomer}) =>  {
    const {id} = useParams()
    let addresses:CustomerAddressEntity[] = getAddresses(id,customers)
    useEffect(()=>{
        id && fetchCustomer(id)
    },[])
    return (    
        <div>
            <Box paddingBottom="30px">
                <Link to="/customers"><ArrowBackIcon></ArrowBackIcon></Link>
            </Box>
            
            <EmptyListWrapper list={addresses} message="No address available for user.">
                <TableContainer component={Paper}>
                    <Table>
                            <TableHead>
                               
                                    <TableRow>
                                        <TableCell>Address 1</TableCell>
                                        <TableCell>Address 2</TableCell>
                                        <TableCell>City</TableCell>
                                        <TableCell>State</TableCell>
                                        <TableCell>Country</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                                {addresses.map((address)=>(<CustomerAddress {...address}/>))}
                            </TableBody>
                    </Table>
                </TableContainer>
            </EmptyListWrapper>
        </div>
    );
}
