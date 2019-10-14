import React, { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import { CircularProgress } from 'material-ui';
import styled from 'styled-components';

import { fetchOrders } from '../api/api';
import { StoreContext } from '../store/store';
import { ACTIONS } from '../constants';

const LoadingContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OrdersContainer = ({children}) => {
    const { state, dispatch } = useContext(StoreContext);

    useEffect(() => {
        dispatch({type: ACTIONS.LOADING});
        fetchOrders.then((response) => {
            dispatch({type: ACTIONS.LOADED, payload: response});
        })
    }, [dispatch]);

    if (state.loading || !state.orders) {
        return (
            <LoadingContainer>
                <CircularProgress />
            </LoadingContainer>
        )
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

OrdersContainer.propTypes = {
    children: PropTypes.node
};
