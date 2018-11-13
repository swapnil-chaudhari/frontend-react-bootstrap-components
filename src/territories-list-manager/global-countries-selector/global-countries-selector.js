import PropTypes from 'prop-types';
import React from 'react';
import './global-countries-selector.scss';


const GlobalCountriesSelector = (
    { onTerritorySelect, formatMessage, messages },
) => {
    /**
     * @description Dispatch action creator with param selectAll
     * @param listType {string}
     * @param territoryId {number}
     * @param selectAll {bool}
     */
    const handleSelectAll = () => onTerritorySelect(null, true);
    /**
     * @description Dispatch action creator with param select none
     * @param listType {string}
     * @param territoryId {number}
     * @param selectAll {bool}
     * @param selectNone {bool}
     */
    const handleSelectNone = () => onTerritorySelect(null, null, true);
    return (
        <div className="GlobalCountriesSelector">
            <b>Select:</b>
            <span
                className="GlobalCountriesSelector-all btn-link"
                onClick={ handleSelectAll }
            >
                <b>{ formatMessage(messages.selectAllLabel) }</b>
            </span>
            <span
                className="GlobalCountriesSelector-none btn-link"
                onClick={ handleSelectNone }
            >
                <b>{ formatMessage(messages.selectNoneLabel) }</b>
            </span>
        </div>
    );
};

GlobalCountriesSelector.propTypes = {
    onTerritorySelect: PropTypes.func.isRequired,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};


export default GlobalCountriesSelector;
