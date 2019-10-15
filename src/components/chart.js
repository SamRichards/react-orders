import React from 'react';
import PropTypes from "prop-types";
import { Bar } from "@nivo/bar";
import styled from "styled-components";

const ChartWrapper = styled.div`
    display: flex;
    padding: 30px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
`;


export const Chart = ({chartData}) => {
    const chartProperties = {
        width: 500,
        height: 320,
        data: chartData,
        keys: ["value"],
        indexBy: "key",
        colors: ["#7fcdbb", "#f47560"],
        colorBy: "value",
        margin: {
            top: 10,
            right: 10,
            bottom: 30,
            left: 80
        }
    };

    return (
        <ChartWrapper>
            <Bar
                {...chartProperties}
            />
        </ChartWrapper>
    )
}

Chart.propTypes = {
    chartData: PropTypes.arrayOf(PropTypes.object)
};
