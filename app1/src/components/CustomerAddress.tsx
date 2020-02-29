import { CustomerAddressEntity} from "../types/CustomerEntity";
import React, { StatelessComponent } from "react";
import {TableRow,TableCell} from '@material-ui/core';
export const CustomerAddress:StatelessComponent<CustomerAddressEntity> = (address) =>  (    

 <TableRow>
     <TableCell>
     {address.address1}
    </TableCell>
    <TableCell>
     {address.address2}
    </TableCell>
    <TableCell>
     {address.city}
    </TableCell>
    <TableCell>
     {address.state}
    </TableCell>
    <TableCell>
     {address.country}
    </TableCell>
 </TableRow> 

);
