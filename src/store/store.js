import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { reducer } from './reducer';
import { TAB_MAPPING } from '../constants';

const initialState = {
    orders: null,
    filteredCurrentOrders: [],
    search: '',
    loading: false,
    tab: Object.keys(TAB_MAPPING)[0]
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.node
};
