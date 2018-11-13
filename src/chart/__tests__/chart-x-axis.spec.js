import React from 'react';
import renderShallow from 'render-shallow';
import ChartXaxis from '../chart-x-axis';

describe('<ChartXaxis>', () => {
    describe('when it renders', () => {
        let component;
        const ticks = ['2018-03-12', '2018-03-24', '2018-04-05'];
        const props = {
            ticks,
            height: 400,
            xAxisOffset: 50,
            yAxisOffset: -25,
            width: 888,
            scale: (i) => i
        };

        beforeAll(() => {
            component = renderShallow(
                <ChartXaxis { ...props } />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it has hover', () => {
        let component;
        const hover = {
            hoverText: 'February 15th, 2005',
            hoverPosition: 120
        };
        const ticks = ['2018-03-12', '2018-03-24', '2018-04-05'];
        const props = {
            hover,
            ticks,
            height: 400,
            xAxisOffset: 50,
            yAxisOffset: -25,
            width: 888,
            scale: (i) => i
        };

        beforeAll(() => {
            component = renderShallow(
                <ChartXaxis { ...props } />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
