import { CustomerEntity } from "../types/CustomerEntity";
import React, { StatelessComponent } from "react";
import { Link } from "react-router-dom";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {TableRow,TableCell} from '@material-ui/core';
export const Customer:StatelessComponent<CustomerEntity> = (customer) =>  (    
  <TableRow key={customer._id}>
    <TableCell>
        {customer.employeeID}
    </TableCell>
    <TableCell>
        {customer.name}
    </TableCell>
    <TableCell>
        {customer.age}
    </TableCell>
    <TableCell>
        <Link to={`/customers/${customer._id}`}><ImportContactsIcon/></Link>
    </TableCell>
  </TableRow>
);
