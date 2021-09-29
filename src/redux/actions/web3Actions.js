import {
    SET_WEB3_INSTANCE,
    ADD_CONTRACT
} from '../constants';

export const set_web3_instance = web3Instance => {
    return{
        type: SET_WEB3_INSTANCE,
        payload: web3Instance
    };
}

export const add_contract = (key, contractInstance) => {
    return{
        type: ADD_CONTRACT,
        payload: {
            key,
            contract: contractInstance
        }
    };
}
