import React from 'react';
import renderShallow from 'render-shallow';
import { default as MoveCountryButton } from '../move-country-button';
import noop from 'src/utils/noop';


describe('<MoveCountryButton>', () => {
    describe('when it renders', () => {
        const props = {
            thisListType: 'foo',
            theOtherListType: 'bar',
            selectedCountriesNumber: 1,
            onCountryMove: noop,
            theOtherListLabel: 'The Other List Label',
            forward: true,
            formatMessage: msg => msg,
            messages: {
                moveSelectedLabel: 'move selected label',
                moveToLabel: 'move to label'
            }
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<MoveCountryButton { ...props } />).output;
        });

        test('renders button with correct data', () => {
            expect(component).toMatchSnapshot();
        });
    });

});
