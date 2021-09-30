import {
    SET_SECTION
} from '../constants';

export const set_section = section => {
    return{
        type: SET_SECTION,
        payload: section
    };
}
