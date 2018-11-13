import PropTypes from 'prop-types';
import React from 'react';
import CountriesCounter from '../countries-counter/countries-counter';
import GlobalCountriesSelector from '../global-countries-selector/global-countries-selector';
import ListHeaderSearch from '../list-header-search/list-header-search';
import './list-header.scss';

const ListHeader = ({
    header,
    selectedCountriesNumber,
    totalCountriesNumber,
    onTerritorySelect,
    onCountrySearch,
    onCountrySearchClose,
    searchQuery,
    formatMessage,
    messages
}) => (
    <div className="ListHeader">
        <div className="ListHeader-list-type">
            <header>
                <h4 className="ListHeader-header-text">{ header }</h4>
            </header>
            <CountriesCounter
                selectedCountriesNumber={ selectedCountriesNumber }
                totalCountriesNumber={ totalCountriesNumber }
                formatMessage={ formatMessage }
                messages={ messages }
            />
        </div>
        <div className="ListHeader-search">
            <ListHeaderSearch
                onCountrySearch={ onCountrySearch }
                onCountrySearchCancel={ onCountrySearchClose }
                searchQuery={ searchQuery }
                formatMessage={ formatMessage }
                messages={ messages }
            />
        </div>
        <div className="ListHeader-global-selector">
            <GlobalCountriesSelector
                onTerritorySelect={ onTerritorySelect }
                formatMessage={ formatMessage }
                messages={ messages }
            />
        </div>
    </div>
);

ListHeader.propTypes = {
    header: PropTypes.string,
    selectedCountriesNumber: PropTypes.number,
    totalCountriesNumber: PropTypes.number,
    onTerritorySelect: PropTypes.func,
    onCountrySearch: PropTypes.func,
    onCountrySearchClose: PropTypes.func,
    searchQuery: PropTypes.string,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};

export default ListHeader;

