import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SEARCH_TYPES } from 'src/constants';
import { DropdownButton, MenuItem } from 'src';
import isEmpty from 'lodash.isempty';
import find from 'lodash.find';
import keys from 'lodash.keys';
import uniq from 'lodash.uniq';
import debouncedRequest from 'src/utils/debounce-search';

import SearchResults from './search-results/search-results';
import './search-row.scss';

export default class SearchRow extends Component {
    static propTypes = {
        results: PropTypes.object,
        artists: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        tracks: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        currentSearch: PropTypes.string,
        searchError: PropTypes.string,
        isLoading: PropTypes.bool,
        tags: PropTypes.array,
        artistsOrTracks: PropTypes.string,

        formatMessage: PropTypes.func.isRequired,
        messages: PropTypes.shape({
            artistsLabel: PropTypes.object,
            tracksLabel: PropTypes.object,
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
        }).isRequired,

        onSearchStringChanging: PropTypes.func.isRequired,
        onSearchRequest: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        onArtistsTracksDropdownSelect: PropTypes.func.isRequired
    };

    getValueOrDefault = (artistsOrTracks) => (isEmpty(artistsOrTracks) ? {} : artistsOrTracks);


    getArtistsFromSearchResults = (currentResults, artists) =>
        uniq(currentResults).map(
            (artistId) => {
                const resultKey = find(
                    keys(artists),
                        artistKey => RegExp(`^artist${artistId}`, 'g').test(artistKey)
                );

                return artists[resultKey];
            }
        ).filter(result => result);

    isSearchForTracks = () => {
        const { artistsOrTracks } = this.props;
        return artistsOrTracks === SEARCH_TYPES.TRACKS;
    };

    handleSearchStringChanging = (inputValue) => {
        const { onSearchStringChanging, onSearchRequest } = this.props;
        onSearchStringChanging(inputValue);
        debouncedRequest(inputValue, onSearchRequest, this.isSearchForTracks());
    };

    handleSelect = (payload) => {
        const { onSelect } = this.props;
        onSelect(payload, this.isSearchForTracks());
    };

    searchName = () => (this.isSearchForTracks() ? SEARCH_TYPES.TRACKS : SEARCH_TYPES.ARTISTS);

    renderArtistsTracksDropdown = () => {
        const {
            onArtistsTracksDropdownSelect,
            formatMessage,
            messages: { artistsLabel, tracksLabel }
        } = this.props;
        const title = this.isSearchForTracks()
            ? formatMessage(tracksLabel)
            : formatMessage(artistsLabel);

        return (
            <DropdownButton
                id="Filters-search-wrapper-dropdown"
                onSelect={ onArtistsTracksDropdownSelect }
                title={ title }
            >
                <MenuItem
                    eventKey={ SEARCH_TYPES.ARTISTS }
                    className="Filters-dropdown-item-artist"
                >
                    { formatMessage(artistsLabel) }
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={ SEARCH_TYPES.TRACKS } className="Filters-dropdown-item-track">
                    { formatMessage(tracksLabel) }
                </MenuItem>
            </DropdownButton>
        );
    };

    renderSearch = () => {
        const {
            tags,
            results,
            artists,
            tracks,
            isLoading,
            currentSearch,
            searchError,
            formatMessage,
            messages
        } = this.props;
        const searchName = this.searchName();
        const currentResults = results ? results[currentSearch] : null;
        const allTracks = this.getValueOrDefault(tracks);
        const allArtists = this.getValueOrDefault(artists);
        const commonProps = {
            isLoading,
            currentSearch,
            onInputChange: this.handleSearchStringChanging,
            searchError,
            tags,
            searchName,
            formatMessage,
            messages,
            onChange: this.handleSelect
        };
        let trackOrArtistResults;
        if (this.isSearchForTracks())
            trackOrArtistResults = currentResults
                ? currentResults.map(isrcUpc => allTracks[isrcUpc]).filter(el => el)
                : [];
        else
            trackOrArtistResults = currentResults
                ? this.getArtistsFromSearchResults(currentResults, allArtists)
                : [];
        return (
            <SearchResults
                { ...commonProps }
                options={ trackOrArtistResults }
            />
        );
    };

    render() {
        return (
            <div className="Filters-search-wrapper Filters-search-row">
                { this.renderArtistsTracksDropdown() }
                { this.renderSearch() }
            </div>
        );
    }
}
