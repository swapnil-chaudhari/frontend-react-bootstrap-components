import PropTypes from 'prop-types';
import React, { cloneElement, Children, Component } from 'react';
import classNames from 'classnames';
import './chart-container.scss';

export default class ChartContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
        height: PropTypes.number
    };

    static defaultProps = {
        height: 400
    };

    state = {
        width: 0
    };

    componentDidMount() {
        this.setWidth();
        window.addEventListener('resize', this.setWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setWidth);
    }

    setWidth = () => {
        if (this._chartContainer)
            this.setState({ width: this._chartContainer.clientWidth });
    };

    render() {
        const { className, children, height } = this.props;
        const { width } = this.state;

        return (
            <div
                className={
                    classNames(
                        'ChartContainer',
                        className
                    )
                }
                ref={ c => (this._chartContainer = c) }
            >
                <svg width={ width } height={ height } className="ChartContainer-svg">
                    {
                        Children.map(children, child =>
                            cloneElement(child, { width, height })
                        )
                    }
                </svg>
            </div>
        );
    }
}
