/* eslint-disable react/jsx-handler-names */
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import ClickOutside from 'react-click-outside';
import moment from 'moment';
import CalendarIcon from 'src/icons/calendar';
import LeftPaginationArrow from 'src/icons/left-pagination-arrow';
import RightPaginationArrow from 'src/icons/right-pagination-arrow';
import './single-date-input.scss';

export default class SingleDateInput extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(moment),
        minDate: PropTypes.instanceOf(moment),
        maxDate: PropTypes.instanceOf(moment),
        onDateChange: PropTypes.func
    }
    state = {
        focused: false
    }
    isOutsideRange = day => {
        const { minDate, maxDate } = this.props;

        if (minDate && maxDate)
            return !day.isBetween(minDate, maxDate, 'day', '[]');
        else if (minDate)
            return !day.isSameOrAfter(minDate, 'day');
        else if (maxDate)
            return !day.isSameOrBefore(maxDate, 'day');

        return false;
    }
    toggle = () => {
        const { focused } = this.state;
        this.setState({ focused: !focused });

        if (!focused && this.dateInput)
            this.dateInput.focus();
    }
    focus = () => {
        if (this.dateInput) this.dateInput.focus();
        this.setState({ focused: true });
    }
    blur = () => {
        if (this.dateInput) this.dateInput.blur();
        this.setState({ focused: false });
    }
    render() {
        const { name, date, ...rest } = this.props;
        const { focused } = this.state;
        const pickerProps = {
            navPrev: <LeftPaginationArrow />,
            navNext: <RightPaginationArrow />,
            onFocusChange: this.toggle,
            isOutsideRange: this.isOutsideRange,
            date,
            focused,
            ...rest
        };

        return (
            <ClickOutside onClickOutside={ this.blur }>
                <section className="DateInput-section">
                    <div className="DateInput-container">
                        <input
                            type="text"
                            ref={ c => (this.dateInput = c) }
                            name={ name }
                            value={ date && date.format('MM/DD/YYYY') }
                            className="form-control"
                            onFocus={ this.focus }
                        />
                        <CalendarIcon />
                        {
                            focused &&
                                <DayPickerSingleDateController { ...pickerProps } />
                        }
                    </div>
                </section>
            </ClickOutside>
        );
    }
}
