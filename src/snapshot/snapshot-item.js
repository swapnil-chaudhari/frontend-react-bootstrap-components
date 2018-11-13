import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Help } from 'src/index';
import './snapshot-item.scss';
import { uniqueId } from '../utils/unique-id';


class SnapshotItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
        lineStyle: PropTypes.oneOf([
            'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'
        ]),
        lineColor: PropTypes.string,
        valueColor: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipPlacement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
        valueHint: PropTypes.node,
        icon: PropTypes.node
    };

    componentWillMount() {
        this.helpId = uniqueId();
    }

    render() {
        const {
            title,
            children,
            lineStyle,
            lineColor,
            valueColor,
            tooltip,
            tooltipPlacement,
            valueHint,
            icon
        } = this.props;

        return (
            <div className="SnapshotItem">
                <div
                    className="SnapshotItem-line"
                    style={ { border: `1px ${lineStyle} ${lineColor}` } }
                />
                { icon && <div className="SnapshotItem-upper-icon">{ icon }</div> }
                <span className="SnapshotItem-title">{ title }</span>
                {
                    tooltip ?
                        <Help
                            id={ this.helpId }
                            message={ tooltip }
                            tooltipPlacement={ tooltipPlacement }
                        /> : null
                }
                <h2
                    className="SnapshotItem-value"
                    style={ { color: valueColor } }
                >
                    { children }
                </h2>
                { valueHint }
            </div>
        );
    }
}

export default SnapshotItem;
