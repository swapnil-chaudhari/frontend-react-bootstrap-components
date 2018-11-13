import React from 'react';
import renderShallow from 'render-shallow';
import { findAllWithClass } from 'react-shallow-testutils';
import DoughnutChart from '../doughnut-chart';

describe('DoughnutChart', () => {
    const data = [
        { color: 'red', actuals: 10, projected: 20, channel: 'EST' },
        { color: 'blue', actuals: 20, projected: 30, channel: 'cVod' }
    ];
    const title = 'Ultimate Projected Revenue';

    describe('when it was rendered', () => {
        let component;

        beforeAll(() => {
            const { rerender, instance: getInstance } = renderShallow(
                <DoughnutChart
                    title={ title }
                    data={ data }
                    valueKey="projected"
                    labelKey="channel"
                />
            );

            getInstance().setState({ width: 1000 });
            component = rerender();
        });

        test('has title text', () => {
            expect(component).toMatchSnapshot();
        });

        test('has correct arc with two segments', () => {
            const segments = findAllWithClass(component, 'Doughnut-chart-segment');

            expect(segments).toHaveLength(2);
            expect(segments[0].props.fill).toEqual('blue');
            expect(segments[1].props.fill).toEqual('red');
        });

        test('has tips for each arc', () => {
            const lines = findAllWithClass(component, 'Doughnut-chart-tx-line');
            const tips = findAllWithClass(component, 'Doughnut-chart-tx-amount');

            expect(lines).toHaveLength(2);
            expect(lines[0].props.strokeWidth).toEqual(1);
            expect(lines[1].props.strokeWidth).toEqual(1);

            expect(tips).toHaveLength(2);
            expect(tips[0].props.children).toEqual('cVod');
            expect(tips[1].props.children).toEqual('EST');
        });
    });

    describe('when renderLabel was specified', () => {
        let component;

        beforeAll(() => {
            const { rerender, instance: getInstance } = renderShallow(
                <DoughnutChart
                    title={ title }
                    data={ data }
                    valueKey="projected"
                    renderLabel={
                        ({ record: { data: { channel } } }) => (<g>{ `${channel} Channel` }</g>)
                    }
                />
            );

            getInstance().setState({ width: 1000 });
            component = rerender();
        });

        test('has proper labels set', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
