/* eslint-disable react/jsx-handler-names */
import React from 'react';
import moment from 'moment';
import renderShallow from 'render-shallow';
import SingleDateInput from '../single-date-input';
import noop from 'src/utils/noop';

describe('<SingleDateInput>', () => {

    const props = {
        name: 'my-date-input',
        date: moment('2020-10-15'),
        onDateChange: noop
    };

    const rangeProps = {
        minDate: moment('2020-10-15').subtract('1', 'days'),
        maxDate: moment('2020-10-15').add('1', 'days')
    };

    describe('when rendered with required props', () => {
        let component;

        beforeAll(() => {
            const render = renderShallow(<SingleDateInput { ...props } />);
            component = render.output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });

    });

    describe('when focusing', () => {
        let component;
        let instance;

        beforeAll(() => {
            const render = renderShallow(<SingleDateInput { ...props } />);
            instance = render.instance();
            instance.focus();
            component = render.rerender();
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when blurring', () => {
        let component;
        let instance;

        beforeAll(() => {
            const render = renderShallow(<SingleDateInput { ...props } />);
            instance = render.instance();
            instance.focus();
            instance.blur();
            component = render.rerender();
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when toggling', () => {
        let component;
        let instance;

        beforeAll(() => {
            const render = renderShallow(<SingleDateInput { ...props } />);
            instance = render.instance();
            instance.toggle();
            component = render.rerender();
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when min and max dates are passed as props', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <SingleDateInput
                    { ...props }
                    { ...rangeProps }
                />
            );
            instance = render.instance();
        });

        test('should accept a date between the min and max range', () => {
            expect(instance.isOutsideRange(moment('2020-10-15'))).toEqual(false);
        });

        test('should deny a date outside of the min and max range', () => {
            expect(instance.isOutsideRange(moment('2020-10-15').subtract('2', 'days')))
                .toEqual(true);
        });
    });

    describe('when a min date is passed as a prop', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <SingleDateInput
                    { ...props }
                    minDate={ rangeProps.minDate }
                />
            );
            instance = render.instance();
        });

        test('should accept a date after the min date', () => {
            expect(instance.isOutsideRange(moment('2020-10-15'))).toEqual(false);
        });

        test('should deny a date before the min date', () => {
            expect(instance.isOutsideRange(moment('2020-10-15').subtract('2', 'days')))
                .toEqual(true);
        });
    });

    describe('when a max date is passed as a prop', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <SingleDateInput
                    { ...props }
                    maxDate={ rangeProps.maxDate }
                />
            );
            instance = render.instance();
        });

        test('should accept a date before the max date', () => {
            expect(instance.isOutsideRange(moment('2020-10-15'))).toEqual(false);
        });

        test('should deny a date after the max date', () => {
            expect(instance.isOutsideRange(moment('2020-10-15').add('2', 'days')))
                .toEqual(true);
        });
    });
});
