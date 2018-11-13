import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DownDirectionArrow from 'src/icons/down-direction-arrow';
import IncompleteAlert from 'src/icons/incomplete-alert';
import UpDirectionArrow from 'src/icons/up-direction-arrow';
import './collapsable-alert.scss';

class CollapsableAlert extends Component {
    static defaultProps = {
        style: 'default',
        collapsedText: 'SEE REASONS',
        expandedText: 'HIDE REASONS'
    };

    static propTypes = {
        style: PropTypes.oneOf([
            'default', 'warning', 'danger'
        ]),
        titleText: PropTypes.string,
        subtitleText: PropTypes.string,
        collapsedText: PropTypes.string.isRequired,
        expandedText: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    };

    static displayName = 'CollapsableAlert';

    state = { isCollapsed: true };

    _toggleCollapse() {
        const { isCollapsed } = this.state;
        return () => { this.setState({ isCollapsed: !isCollapsed }); };
    }

    render() {
        const {
            style,
            titleText,
            subtitleText,
            collapsedText,
            expandedText,
            children
        } = this.props;
        const { isCollapsed } = this.state;

        return (
            <div className={ `CollapsableAlert CollapsableAlert-${style}` }>
                <div className="CollapsableAlert-top-banner">
                    <IncompleteAlert />
                    <div className="CollapsableAlert-titles">
                        <h3 className={ `CollapsableAlert-${style}-title` }>{ titleText }</h3>
                        <p className="CollapsableAlert-subtitle">{ subtitleText }</p>
                    </div>
                    <button className="CollapsableAlert-button" onClick={ this._toggleCollapse() } >
                        { isCollapsed ? collapsedText : expandedText }
                        { isCollapsed ? (<DownDirectionArrow />) : (<UpDirectionArrow />) }
                    </button>
                </div>
                { !isCollapsed &&
                    (<div className="CollapsableAlert-expanded-contents">
                        { children }
                    </div>)
                }
            </div>
        );
    }

}

export default CollapsableAlert;
