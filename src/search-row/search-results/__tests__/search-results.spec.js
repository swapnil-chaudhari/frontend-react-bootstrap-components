import React from 'react';
import renderShallow from 'render-shallow';
import { shallow } from 'enzyme';
import { findWithType } from 'react-shallow-testutils';
import noop from 'src/utils/noop';
import { SelectInput } from 'src/index';
import SearchResults from '../search-results';

const labels = {
    formatMessage: m => m.defaultMessage,
    messages: {
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
    }
};

describe('<SearchResults>', () => {
    describe('when in default state', () => {
        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            searchName: 'tracks',
            ...labels
        };
        let component;

        beforeAll(() => {
            const { output, instance } = renderShallow(<SearchResults { ...props } />);
            component = output;
            instance.menuRenderer = noop;
        });

        test('renders component with correct properties ', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when artist dropdown enabled and searching for tracks', () => {
        const tags = [{
            isrc: 'iii',
            upc: 'uuu'
        }, {
            isrc: 'jjj',
            upc: 'zzz'
        }];
        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            tags,
            searchName: 'tracks',
            ...labels
        };
        let component;

        beforeAll(() => {
            const { output, instance } = renderShallow(<SearchResults { ...props } />);
            component = output;
            instance.menuRenderer = noop;
        });

        test('renders search component with Tracks selected in dropdown', () => {
            expect(component).toMatchSnapshot();
        });
    });


    describe('with artist dropdown enabled and searching for artists', () => {
        const tags = [{
            isrc: 'iii',
            upc: 'uuu'
        }, {
            isrc: 'jjj',
            upc: 'zzz'
        }];
        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            tags,
            searchName: 'artists',
            ...labels
        };
        let component;

        beforeAll(() => {
            const { output, instance } = renderShallow(<SearchResults { ...props } />);
            component = output;
            instance.menuRenderer = noop;
        });

        test('renders search component with Artist selected in dropdown', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with tags and searching for tracks)', () => {
        const tags = [{
            isrc: 'iii',
            upc: 'uuu'
        }, {
            isrc: 'jjj',
            upc: 'zzz'
        }];
        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            tags,
            searchName: 'tracks',
            ...labels
        };
        let component;

        beforeAll(() => {
            const { output, instance } = renderShallow(<SearchResults { ...props } />);
            component = output;
            instance.menuRenderer = noop;
        });

        test('renders component without dropdown', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with tags enabled', () => {
        const selectedTags = [{ isrc: 'BN0123456789' }];
        const props = {
            options: [
                {
                    artistName: 'Hi-Fi',
                    releaseName: 'Aromati vanili',
                    imageUrl: 'https://google.com/images/hi-fi',
                    isrc: 'BN0123456789',
                    option: { value: 'BN0123456789_012345678905', label: 'Nam ne dano' }
                },
                {
                    artistName: 'Alla Borisovna Pugacheva',
                    isrc: 'BN0123456781',
                    imageUrl: 'https://google.com/images/pugacheva',
                    releaseName: 'The best of the best',
                    option: { value: 'BN0123456781_012345678901', label: 'Pozovi menya s soboi' }
                }
            ],
            onSelect: noop,
            focusOption: noop,
            ...labels
        };
        let selectedSearchResult;
        let unselectedSearchResult;

        beforeAll(() => {
            const component = new SearchResults();
            const {
                1: selectedMenuItem,
                2: unselectedMenuItem
            } = component.menuRenderer(
                null,
                'test',
                selectedTags,
                'tracks',
                labels.formatMessage,
                labels.messages
            )(props);
            selectedSearchResult = renderShallow(
                selectedMenuItem
            ).output;
            unselectedSearchResult = renderShallow(
                unselectedMenuItem
            ).output;
        });

        test(
            'search results has is-selected class when item is picked for search',
            () => {
                expect(selectedSearchResult.props.className).toEqual(
                    'Select-option Select-tracks is-selected');
            }
        );

        test(
            'search results does not have is-selected class when item is not picked for search',
            () => {
                expect(unselectedSearchResult.props.className).toEqual(
                    'Select-option Select-tracks');
            }
        );
    });

    describe('when loading is passed as true', () => {
        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: true,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            searchName: 'tracks',
            ...labels
        };
        let component;

        beforeAll(() => {
            const { output, instance } = renderShallow(<SearchResults { ...props } />);
            component = output;
            instance.menuRenderer = noop;
        });

        test('renders loading state', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when search error is passed', () => {
        const errorFunction = () => {};
        const menuRenderer = (error) => {
            if (error)
                return errorFunction;
        };

        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: 'some error',
            searchName: 'tracks',
            ...labels
        };
        let component;

        beforeAll(() => {
            const { output, instance } = renderShallow(<SearchResults { ...props } />);
            component = output;
            instance.menuRenderer = menuRenderer;
        });

        test('renders component with error', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when no text in the search field', () => {
        const props = {
            options: [],
            currentSearch: '',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            searchName: 'tracks',
            ...labels
        };

        test('renders component with error', () => {
            const component = renderShallow(<SearchResults { ...props } />).output;
            const inputComponent = findWithType(component, SelectInput);
            expect(inputComponent.props.className).toContain('SearchResults-no-query');
        });

        test('does not display search results dropdown', () => {
            const { searchError, currentSearch, tags, searchName, formatMessage, messages } = props;
            const instance = shallow(<SearchResults { ...props } />).instance();
            const menuFunction = instance.menuRenderer(
                searchError, currentSearch, tags, searchName, formatMessage, messages
            );
            expect(menuFunction({})).toEqual(null);
        });
    });

    describe('with custom search name format', () => {
        const props = {
            options: [],
            currentSearch: 'test',
            isLoading: false,
            onInputChange: noop,
            onChange: noop,
            searchError: '',
            searchName: 'tracks',
            ...labels,
            formatMessage: jest.fn()
        };

        test('renders capitalized heading label', () => {
            const { currentSearch, searchName, isLoading, formatMessage, messages } = props;
            const instance = shallow(<SearchResults { ...props } />).instance();
            instance.renderNoResultsOrLoading(
                currentSearch, searchName, isLoading, formatMessage, messages
            );
            expect(formatMessage).toHaveBeenCalledWith(
                messages.noMatchLabel,
                { query: 'test', searchName: 'tracks', searchNameUpper: 'TRACKS' }
            );
        });

        test('renders capitalized hint when loading is true', () => {
            const propsForTest = { ...props, isLoading: true };
            const { currentSearch, searchName, isLoading, formatMessage, messages } = propsForTest;
            const instance = shallow(<SearchResults { ...propsForTest } />).instance();
            instance.renderNoResultsOrLoading(
                currentSearch, searchName, isLoading, formatMessage, messages
            );
            expect(formatMessage).toHaveBeenCalledWith(
                messages.searchResultsHeadingLabel,
                { searchName: 'tracks', searchNameDisplay: 'Tracks', searchNameUpper: 'TRACKS' }
            );
        });

        test('renders capitalized header in result dropdown', () => {
            const { searchError, currentSearch, tags, searchName, formatMessage, messages } = props;
            const instance = shallow(<SearchResults { ...props } />).instance();
            instance.menuRenderer(
                searchError, currentSearch, tags, searchName, formatMessage, messages
            )({});
            expect(formatMessage).toHaveBeenCalledWith(
                messages.searchResultsHeadingLabel,
                { searchName: 'tracks', searchNameDisplay: 'Tracks', searchNameUpper: 'TRACKS' }
            );
        });
    });
});
