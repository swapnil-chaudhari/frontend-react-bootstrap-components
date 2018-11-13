import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './grouped-bar-chart-y-axis.scss';

class GroupedBarChartYaxis extends Component {
    static propTypes = {
        ticks: PropTypes.arrayOf(PropTypes.number).isRequired,
        ticksFormat: PropTypes.func.isRequired,
        scale: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        xOffset: PropTypes.number.isRequired,
        yOffset: PropTypes.number.isRequired
    };

    componentDidMount() {
        const { ticks } = this.props;

        /**
         * Because SVG text cannot have foreground/background, it can be achievable
         * only using background rectangles under the text with chart background color
         */
        ticks.forEach((tick, i) => {
            if (this[`_tick${i}`])
                this.prependForeground(this[`_tick${i}`]);
        });
    }

    prependForeground = (textNode) => {
        const { x, y, width, height } = textNode.getBBox();

        const foreground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        foreground.setAttributeNS(null, 'x', x);
        foreground.setAttributeNS(null, 'y', y);
        foreground.setAttributeNS(null, 'width', width);
        foreground.setAttributeNS(null, 'height', height);
        foreground.setAttributeNS(null, 'fill', '#fff');
        foreground.setAttribute('class', 'GroupedBarChartYaxis-foreground');

        textNode.parentNode.insertBefore(foreground, textNode);
    };

    render() {
        const { ticks, ticksFormat, scale, height, width, xOffset, yOffset } = this.props;

        return (
            <g>
                <line
                    y1={ yOffset }
                    y2={ height }
                    x1={ xOffset }
                    x2={ xOffset }
                    className="GroupedBarChartYaxis-line"
                />
                {
                    ticks.map((tick, i) => (
                        <g key={ i }>
                            <line
                                y1={ scale(tick) }
                                y2={ scale(tick) }
                                x1={ 0 }
                                x2={ width }
                                className="GroupedBarChartYaxis-tick"
                            />
                            {
                                i !== 0 ? (
                                    <g>
                                        <text
                                            x={ 0 }
                                            y={ scale(tick) }
                                            className="GroupedBarChartYaxis-label"
                                            ref={ (el) => (this[`_tick${i}`] = el) }
                                        >
                                            { ticksFormat(tick) }
                                        </text>
                                    </g>
                                ) : null
                            }
                        </g>
                    ))
                }
            </g>
        );
    }
}

export default GroupedBarChartYaxis;
