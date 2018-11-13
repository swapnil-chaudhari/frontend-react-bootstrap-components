import PropTypes from 'prop-types';
import React from 'react';

const ChartYaxis = ({
    ticks,
    scale,
    x, y,
    width,
    height,
    tickWidth,
    tickFormat
}) => (
    <g className="ChartYaxis" transform={ `translate(${x}, ${y})` }>
        <line
            className="ChartYaxis-line"
            y1={ height }
            y2={ height }
            x1="0"
            x2={ width }
        />
        {
            ticks.map((tick) => {
                const scaledTick = scale(tick);

                return (
                    <g key={ tick }>
                        <line
                            className="ChartYaxis-tick"
                            y1={ scaledTick }
                            y2={ scaledTick }
                            x1="0"
                            x2={ tickWidth }
                        />
                        <text
                            className="ChartYaxis-label"
                            x="0"
                            y={ scaledTick }
                        >
                            { tickFormat(tick) }
                        </text>
                    </g>
                );
            })
        }
    </g>
);

ChartYaxis.displayName = 'ChartYaxis';

ChartYaxis.propTypes = {
    ticks: PropTypes.array,
    scale: PropTypes.func.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    tickWidth: PropTypes.number,
    tickFormat: PropTypes.func
};

ChartYaxis.defaultProps = {
    tickWidth: 6,
    tickFormat: (tick) => tick
};

export default ChartYaxis;
