import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KEYS } from 'src/constants';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import noop from 'src/utils/noop';
import moment from 'moment';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/min/locales.min';
import Navbar from './navbar/navbar';
import Input from './input/input';
import Caption from './caption/caption';
import 'react-day-picker/lib/style.css';
import './day-input.scss';

export default class DayInput extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        disabled: PropTypes.bool,
        minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        focus: PropTypes.bool,
        shortMonth: PropTypes.bool,
        dateFormat: PropTypes.string,
        renderTodayButton: PropTypes.bool,
        formatMessage: PropTypes.func,
        messages: PropTypes.shape({
            todayLabel: PropTypes.object
        }),
        dayPickerOptions: PropTypes.object,
        dayPickerInputOptions: PropTypes.object,
        returnEventIfError: PropTypes.bool
    };

    static defaultProps = {
        onChange: noop,
        dateFormat: 'YYYY-MM-DD',
        focus: false,
        shortMonth: false,
        renderTodayButton: true,
        formatMessage: noop,
        messages: { },
        returnEventIfError: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            date: this.parseDate(props.value)
        };
    }

    componentDidMount() {
        this.focus();
    }

    componentWillReceiveProps() {
        this.focus();
    }

    getLocaleUtils = (shortMonth) => {
        const getMonths = (locale) => {
            const localeMoment = moment().locale(locale || 'en');
            const monthFormat = shortMonth ? 'MMM' : 'MMMM';
            const months = [];
            for (let i = 0; i < 12; i++)
                months.push(localeMoment.month(i).format(monthFormat).replace(/\.$/, ''));
            return months;
        };
        return { ...MomentLocaleUtils, getMonths };
    };

    get dateFormat() {
        return this.props.dateFormat || DayInput.defaultProps.dateFormat;
    }

    focus() {
        if (this.dayPickerInput && this.props.focus) {
            const input = this.dayPickerInput.getInput();
            if (input)
                input.focus();
        }
    }

    formatDate = (date) => {
        const dateMoment = moment(date);
        return dateMoment.isValid() ? dateMoment.format(this.dateFormat) : '';
    };

    handleDayPickerInputKeyUp = e => {
        if (e.keyCode === KEYS.ENTER && this.dayPickerInput)
            if (!this.parseDate(e.target.value))
                this.dayPickerInput.handleInputChange({
                    ...e,
                    target: {
                        ...e.target,
                        value: this.formatDate(Date.now())
                    }
                });
            else if (this.showOverlay)
                this.dayPickerInput.hideDayPicker();
    };

    handleDayPickerInputBeforeKeyDown = e => {
        if (e.keyCode === KEYS.ENTER && this.dayPickerInput) {
            e.preventDefault();
            this.showOverlay = this.dayPickerInput.state.showOverlay;
        }
    };

    handleYearMonthChange = date => {
        this.setState({ date });
    };

    parseDate = (dateString) => {
        const dateMoment = moment(dateString, this.dateFormat, true);
        return dateMoment.isValid() ? dateMoment.toDate() : undefined;
    };

    handleChange = (date = null) => {
        const { onChange, returnEventIfError } = this.props;
        if (!onChange) return;

        const dateMoment = moment(date);
        let dateStringOrEvent;

        if (!dateMoment.isValid() && returnEventIfError) {
            let value = '';
            if (this.dayPickerInput) {
                const input = this.dayPickerInput.getInput();
                if (input)
                    value = input.value;
            }
            dateStringOrEvent = { target: { value } };
        } else
            dateStringOrEvent = this.formatDate(date);

        onChange(dateStringOrEvent, { dateMoment });
    };

    render() {
        const {
            shortMonth,
            disabled,
            renderTodayButton,
            minDate,
            maxDate,
            name,
            value,
            formatMessage,
            messages: { todayLabel },
            dayPickerOptions,
            dayPickerInputOptions
        } = this.props;
        const fromMonth = this.parseDate(minDate);
        const toMonth = this.parseDate(maxDate);
        return (
            <DayPickerInput
                ref={ instance => { this.dayPickerInput = instance; } }
                placeholder={ this.dateFormat }
                format={ this.dateFormat }
                formatDate={ this.formatDate }
                parseDate={ this.parseDate }
                onDayChange={ this.handleChange }
                inputProps={ {
                    disabled,
                    name,
                    className: 'DateField-form-control form-control DayPickerInput-input',
                    onKeyUp: this.handleDayPickerInputKeyUp,
                    onBeforeKeyDown: this.handleDayPickerInputBeforeKeyDown
                } }
                value={ value }
                component={ Input }
                dayPickerProps={ {
                    month: this.state.date,
                    fromMonth,
                    toMonth,
                    locale: 'en',
                    localeUtils: this.getLocaleUtils(shortMonth),
                    showOutsideDays: false,
                    enableOutsideDaysClick: false,
                    canChangeMonth: true,
                    navbarElement: Navbar,
                    captionElement: ({ date, locale, localeUtils }) => (
                        <Caption
                            fromMonth={ fromMonth }
                            toMonth={ toMonth }
                            date={ date }
                            locale={ locale }
                            localeUtils={ localeUtils }
                            onChange={ this.handleYearMonthChange }
                        />
                    ),
                    todayButton: renderTodayButton ? formatMessage(todayLabel) : '',
                    modifiers: {
                        disabled: { before: fromMonth, after: toMonth }
                    },
                    ...dayPickerOptions
                } }
                { ...dayPickerInputOptions }
            />
        );
    }
}
