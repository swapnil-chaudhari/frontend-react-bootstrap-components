import React from 'react';
import renderShallow from 'render-shallow';
import noop from 'src/utils/noop';
import Checkbox from '../checkbox';
import { findWithType } from 'react-shallow-testutils';

describe('<Checkbox>', () => {
    let component;

    describe('when it renders', () => {
        beforeAll(() => {
            const { output } = renderShallow(
                <Checkbox checked disabled onChange={ noop } />
            );

            component = output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('it can add a partial state className', () => {
        beforeAll(() => {
            const { output } = renderShallow(
                <Checkbox partial checked disabled onChange={ noop } />
            );

            component = output;
        });

        test('has the className', () => {
            expect(findWithType(component, 'label').props.className).toEqual('partial');
        });
    });
});
