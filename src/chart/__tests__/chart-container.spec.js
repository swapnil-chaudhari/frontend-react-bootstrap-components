import React from 'react';
import renderShallow from 'render-shallow';
import ChartContainer from '../chart-container';

describe('<ChartContainer>', () => {
    describe('when it renders', () => {
        const height = 400;

        let component;

        beforeAll(() => {
            component = renderShallow(
                <ChartContainer
                    className="test"
                    height={ height }
                >
                    <rect />
                </ChartContainer>
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
