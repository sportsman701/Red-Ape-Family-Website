import {
    // REQUEST_CONNECTION,
    SET_NETWORK_ID,
    SET_METAMASK_INSTALLED,
    SET_CURRENT_ACCOUNT,
    SET_CONNECTION
} from '../constants';


export const set_networkd_id = id => {
    return{
        type: SET_NETWORK_ID,
        payload: id
    };
}

export const set_metamask_installed = value => {
    return{
        type: SET_METAMASK_INSTALLED,
        payload: value
    };
}

export const set_current_account = address => {
    return{
        type: SET_CURRENT_ACCOUNT,
        payload: address
    };
}

export const set_connection = value => {
    return{
        type: SET_CONNECTION,
        payload: value
    };
}

export const request_connection = () => {

    return async (dispatch, getState) => {

        const ethereum = window.ethereum;

        const {web3} = getState().web3Reducer;

        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            dispatch( set_connection(true) );
            dispatch( set_networkd_id( await web3.eth.getChainId() ) );
        } catch (e) {
            //throw e;
        }
    };
}
