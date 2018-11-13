import React from 'react';
import renderShallow from 'render-shallow';
import GroupedBarChart from '../grouped-bar-chart';

describe('<GroupedBarChart>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <GroupedBarChart
                    className="chart"
                    data={ [{ key: '#1', values: [1, 2] }] }
                    width={ 200 }
                    height={ 200 }
                    yTicks={ [1, 2] }
                    innerPadding={ 0.05 }
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
