import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import cx from 'classnames';
import convertNewlinesToCRLF from 'src/utils/convert-newlines-to-crlf';
import './character-limit-indicator.scss';

class CharacterLimitIndicator extends Component {
    static defaultProps = {
        formatMessage: (message, { limit }) => `${message} ${limit}`,
        formatNumber: (number) => number,
    };

    static propTypes = {
        children: PropTypes.node.isRequired,
        formatNumber: PropTypes.func,
        formatMessage: PropTypes.func,
        limit: PropTypes.number.isRequired,
        message: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                defaultMessage: PropTypes.string.isRequired,
                description: PropTypes.string,
                id: PropTypes.string.isRequired
            })
        ]),
        value: PropTypes.string
    };

    static displayName = 'CharacterLimitIndicator';

    state = { hasFocus: false };

    _handleFocus() {
        return () => { this.setState({ hasFocus: true }); };
    }

    _handleBlur() {
        return () => { this.setState({ hasFocus: false }); };
    }

    _renderIndicator() {
        const { limit, value, message, formatMessage, formatNumber } = this.props;
        const { hasFocus } = this.state;
        const numChars = convertNewlinesToCRLF(value ? value.trim() : '').length;
        const charsRemaining = limit - numChars;

        if (hasFocus || charsRemaining < 0)
            return (
                <div
                    className={ cx(
                        'CharacterLimitIndicator-indicator',
                        { 'CharacterLimitIndicator-indicator-error': charsRemaining < 0 }
                    ) }
                >
                    <div className="CharacterLimitIndicator-message">
                        { formatMessage(message, { limit }) }
                    </div>
                    <div className="CharacterLimitIndicator-remaining">
                        { ` (${formatNumber(charsRemaining)})` }
                    </div>
                </div>
            );

        return null;
    }

    render() {
        const { children } = this.props;
        const child = Children.only(children);

        return (
            <div
                className="CharacterLimitIndicator"
                onFocus={ this._handleFocus() }
                onBlur={ this._handleBlur() }
            >
                { this._renderIndicator() }
                { child }
            </div>
        );
    }
}
export default CharacterLimitIndicator;
