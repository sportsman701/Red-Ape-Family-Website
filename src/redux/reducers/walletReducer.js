import {
    // REQUEST_CONNECTION,
    SET_METAMASK_INSTALLED,
    SET_NETWORK_ID,
    SET_CURRENT_ACCOUNT,
    SET_CONNECTION
} from '../constants';

const defaultState = {
    isMetamaskInstalled: false,
    currentAccount: '',
    networkId: null,
    isConnected: false
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_METAMASK_INSTALLED:
            return{
                ...state,
                isMetamaskInstalled: action.payload
            };

        case SET_NETWORK_ID:
            return{
                ...state,
                networkId: action.payload
            };

        case SET_CURRENT_ACCOUNT:
            return{
                ...state,
                currentAccount: action.payload
            };

        case SET_CONNECTION:
            return{
                ...state,
                isConnected: action.payload
            };

        default:
            return {...state};
    }

};

export default reducer;
