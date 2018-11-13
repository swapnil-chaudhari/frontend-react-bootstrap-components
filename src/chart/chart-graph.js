import PropTypes from 'prop-types';
import React, { Component } from 'react';
import significantDigitsFormat from 'src/utils/significant-digits-format';
import getTicks from 'src/utils/get-ticks';
import getAxisDates from 'src/utils/get-axis-dates';
import ChartYAxis from './chart-y-axis';
import ChartXAxis from './chart-x-axis';
import ChartGrid from './chart-grid';
import ChartOverlayTrigger from './chart-overlay-trigger';
import ChartRectClipPath from './chart-rect-clip-path';
import ChartNoData from './chart-no-data';
import moment from 'moment';
import * as d3 from 'd3';
import './chart-graph.scss';

export class Graph extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        isLoading: PropTypes.bool,
        days: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        hoverOnDate: PropTypes.func.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
        xAxisOffset: PropTypes.number,
        yAxisOffset: PropTypes.number,
        circleYOffset: PropTypes.number,
        leftTooltipOffset: PropTypes.number,
        topTooltipOffset: PropTypes.number,
        circleRadius: PropTypes.number,
        tooltipHeight: PropTypes.number,
        hoverSpotOffset: PropTypes.number,
        xAxisKey: PropTypes.string,
        yAxisKey: PropTypes.string,
        noDataText: PropTypes.string,
        sourceTypes: PropTypes.array.isRequired,
        colors: PropTypes.array,
        xAxisDateFormat: PropTypes.string,
        xAxisDateFormatHover: PropTypes.string,
        hoverType: PropTypes.string
    };

    static defaultProps = {
        height: 400,
        xAxisOffset: 50,
        yAxisOffset: -25,
        circleYOffset: 2,
        leftTooltipOffset: 3,
        topTooltipOffset: 15,
        circleRadius: 6,
        tooltipHeight: 25,
        hoverSpotOffset: 8,
        xAxisKey: 'x',
        yAxisKey: 'y',
        noDataText: '-',
        colors: ['#4B3DA3', '#419B86', '#026EAD'],
        xAxisDateFormat: 'MMM D',
        xAxisDateFormatHover: 'dddd, MMMM D',
        hoverType: 'accumulation'
    };

    state = {};

    getPoints = (xScale, yScale, data, sourceType) => {
        const { xAxisKey, yAxisKey } = this.props;
        const fn = d3.area()
            .x(d => xScale(moment(d[xAxisKey]).startOf('day')))
            .y0(this.props.height)
            .y1(d => yScale(d[sourceType][yAxisKey]));
        return fn(data);
    };

    getXScale = () => {
        const { width, xAxisOffset, days } = this.props;
        const overflowOffset = 2;
        return d3.scaleTime()
            .domain([
                moment().startOf('day').subtract(days, 'days'),
                moment().startOf('day')
            ])
            .range([0, width - xAxisOffset - overflowOffset]);
    };

    getMaxYValue = () => {
        const MAX_EMPTY_Y_TICKS = 6;
        const { data, sourceTypes, yAxisKey } = this.props;
        const values = data.reduce(
            (prev, item) => [...prev, ...sourceTypes.map(type => item[type][yAxisKey])],
            []
        );
        const max = (d3.max(values) * 1.1) || MAX_EMPTY_Y_TICKS;
        return max;
    }

    getYScale = () => {
        const { height, tooltipHeight } = this.props;
        const max = this.getMaxYValue();
        return d3.scaleLinear()
            .domain([0, max])
            .range([height, tooltipHeight]);
    };

    handleMouseMove = ({ clientX }) => {
        if (this._container) {
            const {
                hoverOnDate,
                data,
                xAxisOffset,
                yAxisOffset,
                circleYOffset,
                sourceTypes,
                xAxisKey,
                yAxisKey,
                hoverType
            } = this.props;

            if (!data)
                return;

            const { left: leftPos } = this._container.getBoundingClientRect();
            let hoverPosition = clientX - leftPos;

            const xScale = this.getXScale();
            const yScale = this.getYScale();

            /**
             * Attempt to find closest date to hover place.
             */
            const x = xScale.invert(hoverPosition - xAxisOffset);
            const { closest } = data.reduce((result, item) => {
                const date = moment(item[xAxisKey]).toDate();
                const diff = Math.abs(date - x);

                if (typeof result.diff === 'undefined' || result.diff > diff)
                    return { diff, closest: { ...item, parsedDate: date } };

                return result;
            }, {});

            hoverPosition = xScale(closest.parsedDate) + xAxisOffset;

            let circles = sourceTypes.map((type) => {
                const y = closest[type][yAxisKey];

                return {
                    x: hoverPosition,
                    y: yScale(y) + yAxisOffset - circleYOffset,
                    type,
                    value: y
                };
            });

            if (hoverType === 'accumulation')
                circles = circles.slice(0, 1);

            hoverOnDate(closest[xAxisKey]);

            this.setState({
                hoverPosition,
                hoverDate: closest.parsedDate,
                circles
            });
        }
    };

    handleMouseOut = () => {
        const { hoverOnDate } = this.props;

        hoverOnDate(null);

        this.setState({
            hoverPosition: null,
            hoverDate: null,
            circles: null
        });
    };

    renderCircles = () => {
        const { circleRadius, hoverType, xAxisOffset, width } = this.props;
        const { circles, hoverPosition } = this.state;
        const allowedSpace = 20;
        const textAnchor = (hoverPosition + xAxisOffset >= width - allowedSpace) ? 'end' : 'start';

        return circles.map((circle, i) => {
            if (!circle)
                return null;

            const { x, y, value } = circle;

            return (
                <g
                    key={ i }
                >
                    <circle
                        cx={ x }
                        cy={ y }
                        className={ 'Circle' }
                        r={ circleRadius }
                    />
                    { hoverType === 'accumulation'
                    && <text
                        x={ x }
                        y={ y }
                        className="Circle-text"
                        textAnchor={ textAnchor }
                        transform={ `translate(${textAnchor === 'start' ? 10 : -10}, 0)` }
                    >
                        { value }
                    </text> }
                </g>
            );
        });
    };

    renderHoverPosition = () => {
        const { height, yAxisOffset } = this.props;
        const { hoverPosition } = this.state;

        if (!hoverPosition)
            return null;

        return (
            <g>
                <line
                    className="HoverLine"
                    x1={ hoverPosition }
                    x2={ hoverPosition }
                    y1="0"
                    y2={ height + yAxisOffset }
                />
                { this.renderCircles() }
            </g>
        );
    };

    renderArea(points, index) {
        return (
            <g
                className="ChartArea"
                key={ index }
            >
                <path
                    fill={ this.props.colors[index] }
                    className="ChartAreaPath"
                    d={ points }
                />
            </g>
        );
    }

    render() {
        const {
            data,
            isLoading,
            days,
            height,
            width,
            xAxisOffset,
            yAxisOffset,
            hoverSpotOffset,
            sourceTypes,
            xAxisDateFormatHover,
            noDataText
        } = this.props;
        const { hoverPosition, hoverDate } = this.state;

        let lines = [];
        const xScale = this.getXScale();
        const yScale = this.getYScale();

        const yProps = {
            ticks: yScale.ticks(5),
            scale: yScale,
            x: 0,
            y: yAxisOffset,
            width,
            height,
            tickWidth: width,
            tickFormat: significantDigitsFormat
        };

        const xProps = {
            height,
            hover: hoverPosition && {
                hoverPosition,
                hoverText: moment(hoverDate).format(xAxisDateFormatHover),
            },
            ticks: getAxisDates(days, getTicks(days)),
            width,
            xAxisOffset,
            scale: xScale,
            yAxisOffset: 0,
            dateFormat: this.props.xAxisDateFormat
        };

        const gridProps = {
            xTicks: getAxisDates(days, getTicks(days)),
            yTicks: yScale.ticks(5),
            xScale,
            yScale,
            xOffset: xAxisOffset,
            yOffset: yAxisOffset,
            width,
            height
        };

        const overlayProps = {
            className: 'HoverSpot',
            x: xAxisOffset - hoverSpotOffset,
            y: -yAxisOffset,
            width,
            height,
            onMouseMove: this.handleMouseMove,
            onMouseLeave: this.handleMouseOut
        };

        /* eslint-disable curly */
        if (data && data.length && width) {
            lines = sourceTypes.map((type, i) => {
                const points = this.getPoints(xScale, yScale, data, type);
                return this.renderArea(points, i);
            });
        }

        return (
            <g
                className="Graph"
                ref={ (c) => (this._container = c) }
            >
                <ChartRectClipPath
                    id="clip"
                    width={ width }
                    height={ height }
                    y={ -yAxisOffset }
                />
                <g
                    transform={ `translate(0, ${yAxisOffset})` }
                    style={ { clipPath: 'url(#clip)' } }
                >
                    <ChartGrid { ...gridProps } />
                </g>
                <ChartYAxis
                    { ...yProps }
                />
                <ChartXAxis { ...xProps } />
                {
                    !isLoading && (
                        <g>
                            <g
                                transform={ `translate(${xAxisOffset}, ${yAxisOffset})` }
                                style={ { clipPath: 'url(#clip)' } }
                            >
                                { lines }
                            </g>
                            { this.renderHoverPosition() }
                            { !lines.length &&
                                <ChartNoData
                                    height={ height }
                                    width={ width }
                                    noDataText={ noDataText }
                                />
                            }
                        </g>
                    )
                }
                { !isLoading
                && data
                && data.length > 0
                && <ChartOverlayTrigger { ...overlayProps } /> }
            </g>
        );
    }
}

export default Graph;
