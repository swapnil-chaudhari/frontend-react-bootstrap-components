import React from 'react';
import renderShallow from 'render-shallow';
import { LoadingIndicator } from 'src/index';

describe('<LoadingIndicator>', () => {

    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<LoadingIndicator />).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders a small version', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<LoadingIndicator small={ true } />).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a top offset', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<LoadingIndicator top={ 4 } />).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders fullscreen', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<LoadingIndicator fullscreen={ true } />).output;
        });

        test('should have proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
