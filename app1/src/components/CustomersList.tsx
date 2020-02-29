import { StatelessComponent, useEffect } from "react";
import {StoreProps} from '../containers/AppContainer'
import React from "react"
import {Customer} from './Customer'
import { EmptyListWrapper } from "./EmptyListWrapper";
import {TableContainer,Table,TableHead,TableBody,TableRow,Paper,TableCell, makeStyles} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    pagination: {
        height: "20px",
        paddingTop: "16px",
        paddingBottom: "16px",
        lineHeight: "20px",
        paddingLeft: "16px"
    },
    nextIcon: {
        height: "10px"
    }
  }));

export const CustomersList:StatelessComponent<Pick<StoreProps,"state"|"fetchCustomers">> = ({state,fetchCustomers}) =>  {
    const classes = useStyles();
    useEffect(()=>{
        fetchCustomers()
    },[])

    const customers = Object.values(state.customer.customers)
    return (
       
            <EmptyListWrapper list={customers} message="No customers yet.">
               <TableContainer component={Paper}>
                    <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Employee ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((customer)=>(<Customer {...customer}/>))}
                            </TableBody>
                           
                    </Table>
                    <div className={classes.pagination}>
                        Showing {customers.length} out of {state.customer.total}
                        {!(state.customer.total && (state.customer.fetchedTill>=state.customer.total))?
                            <ArrowForwardIosIcon className={classes.nextIcon} onClick={()=>fetchCustomers(customers.length)}></ArrowForwardIosIcon>
                        :''}
                    </div>
                </TableContainer>
            </EmptyListWrapper>
     
    )
      
}