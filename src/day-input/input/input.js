import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'src/icons';

class Input extends Component {
    focus() {
        if (this.input)
            this.input.focus();
    }

    get value() {
        if (this.input)
            return this.input.value;
        return '';
    }

    handleBeforeKeyDown = e => {
        const { onKeyDown, onBeforeKeyDown } = this.props;
        if (onBeforeKeyDown)
            onBeforeKeyDown(e);
        if (onKeyDown && !e.defaultPrevented)
            onKeyDown(e);
    };

    render() {
        /* eslint-disable no-unused-vars */
        const { onKeyDown, onBeforeKeyDown, ...props } = this.props;
        /* eslint-enable no-unused-vars */
        return (
            <div className="DayPickerInput-wrapper">
                <input
                    { ...props }
                    ref={ instance => { this.input = instance; } }
                    onKeyDown={ this.handleBeforeKeyDown }
                />
                <Calendar />
            </div>
        );
    }
}

Input.propTypes = {
    onKeyDown: PropTypes.func,
    onBeforeKeyDown: PropTypes.func,
};

export default Input;
