import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass } from 'react-shallow-testutils';
import { default as ThreeArrowsIcon } from '../three-arrows-icon';

describe('<ThreeArrowsIcon>', () => {
    describe('it renders for clearedForSale list', () => {
        const props = {
            isHidden: false,
            reversed: false
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ThreeArrowsIcon { ...props } />).output;
        });

        test('list with default directed icons', () => {
            expect(
                findWithClass(component, 'MoveCountryButton-icons').props.className
            ).toContain('MoveCountryButton-icons');
        });
    });

    describe('it renders for notClearedForSale list', () => {
        const props = {
            isHidden: false,
            reversed: true
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ThreeArrowsIcon { ...props } />).output;
        });

        test('list with reverse directed icons', () => {
            expect(
                findWithClass(component, 'MoveCountryButton-icons').props.className
            ).toContain('MoveCountryButton-reverse');
        });
    });
});
