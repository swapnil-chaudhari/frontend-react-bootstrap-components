import React from 'react';
import renderShallow from 'render-shallow';
import ChartYaxis from '../chart-y-axis';

describe('<ChartYaxis>', () => {
    describe('when it renders', () => {
        const props = {
            x: 1, y: 2,
            width: 888,
            height: 400,
            scale: (tick) => tick,
            ticks: [1, 2],
            tickWidth: 10,
            tickFormat: (tick) => tick * 10
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <ChartYaxis { ...props } />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
