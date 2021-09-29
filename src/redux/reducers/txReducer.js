import {
    TX_LOADING,
    TX_FAILED,
    TX_SUCCESS
} from '../constants';

const defaultState = {
    MINT_TX: {
        loading: false,
        error: false,
        success: false,
        resData: {}
    },
    genericTx: {
        loading: false,
        error: false,
        success: false
    }
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case TX_LOADING:
            return{
                ...state,
                [action.txType]:{
                    loading: true,
                    error: false,
                    success: false
                }
            };

        case TX_FAILED:
            return{
                ...state,
                [action.txType]: {
                    loading: false,
                    error: true,
                    success: false,
                    resData: action.payload
                }
            };

            case TX_SUCCESS:
                return{
                    ...state,
                    [action.txType]: {
                        loading: false,
                        error: false,
                        success: true,
                        resData: action.payload
                    }
                };

        default:
            return {...state};
    }
};

export default reducer;
