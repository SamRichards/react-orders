import { ACTIONS } from '../constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                ...state,
                orders: null,
                loading: true
            }
        case ACTIONS.LOADED:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        case ACTIONS.FILTER_TABLE:
            return {
                ...state,
                tab: action.payload
            }
        default:
            return state;
    }
};
