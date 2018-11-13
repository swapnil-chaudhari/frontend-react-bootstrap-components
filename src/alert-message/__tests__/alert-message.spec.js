import React from 'react';
import renderShallow from 'render-shallow';
import AlertMessage from '../alert-message';

describe('<Alert>', () => {
    describe('when it is rendered with default props', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<AlertMessage />).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it is rendered with content', () => {
        const props = {
            bsStyle: 'warning',
            children: ['Some Message']
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<AlertMessage { ...props } />).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
