import React from 'react';
import renderShallow from 'render-shallow';
import { oneLine } from 'common-tags';
import { findWithClass } from 'react-shallow-testutils';
import TerritoriesListManager from '../territories-list-manager';
import noop from 'src/utils/noop';
import { TERRITORIES_KEYS } from '../constants';

describe('<TerritoriesListManager>', () => {
    const classes = (element) => element.props.className.split(' ');

    const commonProps = {
        thisListType: 'foo',
        theOtherListType: 'bar',
        forward: true,
        header: 'Cleared For Sale',
        totalNumberOfCountries: 0,
        onUndoNotificationClose: noop,
        undoNotificationVisible: false,
        onTerritorySelect: noop,
        countries: [],
        selectedCountries: [],
        movedCountriesNumber: 0,
        onTerritoryMovedUndo: noop,
        onTerritorySearchClose: noop,
        onTerritoryMove: noop,
        onCountrySelect: noop,
        theOtherListLabel: 'the other list',
        formatMessage: msg => msg,
        messages: {},
        territoryIdKey: TERRITORIES_KEYS.ID,
        territoryNameKey: TERRITORIES_KEYS.NAME,
        continentNameKey: TERRITORIES_KEYS.CONTINENT
    };

    describe('when it renders', () => {
        const props = { ...commonProps };
        let component;

        beforeAll(() => {
            component = renderShallow(<TerritoriesListManager { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('TerritoriesListManager');
            expect(classes(component)).toContain('col-xs-6');
        });

        test('should contain 3 components', () => {
            expect(findWithClass(
                component,
                'TerritoriesListManager'
            ).props.children).toHaveLength(3);
        });

        test('should contain TerritoriesListManager-list', () => {
            expect(findWithClass(
                component,
                'TerritoriesListManager-list Opm-thin-grey-border Opm-border-radius'
            ).type).toEqual('div');
        });

        test(
            'should contain ListHeader component in TerritoriesListManager-list',
            () => {
                expect(findWithClass(
                    component,
                    'TerritoriesListManager-list Opm-thin-grey-border Opm-border-radius'
                )).toMatchSnapshot();
            }
        );

        test(
            'should hide TerritoriesListManager-undo-message when no changes available ',
            () => {
                expect(findWithClass(
                    component,
                    'TerritoriesListManager-undo-message Opm-thin-grey-border hide'
                )).toMatchSnapshot();
            }
        );

        test('should contain TerritoriesListManager-move-button ', () => {
            expect(component).toMatchSnapshot();
        });

        test('should hide MoveCountryButton when no selected countries', () => {
            const moveButton = findWithClass(
                component,
                'TerritoriesListManager-move-button Opm-border-radius'
            );
            expect(moveButton.props.className).toContain('hide');
        });
    });

    describe('when it renders with selected countries', () => {
        const props = {
            ...commonProps,
            selectedCountries: [{}, {}],
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<TerritoriesListManager { ...props } />).output;
        });

        test('should show MoveCountryButton when there are selected countries', () => {
            const moveButton = findWithClass(
                component,
                'TerritoriesListManager-move-button Opm-border-radius'
            );
            expect(moveButton.props.className).toContain('TerritoriesListManager-move-button');
            expect(moveButton.props.className).toContain('Opm-border-radius');
        });
    });

    describe(oneLine`when undoNotificationVisible is true
    kand movedCountriesNumber is greater than 0`, () => {
        let component;
        const props = {
            ...commonProps,
            undoNotificationVisible: true,
            movedCountriesNumber: 2
        };

        beforeAll(() => {
            component = renderShallow(<TerritoriesListManager { ...props } />).output;
        });

        test('should show TerritoriesListManager-undo-message', () => {
            expect(findWithClass(
                component,
                'TerritoriesListManager-undo-message Opm-thin-grey-border'
            )).toMatchSnapshot();
        });
    });

    describe('when search is triggered', () => {
        const props = {
            ...commonProps,
            territoryNameKey: 'countryName',
            totalNumberOfCountries: 1,
            countries: [{ countryName: 'Japan' }],
        };
        let component;
        let instance;
        let rerender;

        beforeAll(() => {
            ({ output: component, instance, rerender } = renderShallow(
                <TerritoriesListManager { ...props } />
            ));
            instance().handleTerritorySearch('Japan');
            component = rerender();
        });

        test('should show filtered list', () => {
            expect(findWithClass(
                component,
                'TerritoriesListManager-territories-list'
            )).toMatchSnapshot();
        });
    });
});
