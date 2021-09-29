import {
    SET_WEB3_INSTANCE,
    ADD_CONTRACT
} from '../constants';

const defaultState = {
    web3: {},
    contracts: []
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_WEB3_INSTANCE:
            return{
                ...state,
                web3: action.payload
            };

        case ADD_CONTRACT:
            const contracts = {...state}.contracts;
            contracts[action.payload.key] = action.payload.contract;

            return{
                ...state,
                contracts: contracts
            };

        default:
            return {...state};

    }

};

export default reducer;
