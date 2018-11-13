import React from 'react';
import renderShallow from 'render-shallow';
import ChartGrid from '../chart-grid';

describe('<ChartGrid>', () => {
    describe('when it renders', () => {
        const props = {
            xTicks: [1, 2],
            yTicks: [3, 4],
            xScale: (tick) => tick * 10,
            yScale: (tick) => tick * 100,
            xOffset: 5,
            width: 888,
            height: 400
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ChartGrid { ...props } />).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
