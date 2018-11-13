import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass, findWithType } from 'react-shallow-testutils';
import CountryItem from '../country-item';

describe('<CountryItem>', () => {
    describe('when it renders as country item', () => {
        let component;
        const classes = (element) => element.props.className.split(' ');
        const props = {
            listType: 'clearedForSale',
            isSelected: true,
            isDisabled: false,
            territoryName: 'Ukraine',
            onHandleSelect: jest.fn()
        };

        beforeAll(() => {
            component = renderShallow(<CountryItem { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('ContinentItem-label');
        });

        test('renders the correct type', () => {
            expect(component.type).toEqual('label');
        });

        test('should contain input', () => {
            const childInput = findWithClass(
                component,
                'ContinentItem-label'
            ).props.children[0];
            expect(childInput.type).toEqual('input');
        });

        test('should contain input checkbox and territory name', () => {
            expect(component).toMatchSnapshot();
        });

        test('should call onHandleSelect on input checkbox change', () => {
            const input = findWithType(component, 'input');

            input.props.onChange();

            expect(props.onHandleSelect).toHaveBeenCalledTimes(1);
        });
    });
});
