import React from 'react';
import renderShallow from 'render-shallow';
import ChartShadedArea from '../chart-shaded-area';

describe('<ChartShadedArea>', () => {
    describe('when it renders', () => {
        let component;

        const scaleFn = x => 2 * x;

        beforeAll(() => {
            component = renderShallow(
                <ChartShadedArea
                    data={ [1, 2, 3] }
                    line1Scale={ { x: scaleFn, y: scaleFn } }
                    line2Scale={ { x: scaleFn, y: scaleFn } }
                    clipPathId="url(#chartArea)"
                    fillColor="red"
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
