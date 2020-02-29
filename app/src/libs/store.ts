import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducers';

/**
 * createStore creates store from appReducer
 */
const composeEnhancers = ((window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) as typeof compose || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
