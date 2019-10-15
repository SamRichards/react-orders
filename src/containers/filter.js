import { TextField } from 'material-ui';
import React, { useContext, useState } from 'react';

import { StoreContext } from '../store';
import { ACTIONS } from '../constants';

export const FilterContainer = () => {
    const { dispatch } = useContext(StoreContext);
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        dispatch({type: ACTIONS.SEARCH, payload: value});
    };

    return (
        <TextField
            onChange={handleChange}
            placeholder={'Search Sales Orders & Part Numbers here...'}
            value={search}
            style={{
                width: '100%'
            }}
        />
    )
}
