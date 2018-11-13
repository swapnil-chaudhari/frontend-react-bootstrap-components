import React from 'react';
import renderShallow from 'render-shallow';
import SearchResultOption from '../search-result-option';

describe('<SearchResultOption> when searching for tracks', () => {
    describe('with selected item track', () => {
        const props = {
            className: 'Search',
            artistName: 'Hi-Fi',
            releaseName: 'Aromati vanili',
            imageUrl: 'https://google.com/images/hi-fi',
            isrc: 'BN0123456789',
            option: { upc: 'BN0123456789_012345678905', trackName: 'Nam ne dano' },
            searchName: 'tracks'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchResultOption { ...props } />
            ).output;
        });

        test('renders component with image and content', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('without image link in result item', () => {
        const props = {
            className: 'Search',
            artistName: 'Hi-Fi',
            releaseName: 'Aromati vanili',
            isrc: 'BN0123456789',
            option: { upc: 'BN0123456789_012345678905', trackName: 'Nam ne dano' },
            searchName: 'tracks'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchResultOption { ...props } />
            ).output;
        });

        test('renders empty image placeholder', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with search query', () => {
        const props = {
            className: 'Search',
            artistName: 'Hi-Fi',
            releaseName: 'Aromati vanili',
            imageUrl: 'https://google.com/images/hi-fi',
            isrc: 'BN0123456789',
            option: { upc: 'BN0123456789_012345678905', trackName: 'Nam ne dano' },
            query: 'fi',
            searchName: 'tracks'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchResultOption { ...props } />
            ).output;
        });

        test('renders selected item with highlighting', () => {
            expect(component).toMatchSnapshot();
        });
    });
});

describe('<SearchResultOption> when searching for artists', () => {
    const props = {
        className: 'Search',
        artistName: 'Hi-Fi',
        releaseName: undefined,
        imageUrl: undefined,
        isrc: undefined,
        option: { artistId: '3456789', artistName: 'Hi-Fi' },
        searchName: 'artists'
    };

    describe('without search query', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SearchResultOption { ...props } />
            ).output;
        });

        test('renders selected item without highlighting', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with search query', () => {
        let component;

        beforeAll(() => {
            props.query = 'fi';
            component = renderShallow(
                <SearchResultOption { ...props } />
            ).output;
        });

        test('renders selected item with highlighted query', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
