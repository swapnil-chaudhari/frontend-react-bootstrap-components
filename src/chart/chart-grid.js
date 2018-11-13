import PropTypes from 'prop-types';
import React from 'react';

const ChartGrid = ({
    xTicks,
    yTicks,
    xScale,
    yScale,
    xOffset,
    width,
    height
}) => (
    <g className="ChartGrid">
        {
            yTicks.map((tick) => (
                <line
                    key={ `grid-y-line-${tick}` }
                    className="ChartGrid-y-line"
                    x1={ xOffset }
                    x2={ width + xOffset }
                    y1={ yScale(tick) }
                    y2={ yScale(tick) }
                />
            ))
        }
        {
            xTicks.map((tick) => (
                <line
                    key={ `grid-x-line-${tick}` }
                    className="ChartGrid-x-line"
                    x1={ xScale(tick) + xOffset }
                    x2={ xScale(tick) + xOffset }
                    y2={ height }
                />
            ))
        }
    </g>
);

ChartGrid.displayName = 'Grid';

ChartGrid.propTypes = {
    xTicks: PropTypes.array.isRequired,
    yTicks: PropTypes.array.isRequired,
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    xOffset: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
};

ChartGrid.defaultProps = {
    xOffset: 0
};

export default ChartGrid;
