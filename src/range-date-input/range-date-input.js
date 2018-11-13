/* eslint-disable react/jsx-handler-names */
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { DayPickerRangeController } from 'react-dates';
import { Row, Col } from 'react-bootstrap';
import ClickOutside from 'react-click-outside';
import moment from 'moment';
import { get as getIn, omit } from 'lodash';
import CalendarIcon from 'src/icons/calendar';
import LeftPaginationArrow from 'src/icons/left-pagination-arrow';
import RightPaginationArrow from 'src/icons/right-pagination-arrow';
import noop from 'src/utils/noop';
import './range-date-input.scss';

export default class RangeDateInput extends Component {
    static propTypes = {
        startName: PropTypes.string.isRequired,
        endName: PropTypes.string.isRequired,
        startDate: PropTypes.instanceOf(moment),
        endDate: PropTypes.instanceOf(moment),
        minDate: PropTypes.instanceOf(moment),
        maxDate: PropTypes.instanceOf(moment),
        onDatesChange: PropTypes.func,
        dateFormat: PropTypes.string,
        isManuallyEditable: PropTypes.bool,
        startPlaceholder: PropTypes.string,
        endPlaceholder: PropTypes.string,
        keyboardNavigationEnabled: PropTypes.bool,
        selectMode: PropTypes.oneOf(['day', 'week', 'release week', 'month', 'quarter', 'year']),
        startFormatter: PropTypes.func,
        endFormatter: PropTypes.func,
    };

    static defaultProps = {
        startDate: null,
        endDate: null,
        minDate: null,
        maxDate: null,
        onDatesChange: noop,
        dateFormat: 'MM/DD/YYYY',
        isManuallyEditable: false, // preserve old behaviour
        startPlaceholder: null,
        endPlaceholder: null,
        keyboardNavigationEnabled: false,
        selectMode: 'day',
        startFormatter: null,
        endFormatter: null,
    };

    state = {
        focusedInput: null,
        start: null,
        end: null
    };

    onDatesChange = dates => {
        const { onDatesChange, selectMode } = this.props;
        const { focusedInput } = this.state;
        const isStartDate = focusedInput === 'startDate';

        if (isStartDate)
            this.focusEnd();
        else
            this.blur();

        if (selectMode !== 'day') {
            const changedDate = (isStartDate ? dates.startDate : dates.endDate).clone();

            if (selectMode === 'release week') {
                const isFridayOrMore = changedDate.isoWeekday() >= 5;

                if (isStartDate)
                    changedDate.isoWeekday(isFridayOrMore ? 5 : -2);
                else
                    changedDate.isoWeekday(isFridayOrMore ? 11 : 4);
            } else {
                const method = isStartDate ? 'startOf' : 'endOf';

                changedDate[method](selectMode);
            }

            /* eslint-disable no-param-reassign */
            if (isStartDate)
                dates.startDate = changedDate;
            else
                dates.endDate = changedDate;
            /* eslint-enable no-param-reassign */
        }

        onDatesChange(dates);
    };

    isOutsideRange = day => {
        const { minDate, maxDate } = this.props;

        if (minDate && maxDate)
            return !day.isBetween(minDate, maxDate, 'day', '[]');
        else if (minDate)
            return !day.isSameOrAfter(minDate, 'day');
        else if (maxDate)
            return !day.isSameOrBefore(maxDate, 'day');

        return false;
    };

    toggle = () => {
        const { focusedInput } = this.state;

        this.setState(
            focusedInput
                ? { focusedInput: null, start: null, end: null }
                : { focusedInput: 'startDate', end: null }
        );

        if (!focusedInput && this.startDateInput)
            this.startDateInput.focus();
    };

    focus = () => {
        this.updateDatesFromState();

        if (this.startDateInput)
            this.startDateInput.focus();

        this.setState({ focusedInput: 'startDate', end: null });
    };

    focusEnd = () => {
        this.updateDatesFromState();

        if (this.endDateInput)
            this.endDateInput.focus();

        this.setState({ focusedInput: 'endDate', start: null });
    };

    blur = () => {
        this.updateDatesFromState();

        if (this.startDateInput)
            this.startDateInput.blur();

        if (this.endDateInput)
            this.endDateInput.blur();

        this.setState({ focusedInput: null, start: null, end: null });
    };

    handleManuallyChange = name => e => {
        const { isManuallyEditable } = this.props;

        // disable manual edit if we have formatter for this field
        if (!isManuallyEditable || this.props[`${name}Formatter`])
            return;

        const stringValue = getIn(e, ['target', 'value'], e);

        this.setState({ [name]: stringValue });
    };

    handleKeyDown = e => {
        if (this.props.keyboardNavigationEnabled)
            if (this.dayPickerRangeController) {
                const { dayPicker } = this.dayPickerRangeController;
                if (dayPicker)
                    dayPicker.onKeyDown(e);
            }
    };

    updateDatesFromState = () => {
        const { isManuallyEditable, startDate, endDate, onDatesChange, dateFormat } = this.props;
        const { focusedInput, start, end } = this.state;
        if (!isManuallyEditable || !focusedInput)
            return;

        const getDate = (propDate, stateDate) => {
            let result = propDate;

            if (stateDate !== null)
                if (!stateDate)
                    result = null;
                else {
                    const momentDate = moment(stateDate, dateFormat);

                    if (momentDate.isValid())
                        result = momentDate;
                }

            return result;
        };

        const dates = {
            startDate: getDate(startDate, start),
            endDate: getDate(endDate, end),
        };

        // check if dates in correct order: startDate <= endDate
        if (dates.startDate && dates.endDate)
            if (focusedInput === 'startDate'
                && dates.startDate.clone().startOf('day')
                    .isAfter(dates.endDate.clone().startOf('day')))
                dates.endDate = null;
            else if (focusedInput === 'endDate'
                && dates.endDate.clone().startOf('day')
                    .isBefore(dates.startDate.clone().startOf('day')))
                dates.startDate = null;

        onDatesChange(dates);
    };

    render() {
        const {
            startName,
            endName,
            startDate,
            endDate,
            dateFormat,
            startPlaceholder,
            endPlaceholder,
            startFormatter,
            endFormatter,
            ...rest
        } = this.props;
        const { focusedInput, start, end } = this.state;
        const pickerProps = {
            ref: c => (this.dayPickerRangeController = c),
            navPrev: <LeftPaginationArrow />,
            navNext: <RightPaginationArrow />,
            keepOpenOnDateSelect: true,
            numberOfMonths: 2,
            isOutsideRange: this.isOutsideRange,
            startDate,
            endDate,
            focusedInput,
            ...omit(
                rest,
                'isManuallyEditable',
                'minDate',
                'maxDate',
                'keyboardNavigationEnabled',
                'selectMode'
            ),

            // Intercept original onDatesChange for some automagic
            onDatesChange: this.onDatesChange
        };

        let startValue = start;
        if (startValue === null)
            if (startFormatter)
                startValue = startFormatter(startDate, dateFormat);
            else
                startValue = startDate ? startDate.format(dateFormat) : '';

        let endValue = end;
        if (endValue === null)
            if (endFormatter)
                endValue = endFormatter(endDate, dateFormat);
            else
                endValue = endDate ? endDate.format(dateFormat) : '';

        return (
            <ClickOutside onClickOutside={ this.blur }>
                <section className="DateInput-section">
                    <Row>
                        <Col xs={ 6 } className="DateInput-container in-range dash-after">
                            <input
                                type="text"
                                ref={ c => (this.startDateInput = c) }
                                name={ startName }
                                value={ startValue }
                                onChange={ this.handleManuallyChange('start') }
                                className="form-control"
                                onFocus={ this.focus }
                                placeholder={ startPlaceholder }
                                onKeyDown={ this.handleKeyDown }
                            />
                            <CalendarIcon />
                        </Col>
                        <Col xs={ 6 } className="DateInput-container in-range">
                            <input
                                type="text"
                                ref={ c => (this.endDateInput = c) }
                                name={ endName }
                                value={ endValue }
                                onChange={ this.handleManuallyChange('end') }
                                className="form-control"
                                onFocus={ this.focusEnd }
                                placeholder={ endPlaceholder }
                                onKeyDown={ this.handleKeyDown }
                            />
                            <CalendarIcon />
                        </Col>
                    </Row>
                    {
                        focusedInput &&
                            <DayPickerRangeController { ...pickerProps } />
                    }
                </section>
            </ClickOutside>
        );
    }
}
