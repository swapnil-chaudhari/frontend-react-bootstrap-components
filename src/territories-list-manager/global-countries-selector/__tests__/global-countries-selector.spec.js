import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass } from 'react-shallow-testutils';
import GlobalountriesSelector from '../global-countries-selector';

describe('<GlobalountriesSelector>', () => {
    const formatMessage = msg => msg;
    const messages = {
        selectAllLabel: 'select all label',
        selectNoneLabel: 'select none label'
    };

    describe('when it renders', () => {
        let component;
        const props = {
            onTerritorySelect: jest.fn(),
            formatMessage,
            messages
        };

        beforeAll(() => {
            component = renderShallow(<GlobalountriesSelector { ...props } />).output;
        });

        test('should render correct class', () => {
            expect(component.props.className).toEqual('GlobalCountriesSelector');
        });

        test('should render select all and select none elements', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when select all clicked', () => {
        let component;
        const props = {
            onTerritorySelect: jest.fn(),
            formatMessage,
            messages
        };

        beforeAll(() => {
            component = renderShallow(<GlobalountriesSelector { ...props } />).output;
            findWithClass(component, 'GlobalCountriesSelector-all btn-link').props.onClick();
        });

        test('should call onTerritorySelect with all param', () => {
            expect(props.onTerritorySelect).toHaveBeenCalledWith(
                null,
                true
            );
        });
    });

    describe('when select none clicked', () => {
        let component;
        const props = {
            onTerritorySelect: jest.fn(),
            formatMessage,
            messages
        };

        beforeAll(() => {
            component = renderShallow(<GlobalountriesSelector { ...props } />).output;
            findWithClass(component, 'GlobalCountriesSelector-none btn-link').props.onClick();
        });

        test('should call onTerritorySelect with none param', () => {
            expect(props.onTerritorySelect).toHaveBeenCalledWith(
                null,
                null,
                true
            );
        });
    });
});
