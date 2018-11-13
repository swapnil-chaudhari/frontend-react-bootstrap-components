import React from 'react';
import renderShallow from 'render-shallow';
import GroupedBarChartXaxis from '../grouped-bar-chart-x-axis';

describe('<GroupedBarChartXaxis>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <GroupedBarChartXaxis
                    labels={ ['#1', '#2'] }
                    scale={ () => 1 }
                    width={ 100 }
                    height={ 200 }
                    xOffset={ 30 }
                    yOffset={ 40 }
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
