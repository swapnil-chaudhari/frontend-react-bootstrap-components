import PropTypes from 'prop-types';
import React from 'react';
import * as d3 from 'd3';

const getArea = (line1, line2) => d3.area()
    .x(line2.x())
    .y0(line1.y())
    .y1(line2.y());

const getLine = (xScale, yScale) => d3.line()
    .x(d => xScale(d))
    .y(d => yScale(d));

const ChartShadedArea = ({
    data,
    line1Scale: { x: line1XScale, y: line1YScale },
    line2Scale: { x: line2XScale, y: line2YScale },
    clipPathId,
    fillColor
}) => (
    <g className="ChartShadedArea">
        <path
            clipPath={ clipPathId }
            d={
                getArea(
                    getLine(line1XScale, line1YScale),
                    getLine(line2XScale, line2YScale)
                )(data)
            }
            fill={ fillColor }
        />
    </g>
);

ChartShadedArea.displayName = 'ChartShadedArea';

ChartShadedArea.propTypes = {
    data: PropTypes.array.isRequired,
    line1Scale: PropTypes.shape({
        x: PropTypes.func.isRequired,
        y: PropTypes.func.isRequired
    }),
    line2Scale: PropTypes.shape({
        x: PropTypes.func.isRequired,
        y: PropTypes.func.isRequired
    }),
    clipPathId: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired
};

export default ChartShadedArea;
