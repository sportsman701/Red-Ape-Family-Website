import {
    SET_SECTION
} from '../constants';

const defaultState = {
    section: "HOME"
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_SECTION:
            return{
                ...state,
                section: action.payload
            };        

        default:
            return {...state};

    }

};

export default reducer;
