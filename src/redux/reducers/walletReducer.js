import {
    // REQUEST_CONNECTION,
    SET_METAMASK_INSTALLED,
    SET_NETWORK_ID,
    SET_CURRENT_ACCOUNT,
    SET_CONNECTION,
    SET_CONNECTED_TO_OPERATING_NETWORK
} from '../constants';



const defaultState = {
    isMetamaskInstalled: false,
    currentAccount: '',
    networkId: null,
    isConnected: false,
    connectedToOperatingNetwork: false
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

        case SET_CONNECTED_TO_OPERATING_NETWORK:
            return{
                ...state,
                connectedToOperatingNetwork: action.payload
            };

        default:
            return {...state};
    }

};

export default reducer;
