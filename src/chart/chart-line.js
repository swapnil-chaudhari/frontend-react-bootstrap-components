import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import * as d3 from 'd3';

export const getPoints = (data, xScale, yScale) => {
    const fn = d3.line()
        .x(d => xScale(d))
        .y(d => yScale(d));

    return fn(data);
};

const ChartLine = ({ className, data, xScale, yScale }) => (
    <g>
        <path
            stroke="#000"
            className={ cx('ChartLine', className) }
            d={ getPoints(data, xScale, yScale) }
        />
    </g>
);

ChartLine.displayName = 'ChartLine';

ChartLine.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired
};

export default ChartLine;
