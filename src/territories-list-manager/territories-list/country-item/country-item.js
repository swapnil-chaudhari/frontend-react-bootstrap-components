import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const CountryItem = ({ isSelected, territoryName, onHandleSelect, isDisabled = false }) => {
    const inputClass = cx({
        disabled: isDisabled
    });

    const labelClass = cx({
        'ContinentItem-disabled': isDisabled,
        'ContinentItem-label': true
    });

    return (
        <label className={ labelClass }>
            <input
                type="checkbox"
                className={ inputClass }
                checked={ isSelected }
                onChange={ onHandleSelect }
                disabled={ isDisabled }
            />
            { territoryName }
        </label>
    );
};

CountryItem.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool,
    territoryName: PropTypes.string.isRequired,
    onHandleSelect: PropTypes.func.isRequired
};

export default CountryItem;
