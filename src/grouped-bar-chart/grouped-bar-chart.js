import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import * as d3 from 'd3';
import range from 'lodash.range';
import GroupedBarChartXaxis from './grouped-bar-chart-x-axis';
import GroupedBarChartYaxis from './grouped-bar-chart-y-axis';
import './grouped-bar-chart.scss';

const GroupedBarChart = ({
    className,
    data,
    children,
    maxYValue,
    yTicks,
    yTicksFormat,
    width,
    height,
    xOffset,
    yOffset,
    valuesFormat,
    innerPadding
}) => {
    const x0 = d3.scaleBand()
        .rangeRound([xOffset, width]);

    const x1 = d3.scaleBand()
        .padding(innerPadding);

    const y = d3.scaleLinear()
        .rangeRound([height - yOffset, yOffset]);

    const labels = data.map(({ key }) => key);
    const keys = data.length ? range(data[0].values.length + 1) : [];

    x0.domain(labels);
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);

    const maxY = typeof maxYValue === 'undefined' ? d3.max(
        data.map(({ values }) => values).reduce((acc, current) => acc.concat(current), [])
    ) : maxYValue;

    y.domain([0, maxY]).nice();

    const barWidth = x1.bandwidth();

    return (
        <div className={ cx('GroupedBarChart', className) }>
            <svg width={ width } height={ height }>
                { children }
                <GroupedBarChartYaxis
                    ticks={ yTicks }
                    ticksFormat={ yTicksFormat }
                    scale={ y }
                    width={ width }
                    height={ height }
                    xOffset={ xOffset }
                    yOffset={ yOffset }
                />
                {
                    data.map(({ key, values }) => (
                        <g
                            key={ key }
                            transform={ `translate(${x0(key)}, 0)` }
                        >
                            {
                                values.map((value, idx) => (
                                    <g key={ idx } className="GroupedBarChart-bar-holder">
                                        <rect
                                            x={ x1(idx) }
                                            y={ y(value) }
                                            width={ barWidth }
                                            height={ height - yOffset - y(value) }
                                            className={
                                                `GroupedBarChart-bar-${key}
                                                 GroupedBarChart-bar-i${idx}`
                                            }
                                        />
                                        <text
                                            x={ x1(idx) + barWidth / 2 }
                                            y={ y(value) }
                                            className={
                                                cx(
                                                    'GroupedBarChart-bar-value', {
                                                        'GroupedBarChart-bar-value-last': idx > 0
                                                    })
                                            }
                                        >
                                            { valuesFormat(value) }
                                        </text>
                                    </g>
                                ))
                            }
                            <text
                                y={ height }
                                x={ barWidth * values.length / 2 }
                                className="GroupedBarChartXaxis-label"
                            >{ key }</text>
                        </g>
                    ))
                }
                <GroupedBarChartXaxis
                    width={ width }
                    height={ height }
                    xOffset={ xOffset }
                    yOffset={ yOffset }
                />
            </svg>
        </div>
    );
};

GroupedBarChart.displayName = 'GroupedBarChart';

GroupedBarChart.propTypes = {
    /**
     * className, which applies on root node of component.
     */
    className: PropTypes.string,
    /**
     * Input data for component.
     */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.any.isRequired,
            values: PropTypes.array.isRequired
        })
    ).isRequired,
    /**
     * Additional content, can be useful for customization.
     */
    children: PropTypes.any,
    /**
     * If specified sets top border of values.
     */
    maxYValue: PropTypes.number,
    /**
     * Array of y axis ticks.
     */
    yTicks: PropTypes.arrayOf(PropTypes.number).isRequired,
    /**
     * Function, which formats existing `yTicks` array.
     */
    yTicksFormat: PropTypes.func,
    /**
     * Width of component.
     */
    width: PropTypes.number.isRequired,
    /**
     * Height of component.
     */
    height: PropTypes.number.isRequired,
    /**
     * Offset from left by x axis for displaying bars.
     */
    xOffset: PropTypes.number,
    /**
     * Offset from top by y axis for displaying bars.
     */
    yOffset: PropTypes.number,
    /**
     * Function, which formats labels on top of each bar.
     */
    valuesFormat: PropTypes.func,
    /**
     * Defined inner padding between bars
     */
    innerPadding: PropTypes.number
};

GroupedBarChart.defaultProps = {
    valuesFormat: value => value,
    yTicksFormat: value => value,
    xOffset: 0,
    yOffset: 0,
    innerPadding: 0
};

export default GroupedBarChart;
