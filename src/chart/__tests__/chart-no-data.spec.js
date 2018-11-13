import React from 'react';
import renderShallow from 'render-shallow';
import ChartNoData from '../chart-no-data';

describe('<ChartNoData>', () => {
    describe('when it renders with data', () => {
        let component;
        const props = {
            height: 400,
            width: 1000,
            noDataText: 'NO DATA'
        };

        beforeAll(() => {
            component = renderShallow(
                <ChartNoData { ...props } />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
