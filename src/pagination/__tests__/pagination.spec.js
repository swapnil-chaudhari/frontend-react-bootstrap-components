import React from 'react';
import renderShallow from 'render-shallow';
import noop from 'src/utils/noop';
import Pagination from '../pagination';

describe('<Pagination>', () => {
    describe('when it renders', () => {
        const props = {
            items: 20,
            maxButtons: 5,
            activePage: 2,
            onSelect: noop
        };

        let component;

        beforeAll(() => {
            component = renderShallow(<Pagination { ...props } />).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with size attribute', () => {
        const props = {
            items: 20,
            maxButtons: 5,
            activePage: 2,
            onSelect: noop,
            size: 'small'
        };

        let component;

        beforeAll(() => {
            component = renderShallow(<Pagination { ...props } />).output;
        });

        test('adds classname Pagination-small for component wrapper', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
