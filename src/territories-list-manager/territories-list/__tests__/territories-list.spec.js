import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass } from 'react-shallow-testutils';
import TerritoriesList from '../territories-list';
import { TERRITORIES_KEYS } from '../../constants';
import noop from 'src/utils/noop';

describe('<TerritoriesList>', () => {
    const classes = (element) => element.props.className.split(' ');
    const theOtherListLabel = 'NOT Cleared for Sale';
    const formatMessage = msg => msg;
    const messages = {
        emptyListLabel: 'empty list label',
        emptyListLabelFrom: 'empty list label from',
        emptyListDescription: 'empty list description'
    };

    describe('when it renders', () => {
        let component;
        const props = {
            theOtherListLabel,
            onCountrySelect: noop,
            territories: [
                { orchId: 14, continent: 'Asia', territoryName: 'Afghanistan' },
                { orchId: 15, continent: 'Africa', territoryName: 'Zimbabwe' },
                { orchId: 16, continent: 'Asia', territoryName: 'Nepal' }
            ],
            selectedCountries: [
                { orchId: 14, continent: 'Asia', territoryName: 'Afghanistan' },
                { orchId: 15, continent: 'Africa', territoryName: 'Zimbabwe' }
            ],
            expandAll: false,
            territoryIdKey: TERRITORIES_KEYS.ID,
            territoryNameKey: TERRITORIES_KEYS.NAME,
            continentNameKey: TERRITORIES_KEYS.CONTINENT,
            formatMessage,
            messages
        };

        beforeAll(() => {
            component = renderShallow(<TerritoriesList { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('TerritoriesList');
        });

        test('should render continents and countries', () => {
            expect(component).toMatchSnapshot();
        });

        test('should contain 2 continents', () => {
            const children = findWithClass(
                component,
                'TerritoriesList'
            ).props.children;

            expect(children).toHaveLength(2);
        });
    });

    describe('when it renders without countries', () => {
        let component;
        const props = {
            theOtherListLabel,
            onCountrySelect: noop,
            territories: [],
            selectedCountries: [],
            territoryIdKey: TERRITORIES_KEYS.ID,
            territoryNameKey: TERRITORIES_KEYS.NAME,
            continentNameKey: TERRITORIES_KEYS.CONTINENT,
            formatMessage,
            messages
        };

        beforeAll(() => {
            component = renderShallow(<TerritoriesList { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('TerritoriesList-empty');
        });

        test('should render empty list when no countries passed', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
