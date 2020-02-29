import React from 'react'
import {Provider} from 'react-redux'
import store from '../libs/store'

import {
    HashRouter as Router,
  } from "react-router-dom";
import {AppContainer} from '../containers/AppContainer';

export default () =>  (
    <Provider store={store}>
        <Router>
            <AppContainer></AppContainer>
        </Router>
    </Provider>
);
