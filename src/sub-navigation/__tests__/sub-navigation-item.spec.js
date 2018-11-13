import React from 'react';
import renderShallow from 'render-shallow';
import noop from 'src/utils/noop';
import SubNavigationItem from '../sub-navigation-item';

describe('<SubNavigationItem>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SubNavigationItem
                    href="#"
                    className="active"
                    onClick={ noop }
                >Project #1</SubNavigationItem>
            ).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
