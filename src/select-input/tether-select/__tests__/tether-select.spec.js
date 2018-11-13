import TetherSelect from '../tether-select';
import React from 'react';
import TetherComponent from 'react-tether';
import renderShallow from 'render-shallow';
import { findWithType } from 'react-shallow-testutils';

describe('<TetherSelect>', () => {
    describe('when it renders with menu', () => {
        const props = {
            options: [
                { label: 'test', value: 1 }
            ]
        };
        let component;

        beforeAll(() => {
            const shallow = renderShallow(<TetherSelect { ...props } />);
            shallow.instance().setState({ isOpen: true });

            component = shallow.rerender();
        });

        test('renders a TetherComponent', () => {
            const tetherComponent = findWithType(component, TetherComponent);

            expect(tetherComponent).toBeTruthy();
        });
    });
});
