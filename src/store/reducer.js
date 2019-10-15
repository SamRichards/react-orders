import { ACTIONS, TAB_MAPPING } from '../constants';
import { filterRows } from '../utils';

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
                loading: false,
                filteredCurrentOrders: action.payload.orders[TAB_MAPPING[state.tab].lookUpKey].data
            }
        case ACTIONS.FILTER_TABLE:
            return {
                ...state,
                tab: action.payload,
                filteredCurrentOrders: filterRows(state.orders.orders[TAB_MAPPING[action.payload].lookUpKey].data, state.search)
            }
        case ACTIONS.SEARCH: {
            return {
                ...state,
                search: action.payload,
                filteredCurrentOrders: filterRows(state.orders.orders[TAB_MAPPING[state.tab].lookUpKey].data, action.payload)
            }
        }
        default:
            return state;
    }
};
