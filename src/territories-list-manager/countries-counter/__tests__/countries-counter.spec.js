import React from 'react';
import renderShallow from 'render-shallow';
import CountriesCounter from '../countries-counter';

describe('<CountriesCounter>', () => {
    describe('when it renders', () => {
        let component;
        const classes = (element) => element.props.className.split(' ');
        const props = {
            selectedCountriesNumber: 0,
            totalCountriesNumber: 0,
            formatMessage: msg => msg,
            messages: { countriesCounterOf: 'of' }
        };

        beforeAll(() => {
            component = renderShallow(<CountriesCounter { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('CountriesCounter');
        });

        test('should contain correct numbers', () => {
            expect(component).toMatchSnapshot();
        });
    });

});
