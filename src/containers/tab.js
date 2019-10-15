import { Paper, Tabs, Tab } from 'material-ui';
import React, { useContext } from 'react';

import { StoreContext } from '../store';
import { ACTIONS, TAB_MAPPING } from '../constants';

export const TabContainer = () => {
    const { state: { orders: { orders }, tab }, dispatch } = useContext(StoreContext);

    const handleChange = (newValue) => {
        dispatch({type: ACTIONS.FILTER_TABLE, payload: newValue});
    };

    return (
        <Paper>
            <Tabs value={tab} onChange={handleChange}>
                {
                    Object.keys(TAB_MAPPING).map((key) => {
                        const tab = TAB_MAPPING[key];

                        return (
                            <Tab label={`${tab.name}: ${orders[tab.lookUpKey].count}`} value={key} key={key} />
                        )
                    })
                }
            </Tabs>
        </Paper>
    )
}
