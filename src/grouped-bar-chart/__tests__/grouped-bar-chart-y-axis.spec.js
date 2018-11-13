import React from 'react';
import renderShallow from 'render-shallow';
import GroupedBarChartYaxis from '../grouped-bar-chart-y-axis';

describe('<GroupedBarChartYaxis>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <GroupedBarChartYaxis
                    ticks={ [1, 2] }
                    ticksFormat={ v => v }
                    scale={ v => v }
                    width={ 100 }
                    height={ 200 }
                    xOffset={ 30 }
                    yOffset={ 20 }
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
