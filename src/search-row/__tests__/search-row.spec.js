import React from 'react';
import renderShallow from 'render-shallow';
import { shallow } from 'enzyme';
import { findWithType } from 'react-shallow-testutils';
import noop from 'src/utils/noop';
import { SEARCH_TYPES } from 'src/constants';
import { DropdownButton } from 'src/index';
import SearchRow from '../search-row';
import SearchResults from '../search-results/search-results';

describe('<SearchRow>', () => {
    const commonProps = {
        formatMessage: m => m.defaultMessage,
        messages: {
            artistsLabel: { defaultMessage: 'artistsLabel' },
            tracksLabel: { defaultMessage: 'tracksLabel' },
            searchResultsHeadingLabel: { defaultMessage: 'searchResultsHeadingLabel' },
            noMatchLabel: { defaultMessage: 'noMatchLabel' },
            searchPlaceholderLabel: { defaultMessage: 'searchPlaceholderLabel' },
            searchArtistsPlaceholderLabel: { defaultMessage: 'searchArtistsPlaceholderLabel' },
            tryAgainLabel: { defaultMessage: 'tryAgainLabel' },
            temporaryErrorLabel: { defaultMessage: 'temporaryErrorLabel' },
            searchErrorLabel: { defaultMessage: 'searchErrorLabel' },
            checkSpellingLabel: { defaultMessage: 'checkSpellingLabel' },
            releasedDateLabel: { defaultMessage: 'releasedDateLabel' },
            releaseNameLabel: { defaultMessage: 'releaseNameLabel' }
        },
        currentSearch: '',
        isLoading: false,
        tags: []
    };
    const defaultSearchRowProps = {
        ...commonProps,
        results: {},
        artistsOrTracks: SEARCH_TYPES.TRACKS,
        onSearchStringChanging: noop,
        onSelect: noop,
        onSearchRequest: noop,
        onArtistsTracksDropdownSelect: noop
    };

    describe('with Tracks as search type', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchRow { ...defaultSearchRowProps } />
            ).output;
        });

        test('renders Tracks search layout without dropdown', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with Artists as search type', () => {
        const props = {
            ...defaultSearchRowProps,
            artistsOrTracks: SEARCH_TYPES.ARTISTS
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchRow { ...props } />
            ).output;
        });

        test('renders Artist search layout with a dropdown', () => {
            expect(findWithType(component, DropdownButton)).toBeTruthy();
            expect(component).toMatchSnapshot();
        });
    });

    describe('with Tracks as search type and selected track', () => {
        const currentSearch = 'test';
        const track1 = {
            artistId: '555344',
            artistName: 'DavidQuinlan',
            artistNameFacet: 'DavidQuinlan',
            imprint: 'SOMLIVRE',
            isrc: 'BRDVQ0800011',
            isrcId: '23204553',
            isrcName: 'QuandoEstouaoSeuLado',
            labelId: '21786',
            labelName: 'SomLivre',
            releaseId: '7891430104573',
            releaseName: 'MeuChamado,MinhaVida',
            releaseNameFacet: 'MeuChamado,MinhaVida',
            trackId: '21651861',
            trackName: 'QuandoEstouaoSeuLado',
            trackNameFacet: 'QuandoEstouaoSeuLado',
            trackType: 'music',
            upc: '7891430104573'
        };
        const track2 = {
            ...track1,
            artistId: '5553',
            upc: '7891430104574',
            isrc: 'BRDVQ0800012'
        };
        const props = {
            ...defaultSearchRowProps,
            artistsOrTracks: SEARCH_TYPES.TRACKS,
            currentSearch,
            results: { [currentSearch]: [track1.isrc, track2.isrc] },
            tracks: { [track1.isrc]: track1, [track2.isrc]: track2 },
            tags: [track1]
        };

        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchRow { ...props } />
            ).output;
        });

        test('renders proper component', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with artists results from a D3 label (key has extra info)', () => {
        describe('with uniq artists', () => {
            const currentSearch = 'test';
            const artists = {
                artist1234111: { artistId: 1234, artistName: 'Donald Trump' },
                artist9876: { artistId: 9876, artistName: 'Thomas Jefferson' },
                artist7777: undefined,
                artist5555111: { artistId: 5555, artistName: 'Hillary Clinton' }
            };
            const props = {
                ...defaultSearchRowProps,
                artistsOrTracks: SEARCH_TYPES.ARTISTS,
                currentSearch,
                results: { [currentSearch]: ['1234', '9876', '7777'] },
                artists
            };

            let wrapper;

            beforeAll(() => {
                wrapper = shallow(<SearchRow { ...props } />);
            });

            test('sets the prop for options based on the artist ids in results' +
                ' no undefined', () => {
                expect(wrapper.find(SearchResults).prop('options')).toEqual(
                    [artists.artist1234111, artists.artist9876]
                );
            });
        });

        describe('with duplicate artists but different additional info', () => {
            const currentSearch = 'test';
            const artists = {
                artist1234111: { artistId: 1234, artistName: 'Donald Trump' },
                artist1234222: { artistId: 1234, artistName: 'Donald Trump' },
                artist9876: { artistId: 9876, artistName: 'Thomas Jefferson' },
                artist7777: undefined,
                artist5555111: { artistId: 5555, artistName: 'Hillary Clinton' }
            };
            const props = {
                ...defaultSearchRowProps,
                artistsOrTracks: SEARCH_TYPES.ARTISTS,
                currentSearch,
                results: { [currentSearch]: ['1234', '9876', '7777'] },
                artists
            };

            let wrapper;

            beforeAll(() => {
                wrapper = shallow(<SearchRow { ...props } />);
            });

            test('sets the prop for options based on the artist ids in results' +
                ' without undefined and duplicates', () => {
                expect(wrapper.find(SearchResults).prop('options')).toEqual(
                    [artists.artist1234111, artists.artist9876]
                );
            });
        });
    });
});
