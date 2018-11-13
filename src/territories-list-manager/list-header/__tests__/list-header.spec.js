import React from 'react';
import renderShallow from 'render-shallow';
import { oneLine } from 'common-tags';
import { findWithClass } from 'react-shallow-testutils';
import ListHeader from '../list-header';
import noop from 'src/utils/noop';

describe('<ListHeader>', () => {
    describe('when it renders', () => {
        let component;
        const classes = (element) => element.props.className.split(' ');
        const props = {
            header: 'Cleared For Sale',
            selectedCountriesNumber: 0,
            totalCountriesNumber: 0,
            onTerritorySelect: noop,
            onCountrySearch: noop,
            onCountrySearchCancel: noop,
            searchQuery: '',
            formatMessage: noop,
            messages: {}
        };

        beforeAll(() => {
            component = renderShallow(<ListHeader { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('ListHeader');
        });

        test('should contain 3 components', () => {
            expect(findWithClass(
                component,
                'ListHeader'
            ).props.children).toHaveLength(3);
        });

        test('should contain ListHeader-list-type', () => {
            expect(findWithClass(
                component,
                'ListHeader'
            ).props.children[0].props.className).toEqual('ListHeader-list-type');
        });

        test(oneLine`should render CountriesCounter with selectedCountriesNumber
            and totalCountriesNumber from props`, () => {
            const container = findWithClass(
                component,
                'ListHeader'
            ).props.children[0];
            expect(container.props.children[1]).toMatchSnapshot();
        });

        test('should contain ListHeader-search', () => {
            expect(findWithClass(
                component,
                'ListHeader-search'
            )).toMatchSnapshot();
        });

        test('should contain ListHeader-global-selector', () => {
            expect(findWithClass(
                component,
                'ListHeader-global-selector'
            )).toMatchSnapshot();
        });
    });

});
