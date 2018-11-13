import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unescape from 'lodash.unescape';
import { SEARCH_TYPES } from 'src/constants';

class SearchResultOption extends Component {
    static propTypes = {
        option: PropTypes.shape({
            upc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            trackName: PropTypes.string
        }).isRequired,
        isrc: PropTypes.string,
        imageUrl: PropTypes.string,
        artistName: PropTypes.string,
        releaseName: PropTypes.string,
        query: PropTypes.string,
        className: PropTypes.string,
        onSelect: PropTypes.func,
        onFocus: PropTypes.func,
        searchName: PropTypes.string
    };

    getHighlightedTitle = (text = '', query) => {
        if (!query)
            return text;

        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();

        const parts = lowerText.split(lowerQuery);

        if (parts.length > 1) {
            let lettersCounter = 0;
            const partsLastIndex = parts.length - 1;
            return parts.map((part, index) => {
                const textNode = (
                    <span>
                        { text.slice(lettersCounter, lettersCounter + part.length) }
                    </span>
                );

                lettersCounter += part.length;

                const highlightedNode = (index !== partsLastIndex) ? (
                    <span className="Select-option-highlighted">
                        { text.slice(lettersCounter, lettersCounter + query.length) }
                    </span>
                ) : null;

                lettersCounter += query.length;

                return (
                    <span key={ index }>
                        { textNode }
                        { highlightedNode }
                    </span>
                );
            });
        }

        return text;
    };

    isSearchForTracks = () =>
        this.props.searchName === SEARCH_TYPES.TRACKS;

    handleClick = (e) => {
        this.props.onSelect(this.props.option, e);
    };

    handleMouseMove = (e) => {
        this.props.onFocus(this.props.option, e);
    };

    renderImage = (imageUrl) => (
        this.isSearchForTracks() ?
            <div className="SearchResultsItem-image">
            {
                imageUrl ? (
                    <img className="TrackAlbumArt" role="presentation" src={ imageUrl } />
                ) : <div className="SearchResultsItem-image-placeholder" />
            }
            </div> : ''
    );

    renderReleaseName = () => {
        const { releaseName } = this.props;
        return releaseName === undefined ? '' : (
            <span> &middot; { releaseName }</span>
        );
    };

    render() {
        const {
            option,
            className,
            artistName,
            imageUrl,
            isrc,
            query
        } = this.props;

        return (
            <div
                className={ className }
                role="option"
                onClick={ this.handleClick }
                onMouseMove={ this.handleMouseMove }
            >
                { this.renderImage(imageUrl) }
                <div className="SearchResultsItem-isrc">
                    { this.getHighlightedTitle(isrc, query) }
                </div>
                <div className="SearchResultsItem-trackTitle">
                    { this.getHighlightedTitle(option.trackName, query) }
                </div>
                <div className="SearchResultsItem-artist">
                    {
                        this.getHighlightedTitle(unescape(artistName), query)
                    } { this.renderReleaseName() }
                </div>
            </div>
        );
    }
}

export default SearchResultOption;
