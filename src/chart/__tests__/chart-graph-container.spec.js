import React from 'react';
import renderShallow from 'render-shallow';
import MockDate from 'mockdate';
import ChartGraphContainer from '../chart-graph-container';
import mockData from './chart-graph-mock-data.json';

describe('<ChartGraphContainer>', () => {
    describe('when it renders with data', () => {
        let component;
        const props = {
            ...mockData,
            hoverOnDate: () => {}
        };

        beforeAll(() => {
            MockDate.set('10/13/2017');
            component = renderShallow(
                <ChartGraphContainer { ...props } />
            ).output;
        });

        afterAll(() => {
            MockDate.reset();
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with loader', () => {
        let component;
        const props = {
            ...mockData,
            hoverOnDate: () => {},
            isLoading: true
        };

        beforeAll(() => {
            MockDate.set('10/13/2017');
            component = renderShallow(
                <ChartGraphContainer { ...props } />
            ).output;
        });

        afterAll(() => {
            MockDate.reset();
        });

        test('has proper markup with loader', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
