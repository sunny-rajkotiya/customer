import React, { StatelessComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {StoreProps} from '../containers/AppContainer'
import { CustomersList } from './CustomersList';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { CustomerAddresses } from './CustomerAddresses';
import { AppBar, Toolbar, Typography, Grid,Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  logoLink: {
    color: "white",
    textDecoration:"none"
  },
  content: {
    paddingTop:"20px",
    paddingLeft:"10px"
  }
}));

export const App:StatelessComponent<StoreProps> = ({state,fetchCustomers,fetchCustomer}) => {
  const classes = useStyles();
  return (
    <div className="App">
      
        <AppBar position="static">
            <Toolbar>
              
              <Typography variant="h6" className={classes.title}>
                <Link to="/" className={classes.logoLink}>
                  Custmers App
                </Link>
              </Typography>
            
            </Toolbar>
        </AppBar>
        <Box pt="30px">
          <Grid container justify="center" >
            <Grid item xs={6}>
              <Switch>       
                  <Route exact path="/">
                    <Redirect to="/customers" />
                  </Route>
                  <Route path="/customers/:id">
                    <CustomerAddresses customers={state.customer.customers} fetchCustomer={fetchCustomer}></CustomerAddresses>
                  </Route>
                  <Route path="/customers">
                    <CustomersList state={state} fetchCustomers={fetchCustomers}></CustomersList>
                  </Route>  
              </Switch>
            </Grid>
          </Grid>
        </Box>
        
  
    </div>
  )
 } 
