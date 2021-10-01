import {
    // REQUEST_CONNECTION,
    SET_NETWORK_ID,
    SET_METAMASK_INSTALLED,
    SET_CURRENT_ACCOUNT,
    SET_CONNECTION,
    SET_CONNECTED_TO_OPERATING_NETWORK
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


const OPERATING_NETWORK = 1;
const set_connected_to_operating_network = value => {
    return{
        type: SET_CONNECTED_TO_OPERATING_NETWORK,
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

            const chainId = await web3.eth.getChainId();

            dispatch( set_networkd_id( chainId ) );
            dispatch( check_connected_to_operating_network() );
        } catch (e) {
            //throw e;
            console.log("ERROR REQUESTING CONNECTION",e);
        }
    };
}

export const request_change_network = (networkId) => {
    return async (dispatch, getState) => {



        try {

            // if(networkId != 1 || networkId != 4) throw {msg: 'network not supported'};
            // console.log('ok');
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x'+networkId.toString(16) }], // chainId must be in hexadecimal numbers
            });

        } catch (e) {
            console.log("ERROR REQUESTING CHANGE NETWORK",e);

        }


    };
}


export const check_connected_to_operating_network = () => {
    return (dispatch, getState) => {

        const currentNetworkId = getState().walletReducer.networkId;

        dispatch( set_connected_to_operating_network( currentNetworkId == OPERATING_NETWORK ) );
    }
}
