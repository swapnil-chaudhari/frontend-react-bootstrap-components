import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash.range';

const Caption = ({ fromMonth, toMonth, date, locale, localeUtils, onChange }) => {
    const from = fromMonth || new Date(1900, 0, 1);
    const to = toMonth || new Date(2099, 11, 1);
    const allYears = range(from.getFullYear(), to.getFullYear() + 1);
    const allMonths = localeUtils.getMonths(locale);
    const currentDateYear = date.getFullYear();
    const firstMonth = currentDateYear === from.getFullYear() ? from.getMonth() : 0;
    const lastMonth = currentDateYear === to.getFullYear() ? to.getMonth() : 11;

    const handleChange = e => {
        const { year, month } = e.target.form;
        onChange(new Date(year.value, month.value));
    };
    return (
        <form className="DayPicker-Caption form-inline">
            <select
                className="DayPicker-Month-Picker form-control"
                name="month"
                value={ date.getMonth() }
                onChange={ handleChange }
            >
                {
                    allMonths.slice(firstMonth, lastMonth + 1).map((month, i) => (
                        <option key={ month } value={ i + firstMonth }>
                            { month }
                        </option>
                    ))
                }
            </select>
            <select
                className="DayPicker-Year-Picker form-control"
                name="year"
                value={ date.getFullYear() }
                onChange={ handleChange }
            >
                {
                    allYears.map(year => (
                        <option key={ year } value={ year }>
                            { year }
                        </option>
                    ))
                }
            </select>
        </form>
    );
};

Caption.propTypes = {
    shortMonth: PropTypes.bool,
    fromMonth: PropTypes.instanceOf(Date),
    toMonth: PropTypes.instanceOf(Date),
    date: PropTypes.instanceOf(Date).isRequired,
    locale: PropTypes.string,
    localeUtils: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Caption;
