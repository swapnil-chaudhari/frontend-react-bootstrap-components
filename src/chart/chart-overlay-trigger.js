import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import './chart-overlay-trigger.scss';

export default class ChartOverlayTrigger extends Component {
    static propTypes = {
        className: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        onMouseMove: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onClick: PropTypes.func
    };

    static defaultProps = {
        x: 0,
        y: 0
    };

    render() {
        const {
            className,
            x,
            y,
            width,
            height,
            onMouseMove,
            onMouseLeave,
            onClick
        } = this.props;

        return (
            <g>
                <rect
                    className={
                        classNames(
                            'ChartOverlayTrigger',
                            className
                        )
                    }
                    style={ {
                        left: x,
                        top: y,
                        width,
                        height
                    } }
                    onMouseMove={ onMouseMove }
                    onMouseLeave={ onMouseLeave }
                    onClick={ onClick }
                />
            </g>
        );
    }
}
