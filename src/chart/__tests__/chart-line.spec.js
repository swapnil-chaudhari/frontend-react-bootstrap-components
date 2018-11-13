import React from 'react';
import renderShallow from 'render-shallow';
import ChartLine from '../chart-line';

describe('<ChartLine>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <ChartLine
                    className="ChartLine-overall"
                    data={ [1, 3, 5, 7, 8, 12, 13, 14] }
                    xScale={ el => 20 * el }
                    yScale={ el => 20 * el }
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
