import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as d3 from 'd3';
import cx from 'classnames';
import noop from 'src/utils/noop';
import './doughnut-chart.scss';

class DoughnutChart extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        valueKey: PropTypes.string.isRequired,
        labelKey: PropTypes.string,
        subLabelKey: PropTypes.string,
        renderLabel: PropTypes.func,
        onHover: PropTypes.func
    };

    static defaultProps = { onHover: noop };

    /**
     * Make small values visible (till 2 degrees) on chart
     */
    static makingVisibility(data, keyName) {
        const minPart = 0.005; // ~2/360

        const result = [...data];
        const sumValues = result.reduce(
            (acc, record) => acc + record[keyName], 0
        );

        return result.map((record) => {
            const part = record[keyName] / sumValues;

            return {
                ...record,
                visibleValue: record[keyName] * (
                    part < minPart ? minPart / part : 1
                )
            };
        });
    }

    static calculatePercentage(data, keyName) {
        const result = [...data];
        const sumValues = result.reduce(
            (acc, record) => acc + record[keyName], 0
        );

        return result.map((record) => {
            let percentage =
                ((record[keyName] * 100) / sumValues);

            if (percentage > 1)
                percentage = Math.round(percentage);
            else
                percentage = percentage.toFixed(1);

            return {
                ...record,
                percentage
            };
        });
    }

    /**
     * Rearranges data for less labels intersection + filter zero values
     */
    static rearrangeData(data, keyName) {
        let array = [...data];
        array = array
            .sort((a, b) => a[keyName] - b[keyName])
            .filter(record => record[keyName] !== 0);

        const result = [];

        while (array.length) {
            result.push(array[array.length - 1]);
            array.pop();

            if (array.length) {
                result.push(array[0]);
                array.shift();
            }
        }

        return result;
    }

    static getPieFn() {
        return d3.pie()
            .value(d => d.visibleValue)
            .sort(null);
    }

    static moveLine(line, dy) {
        const { y1, y2, y3 } = line;
        const isOnLeftSide = line.x1 < 0;

        return {
            ...line,
            y1: isOnLeftSide ? y1 + dy : y1,
            y2: y2 + dy,
            y3: isOnLeftSide ? y3 : y3 + dy
        };
    }

    static moveLineUp(line, dy) {
        return DoughnutChart.moveLine(line, line.y1 < 0 ? -dy : Number(dy));

    }

    static moveLineDown(line, dy) {
        return DoughnutChart.moveLine(line, line.y1 < 0 ? Number(dy) : -dy);
    }

    state = {
        height: 375,
        size: 20,
        margin: 75,
        hovered: null
    };

    componentWillMount() {
        const { data } = this.props;
        this.updateVisibleData(data);
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }

    componentWillReceiveProps({ data }) {
        this.updateVisibleData(data);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
    }

    setSize = () => {
        if (this._panel) {
            const { clientWidth } = this._panel;

            this.setState({ width: clientWidth });
        }
    };

    getIncreasedOuterArcFn() {
        const { size } = this.state;

        return d3.arc()
            .innerRadius(this.radius() + size)
            .outerRadius(this.radius() + size);
    }

    getIncreasedArcFn() {
        const { size } = this.state;

        return d3.arc()
            .innerRadius(this.radius() - size)
            .outerRadius(this.radius() + size);
    }

    getOuterArcFn() {
        return d3.arc()
            .innerRadius(this.radius())
            .outerRadius(this.radius());
    }

    getArcFn() {
        const { size } = this.state;

        return d3.arc()
            .innerRadius(this.radius() - size)
            .outerRadius(this.radius());
    }

    radius() {
        const { margin, width, height } = this.state;
        return (Math.min(width, height) / 2) - margin;
    }

    updateVisibleData(d) {
        const { valueKey } = this.props;

        if (d) {
            const data = DoughnutChart.makingVisibility(
                DoughnutChart.rearrangeData(
                    DoughnutChart.calculatePercentage(d, valueKey),
                    valueKey
                ),
                valueKey
            );

            this.setState({ data });
        }
    }

    isRecordHovered(record) {
        const { hovered } = this.state;

        if (hovered)
            return hovered.index === record.index;

        return false;
    }

    increaseArc(record) {
        this.setState({ hovered: record });
        this.props.onHover(record);
    }

    decreaseArc() {
        this.setState({ hovered: null });
        this.props.onHover(null);
    }

    /**
     * Moves lines for making some space between them
     */
    movePolylines(polylines) {
        const result = [...polylines];
        const minimalOffset = this.radius() / 4;

        for (let i = 1; i < result.length; ++i) {
            const offset = Math.abs(result[i].y2 - result[i - 1].y2);

            if (offset < minimalOffset) {
                const diff = Math.abs(offset - minimalOffset);

                result[i] = DoughnutChart.moveLineUp(result[i], diff / 2);
                result[i - 1] = DoughnutChart.moveLineDown(
                    result[i - 1],
                    diff / 2
                );
            }
        }

        return result;
    }

    renderArc() {
        const { data } = this.state;

        const increasedArcFn = this.getIncreasedArcFn();
        const arcFn = this.getArcFn();
        const pieFn = DoughnutChart.getPieFn();

        const pieData = pieFn(data);

        return pieData.map((record, i) => {
            const isHovered = this.isRecordHovered(record);
            const style = {};

            if (isHovered)
                style.filter = 'url(#dropShadow)';

            return (
                <path
                    className="Doughnut-chart-segment"
                    key={ i }
                    fill={ record.data.color }
                    d={ isHovered ? increasedArcFn(record) : arcFn(record) }
                    style={ style }
                    onMouseOver={ () => this.increaseArc(record) }
                    onMouseOut={ () => this.decreaseArc(record) }
                />
            );
        });
    }

    renderLines() {
        const { labelKey, subLabelKey, renderLabel } = this.props;
        const { width, data } = this.state;
        const labelOffset = this.radius() / 15;

        const increasedOuterArcFn = this.getIncreasedOuterArcFn();
        const arcFn = this.getOuterArcFn();
        const pieFn = DoughnutChart.getPieFn();

        const pieData = pieFn(data);
        const lines = pieData.map((record) => {
            const [x, y] = arcFn.centroid(record);

            const x1 = x < 0 ? -width / 2 : x;
            const x2 = x < 0 ? x : width / 2;
            const y1 = y;
            const y2 = y;

            return { x1, x2, y1, y2, record };
        });
        const polylines = lines.map(({ x1, x2, y1, y2, record }) => {
            const [x, y] = increasedOuterArcFn.centroid(record);
            const isOnLeftSide = x < 0;

            return {
                x1,
                y1: isOnLeftSide ? y : y1,
                x2: x,
                y2: y,
                x3: x2,
                y3: isOnLeftSide ? y2 : y,
                record
            };
        });

        return this.movePolylines(polylines)
            .map((polyline, i) => {
                const { x1, y1, x2, y2, x3, y3, record } = polyline;

                const amountClasses = cx('Doughnut-chart-tx-amount', {
                    'Doughnut-chart-tx-amount-strong': this.isRecordHovered(record)
                });

                const {
                    [labelKey]: label,
                    [subLabelKey]: subLabel
                } = record.data;

                return (
                    <g key={ i }>
                        <polyline
                            className="Doughnut-chart-tx-line"
                            points={ `${x1},${y1} ${x2},${y2} ${x3},${y3}` }
                            strokeWidth={ this.isRecordHovered(record) ? 2 : 1 }
                        />
                        {
                            renderLabel ? renderLabel(polyline, i) : (
                                <text
                                    className={ amountClasses }
                                    dy="0.1em"
                                    transform={
                                        `translate(${x1 < 0 ? x1 : x3},${y2 - labelOffset})`
                                    }
                                    style={ { textAnchor: x1 < 0 ? 'start' : 'end' } }
                                >
                                    { label }
                                </text>
                            )
                        }
                        {
                            subLabel ? (
                                <text
                                    className="Doughnut-chart-tx-type"
                                    dy="0.5em"
                                    transform={
                                        `translate(${x1 < 0 ? x1 : x3},${y2 + labelOffset})`
                                    }
                                    style={ { textAnchor: x1 < 0 ? 'start' : 'end' } }
                                >{ subLabel }</text>
                            ) : null
                        }
                        <rect
                            fillOpacity="0"
                            x={ x1 - 10 }
                            y={ Math.min(y1, y2, y3) - 20 }
                            width={ (x3 - x1) + 20 }
                            height={
                                (
                                    Math.max(y1, y2, y3) -
                                        Math.min(y1, y2, y3)
                                ) + 40
                            }
                            onMouseOver={ () => this.increaseArc(record) }
                            onMouseOut={ () => this.decreaseArc(record) }
                        />
                    </g>
                );
            }
        );
    }

    renderTitle() {
        const { title } = this.props;

        return (
            <g>
                <text className="Doughnut-chart-title">{ title }</text>
            </g>
        );
    }

    render() {
        const { className, width, height } = this.state;

        return (
            <div
                className={ cx('Doughnut-chart', className) }
                ref={ (c) => (this._panel = c) }
            >
                <svg width={ (width || height) } height={ height }>
                    <defs>
                        <filter id="dropShadow" x="0" y="0" width="300%" height="300%">
                            <feGaussianBlur in="SourceAlpha" result="blur-out" stdDeviation="2" />
                            <feOffset in="blur-out" result="the-shadow" dx="2" dy="1" />
                            <feColorMatrix
                                in="the-shadow" result="color-out" type="matrix"
                                values="0 0 0 0   0
                                0 0 0 0   0
                                0 0 0 0   0
                                0 0 0 .25 0"
                            />
                            <feBlend in="SourceGraphic" in2="color-out" mode="normal" />
                        </filter>
                    </defs>
                    {
                        width ? (
                            <g transform={ `translate(${width / 2},${height / 2})` }>
                                { this.renderLines() }
                                { this.renderArc() }
                                { this.renderTitle() }
                            </g>
                        ) : null
                    }
                </svg>
            </div>
        );
    }
}

export default DoughnutChart;
