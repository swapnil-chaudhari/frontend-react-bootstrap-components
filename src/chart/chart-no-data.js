import PropTypes from 'prop-types';
import React from 'react';

export const ChartNoData = (props) => {
    const { height, width, noDataText } = props;

    return (
        <g>
            <text
                className="NoGraphData"
                x={ width / 2 }
                y={ height / 2 }
                textAnchor="middle"
            >
                { noDataText }
            </text>
        </g>
    );
};

ChartNoData.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    noDataText: PropTypes.string.isRequired,
};

export default ChartNoData;
