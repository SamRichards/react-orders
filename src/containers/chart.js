import React, { useContext } from 'react';

import { StoreContext } from '../store'
import { Chart } from '../components/chart';

export const ChartContainer = () => {
    const { state: { filteredCurrentOrders } } = useContext(StoreContext);

    const openRowsCount = filteredCurrentOrders.filter((row) => {
        return row['openFlag'] === 'T';
    }).length;

    const chartData = [
        {
            key: 'Open',
            value: openRowsCount
        },
        {
            key: 'Closed',
            value: filteredCurrentOrders.length - openRowsCount
        }
    ];

    return (
        <Chart chartData={chartData} />
    )
}
