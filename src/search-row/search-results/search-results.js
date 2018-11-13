import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import some from 'lodash.some';
import capitalize from 'lodash.capitalize';
import upper from 'lodash.toupper';
import noop from 'src/utils/noop';
import { SEARCH_TYPES } from 'src/constants';
import { Attention, Search } from 'src/icons';
import { SelectInput, LoadingIndicator } from 'src/index';
import SearchResultOption from './search-result-option';
import './search-results.scss';

class SearchResults extends Component {
    static propTypes = {
        options: PropTypes.array,
        currentSearch: PropTypes.string,
        onInputChange: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        searchError: PropTypes.string,
        isLoading: PropTypes.bool,
        tags: PropTypes.array,
        searchName: PropTypes.string,

        formatMessage: PropTypes.func.isRequired,
        messages: PropTypes.shape({
            searchResultsHeadingLabel: PropTypes.object,
            noMatchLabel: PropTypes.object,
            searchPlaceholderLabel: PropTypes.object,
            searchArtistsPlaceholderLabel: PropTypes.object,
            tryAgainLabel: PropTypes.object,
            temporaryErrorLabel: PropTypes.object,
            searchErrorLabel: PropTypes.object,
            checkSpellingLabel: PropTypes.object,
            releasedDateLabel: PropTypes.object,
            releaseNameLabel: PropTypes.object
        }).isRequired
    };

    static defaultProps = {
        options: [],
        currentSearch: '',
        onInputChange: noop,
        onChange: noop,
        searchError: null,
        isLoading: false,
        tags: [],
        searchName: SEARCH_TYPES.ARTISTS
    };

    isTrackSearch = searchName => searchName === SEARCH_TYPES.TRACKS;

    menuRenderer = (
        searchError,
        query,
        tags,
        searchName,
        formatMessage,
        messages
    ) => {
        if (searchError)
            return this.renderSearchError(formatMessage, messages);

        const { searchResultsHeadingLabel } = messages;
        return ({
            options = [],
            onSelect,
            focusOption,
            focusedOption
        }) => {
            if (!query)
                return null;

            return [
                <div
                    key={ 0 }
                    className="SearchResults-heading"
                >
                    {
                        formatMessage(
                            searchResultsHeadingLabel,
                            {
                                searchName,
                                searchNameDisplay: capitalize(searchName),
                                searchNameUpper: upper(searchName)
                            }
                        )
                    }
                </div>,
                ...options.map((option, i) => {
                    const isSelected = this.isTrackSearch(searchName)
                        ? some(tags, tag => tag.isrc === option.isrc)
                        : some(tags, tag => tag.artistId === option.artistId);

                    const isFocused = (option === focusedOption);
                    const className = cx({
                        'Select-option': true,
                        [`Select-${searchName}`]: true,
                        'is-selected': isSelected,
                        'is-focused': isFocused
                    });

                    return (
                        <SearchResultOption
                            key={ i + 1 }
                            option={ option }
                            className={ className }
                            onFocus={ focusOption }
                            onSelect={ onSelect }
                            query={ query }
                            searchName={ searchName }
                            { ...option }
                        />
                    );
                })
            ];
        };
    }

    // Build the options that actually get passed to react-select via SelectInput.
    // Keep in mind that `value` and `label` are used internally by react-select for
    // comparison purposes.
    buildOptions = () => {
        const { options, searchName } = this.props;
        const isTrackSearch = this.isTrackSearch(searchName);
        return options.map(
            ({ isrc, trackName, artistId, artistName, imageUrl, releaseName, upc }, index) => ({
                index,
                artistId,
                artistName,
                imageUrl,
                isrc,
                upc,
                trackName,
                releaseName,
                value: isTrackSearch ? isrc : artistId,
                label: isTrackSearch ? trackName : artistName
            })
        );
    }

    renderValueComponent = (props) => (
        <span className="TagsInput-tag">
            { props.value.trackName || props.value.artistName }
            <a
                className="TagsInput-remove"
                onClick={ () => props.onRemove(props.value) }
            />
        </span>
    );

    renderNoResultsOrLoading = (
        query,
        searchName,
        isLoading,
        formatMessage,
        messages
    ) => {
        if (!query)
            return null;
        const { searchResultsHeadingLabel, noMatchLabel, checkSpellingLabel } = messages;
        if (isLoading)
            return [
                <div
                    key={ 0 }
                    className="SearchResults-heading"
                >
                    {
                        formatMessage(
                            searchResultsHeadingLabel,
                            {
                                searchName,
                                searchNameDisplay: capitalize(searchName),
                                searchNameUpper: upper(searchName)
                            }
                        )
                    }
                </div>,
                <div
                    key={ 1 }
                    className="SearchResultsLoadingIndicator"
                >
                    <LoadingIndicator />
                </div>
            ];
        return (
            <div>
                <h5 className="Search-no-results-label">
                    {
                        formatMessage(noMatchLabel,
                            { query, searchName, searchNameUpper: upper(searchName) }
                        )
                    }
                </h5>
                <h5 className="Search-no-results-label">
                    { formatMessage(checkSpellingLabel) }
                </h5>
            </div>
        );
    }

    renderSearchError = (formatMessage, messages) => () => {
        const { tryAgainLabel, temporaryErrorLabel, searchErrorLabel } = messages;
        return (
            <div className="SearchError">
                <h5 className="SearchError-label">
                    <Attention />
                    <span className="Bolder">
                        { formatMessage(searchErrorLabel) }
                    </span>
                </h5>
                <h5 className="SearchError-label">
                    { formatMessage(temporaryErrorLabel) }
                </h5>
                <h5 className="SearchError-label">
                    { formatMessage(tryAgainLabel) }
                </h5>
            </div>
        );
    };

    render() {
        const {
            currentSearch: query,
            onInputChange,
            onChange,
            searchError,
            isLoading,
            tags,
            searchName,
            formatMessage,
            messages
        } = this.props;

        const dropdownOptions = this.buildOptions();
        const { searchPlaceholderLabel, searchArtistsPlaceholderLabel } = messages;

        /* KEEP THE PROPERTIES ALPHABETICAL PLEASE */
        return (
            <div className="SearchResults-wrapper">
                <div className="SearchResults SearchResults-with-artist-track-dropdown">
                    <SelectInput
                        arrowRenderer={ noop }
                        cache={ false }
                        className={ cx({
                            'SearchResults-no-query': !query,
                            'SearchResults-loading': isLoading,
                            'SearchResults-with-dropdown': true
                        }) }
                        filterOptions={ false }
                        menuRenderer={
                            this.menuRenderer(
                                searchError,
                                query,
                                tags,
                                searchName,
                                formatMessage,
                                messages
                            )
                        }
                        multi
                        noResultsText={
                            this.renderNoResultsOrLoading(
                                query,
                                searchName,
                                isLoading,
                                formatMessage,
                                messages
                            )
                        }
                        onBlurResetsInput={ false }
                        onChange={ onChange }
                        onInputChange={ onInputChange }
                        options={ dropdownOptions }
                        placeholder={
                            this.isTrackSearch(searchName)
                                ? formatMessage(searchPlaceholderLabel)
                                : formatMessage(searchArtistsPlaceholderLabel)
                        }
                        scrollMenuIntoView={ false }
                        searchable
                        value={ tags }
                        valueComponent={ this.renderValueComponent }
                    />
                    <Search />
                </div>
            </div>
        );
    }
}

export default SearchResults;
