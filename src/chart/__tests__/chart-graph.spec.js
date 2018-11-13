import React from 'react';
import renderShallow from 'render-shallow';
import MockDate from 'mockdate';
import ChartGraph from '../chart-graph';
import mockData from './chart-graph-mock-data.json';

describe('<ChartGraph>', () => {
    describe('when it renders with data', () => {
        let component;
        const props = {
            ...mockData,
            hoverOnDate: () => {
            },
            width: 1347
        };

        beforeAll(() => {
            MockDate.set('10/13/2017');
            component = renderShallow(
                <ChartGraph { ...props } />
            ).output;
        });

        afterAll(() => {
            MockDate.reset();
        });

        test('has proper markup with data', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with hover', () => {
        let component;
        let getInstance;
        let rerender;
        const props = {
            ...mockData,
            hoverOnDate: () => {
            },
            width: 1347
        };

        beforeAll(() => {
            MockDate.set('10/13/2017');
            ({ output: component, instance: getInstance, rerender } =
                    renderShallow(
                        <ChartGraph { ...props } />
                    )
            );

            const instance = getInstance();
            instance._container = {
                getBoundingClientRect: () => ({ leftPos: 0 })
            };
            instance.handleMouseMove({ clientX: 128 });

            component = rerender();
        });

        afterAll(() => {
            MockDate.reset();
        });

        test('has proper markup with hover', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with no data', () => {
        let component;
        const props = {
            ...mockData,
            hoverOnDate: () => {
            },
            width: 1347,
            data: [],
            noDataText: 'NO DATA'
        };

        beforeAll(() => {
            MockDate.set('10/13/2017');
            component = renderShallow(
                <ChartGraph { ...props } />
            ).output;
        });

        afterAll(() => {
            MockDate.reset();
        });

        test('has proper markup with no data', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
