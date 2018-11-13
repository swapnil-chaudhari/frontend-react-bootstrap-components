import PropTypes from 'prop-types';
import React from 'react';
import './grouped-bar-chart-x-axis.scss';

const GroupedBarChartXaxis = ({ width, height, xOffset, yOffset }) => (
    <g className="GroupedBarChartXaxis">
        <line
            y1={ height - yOffset }
            y2={ height - yOffset }
            x1={ xOffset }
            x2={ width }
            className="GroupedBarChartXaxis-line"
        />
    </g>
);

GroupedBarChartXaxis.displayName = 'GroupedBarChartXaxis';

GroupedBarChartXaxis.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    xOffset: PropTypes.number.isRequired,
    yOffset: PropTypes.number.isRequired
};

export default GroupedBarChartXaxis;
