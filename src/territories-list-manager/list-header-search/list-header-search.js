import PropTypes from 'prop-types';
import React from 'react';
import CloseRound from 'src/icons/close-round';
import Search from 'src/icons/search';
import cx from 'classnames';
import './list-header-search.scss';

const ListHeaderSearch = ({
    onCountrySearch,
    onCountrySearchCancel,
    searchQuery,
    formatMessage,
    messages
}) => {
    const handleTerritorySearch = (event) => {
        const { target: { value } } = event;

        if (value.length === 0)
            return onCountrySearchCancel();

        return onCountrySearch(value);
    };

    const handleClearSearch = () => {
        onCountrySearchCancel();
    };

    const closeIconClasses = cx({
        'ListHeaderSearch-close': true,
        hide: searchQuery.length === 0
    });

    return (
        <div className="ListHeaderSearch">
            <span className="ListHeaderSearch-search">
                <Search />
            </span>
            <input
                type="text"
                className="ListHeaderSearch-field"
                placeholder={
                    formatMessage(messages.searchPlaceholder)
                }
                onChange={ handleTerritorySearch }
                value={ searchQuery }
            />
            <span className={ closeIconClasses } onClick={ handleClearSearch }>
                <CloseRound />
            </span>
        </div>
    );
};

ListHeaderSearch.propTypes = {
    onCountrySearch: PropTypes.func,
    onCountrySearchCancel: PropTypes.func,
    searchQuery: PropTypes.string,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};


export default ListHeaderSearch;
