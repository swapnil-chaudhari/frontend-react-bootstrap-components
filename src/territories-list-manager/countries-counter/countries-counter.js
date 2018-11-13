import PropTypes from 'prop-types';
import React from 'react';
import './countries-counter.scss';

const CountriesCounter = ({
    selectedCountriesNumber, totalCountriesNumber, formatMessage, messages
}) => (
    /* eslint-disable max-len */
    <div className="CountriesCounter">
        <span>
            { selectedCountriesNumber } { formatMessage(messages.countriesCounterOf) } { totalCountriesNumber }
        </span>
    </div>
    /* eslint-enable max-len */
);

CountriesCounter.propTypes = {
    selectedCountriesNumber: PropTypes.number,
    totalCountriesNumber: PropTypes.number,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};

export default CountriesCounter;
