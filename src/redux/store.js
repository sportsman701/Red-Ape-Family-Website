import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import txReducer from './reducers/txReducer';
import web3Reducer from './reducers/web3Reducer';
import walletReducer from './reducers/walletReducer';
import navbarReducer from './reducers/navbarReducer';

const reducer = combineReducers({
    txReducer,
    web3Reducer,
    walletReducer,
    navbarReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
