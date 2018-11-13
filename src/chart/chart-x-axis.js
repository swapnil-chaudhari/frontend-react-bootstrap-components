import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const ChartXaxis = ({
    height,
    hover,
    ticks,
    width,
    xAxisOffset,
    scale,
    dateFormat
}) => {
    let hoverPosition;
    let hoverText;
    let hoverLabelXOffset;
    let hoverLabelYOffset;
    let hoverX;
    let hoverAnchor;

    if (hover) {
        hoverPosition = hover.hoverPosition;
        hoverText = hover.hoverText;
        hoverLabelXOffset = hover.hoverLabelXOffset || 0;
        hoverLabelYOffset = hover.hoverLabelYOffset || 0;
        hoverX = hoverPosition - xAxisOffset;
        hoverAnchor = hoverX < 0 ? 'start' : 'middle';

        if (hoverPosition + xAxisOffset >= width) {
            hoverX = width - xAxisOffset - hoverLabelXOffset;
            hoverAnchor = 'end';
        }
    }
    return (
        <g className="ChartXaxis" transform={ `translate(${xAxisOffset}, 0)` }>
            {
                hover ? (
                    <text
                        className="ChartXaxis-hover-text"
                        x={ hoverX }
                        y={ height - hoverLabelYOffset }
                        textAnchor={ hoverAnchor }
                    >
                        { hoverText }
                    </text>
                ) : null
            }
            {
                ticks.map((tick) =>
                    hover ? null : (
                        <g key={ tick }>
                            <text
                                className="ChartXaxis-label"
                                x={ scale(tick) }
                                y={ height }
                            >
                                { moment(tick).format(dateFormat) }
                            </text>
                        </g>
                    )
                )
            }
        </g>
    );
};

ChartXaxis.propTypes = {
    height: PropTypes.number.isRequired,
    hover: PropTypes.object,
    ticks: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    xAxisOffset: PropTypes.number.isRequired,
    scale: PropTypes.func.isRequired,
    yAxisOffset: PropTypes.number.isRequired,
    dateFormat: PropTypes.string
};

ChartXaxis.defaultProps = {
    dateFormat: 'll'
};

ChartXaxis.displayName = 'ChartXaxis';

export default ChartXaxis;
