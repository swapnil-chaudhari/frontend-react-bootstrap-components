import React from 'react';
import moment from 'moment';
import renderShallow from 'render-shallow';
import RangeDateInput from '../range-date-input';
import noop from 'src/utils/noop';

describe('<RangeDateInput>', () => {
    const dateFormat = 'MM/DD/YYYY';
    const props = {
        startName: 'startDateInput',
        endName: 'endDateInput',
        startDate: moment('2020-10-15'),
        endDate: moment('2020-10-15').add(9, 'days'),
        onDatesChange: noop
    };

    const rangeProps = {
        minDate: moment().subtract('1', 'days'),
        maxDate: moment().add('1', 'days')
    };

    describe('when rendered with required props', () => {
        let component;

        beforeAll(() => {
            const render = renderShallow(<RangeDateInput { ...props } />);
            component = render.output;
        });

        test('it has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with placeholders', () => {
        let component;

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...props }
                    startPlaceholder={ dateFormat }
                    endPlaceholder={ dateFormat }
                />
            );
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
            const render = renderShallow(<RangeDateInput { ...props } />);
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
            const render = renderShallow(<RangeDateInput { ...props } />);
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
            const render = renderShallow(<RangeDateInput { ...props } />);
            instance = render.instance();
            instance.toggle();
            component = render.rerender();
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when dates change', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...props }
                />
            );
            instance = render.instance();
        });

        test('should change focused input states accordingly', () => {
            expect(instance.state.focusedInput).toEqual(null);
            instance.focus();
            expect(instance.state.focusedInput).toEqual('startDate');
            instance.onDatesChange();
            expect(instance.state.focusedInput).toEqual('endDate');
            instance.onDatesChange();
            expect(instance.state.focusedInput).toEqual(null);
        });
    });

    describe('when manually dates change', () => {
        let instance;
        const date = 'SomeDate';

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...props }
                    isManuallyEditable={ true }
                />
            );
            instance = render.instance();
        });

        test('should change corresponding input state accordingly', () => {
            expect(instance.state.start).toEqual(null);
            instance.handleManuallyChange('start')(date);
            expect(instance.state.start).toEqual(date);
        });
    });

    describe('when updateDatesFromState is called', () => {
        let instance;
        const customProps = {
            ...props,
            isManuallyEditable: true,
            onDatesChange: jest.fn()
        };

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...customProps }
                />
            );
            instance = render.instance();
            instance.state.focusedInput = 'startDate';
        });

        test('calls onDatesChange with new startDate', () => {
            const newDate = props.startDate.clone().subtract(1, 'days').format(dateFormat);

            instance.state.start = newDate;
            instance.updateDatesFromState();

            expect(customProps.onDatesChange).toHaveBeenCalledWith({
                startDate: moment(newDate, dateFormat),
                endDate: customProps.endDate
            });
        });

        test('calls onDatesChange with new startDate and cleared endDate', () => {
            const newDate = props.endDate.clone().add(1, 'days').format(dateFormat);

            instance.state.start = newDate;
            instance.updateDatesFromState();

            expect(customProps.onDatesChange).toHaveBeenCalledWith({
                startDate: moment(newDate, dateFormat),
                endDate: null
            });
        });
    });

    describe('when min and max dates are passed as props', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...props }
                    { ...rangeProps }
                />
            );
            instance = render.instance();
        });

        test('should accept a date between the min and max range', () => {
            expect(instance.isOutsideRange(moment())).toEqual(false);
        });

        test('should accept a date matching the max date', () => {
            expect(instance.isOutsideRange(rangeProps.maxDate)).toEqual(false);
        });

        test('should deny a date outside of the min and max range', () => {
            expect(instance.isOutsideRange(moment().subtract('2', 'days')))
                .toEqual(true);
        });
    });

    describe('when a min date is passed as a prop', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...props }
                    minDate={ rangeProps.minDate }
                />
            );
            instance = render.instance();
        });

        test('should accept a date after the min date', () => {
            expect(instance.isOutsideRange(moment())).toEqual(false);
        });

        test('should deny a date before the min date', () => {
            expect(instance.isOutsideRange(moment().subtract('2', 'days')))
                .toEqual(true);
        });
    });

    describe('when a max date is passed as a prop', () => {
        let instance;

        beforeAll(() => {
            const render = renderShallow(
                <RangeDateInput
                    { ...props }
                    maxDate={ rangeProps.maxDate }
                />
            );
            instance = render.instance();
        });

        test('should accept a date before the max date', () => {
            expect(instance.isOutsideRange(moment())).toEqual(false);
        });

        test('should deny a date after the max date', () => {
            expect(instance.isOutsideRange(moment().add('2', 'days')))
                .toEqual(true);
        });
    });

    describe('with keyboard navigation', () => {
        describe('when navigation disabled', () => {
            describe('when handleKeyDown called', () => {
                let instance;

                beforeEach(() => {
                    const component = renderShallow(
                        <RangeDateInput
                            { ...props }
                            keyboardNavigationEnabled={ false }
                        />
                    );
                    instance = component.instance();
                    jest.spyOn(instance, 'focusEnd');
                    jest.spyOn(instance, 'focus');
                });

                afterEach(() => {
                    jest.restoreAllMocks();
                });

                test('should not call focus for end date field', () => {
                    const onKeyDown = jest.fn();
                    instance.dayPickerRangeController = { dayPicker: { onKeyDown } };
                    instance.handleKeyDown();
                    expect(onKeyDown).not.toHaveBeenCalled();
                });
            });
        });
        describe('when navigation enabled', () => {
            describe('when handleKeyDown called', () => {
                let instance;

                beforeEach(() => {
                    const component = renderShallow(
                        <RangeDateInput
                            { ...props }
                            keyboardNavigationEnabled
                        />
                    );
                    instance = component.instance();
                    jest.spyOn(instance, 'focusEnd');
                    jest.spyOn(instance, 'focus');
                });

                afterEach(() => {
                    jest.restoreAllMocks();
                });

                test('should call key down event for date picker calendar', () => {
                    const onKeyDown = jest.fn();
                    instance.dayPickerRangeController = { dayPicker: { onKeyDown } };
                    instance.handleKeyDown();
                    expect(onKeyDown).toHaveBeenCalled();
                });
            });
        });
    });

    describe('when selectMode is passed as a prop', () => {
        const momentMatcher = (propName, value) => ({
            asymmetricMatch: actual => value.isSame(actual[propName], 'day')
        });

        describe('when selectMode is month and onDatesChange is called', () => {
            let instance;
            const customProps = {
                ...props,
                selectMode: 'month',
                onDatesChange: jest.fn()
            };

            beforeAll(() => {
                const render = renderShallow(
                    <RangeDateInput
                        { ...customProps }
                    />
                );
                instance = render.instance();
            });

            test('calls onDatesChange for startDate with correct dates', () => {
                instance.state.focusedInput = 'startDate';
                instance.onDatesChange({
                    startDate: moment('2018-04-11'),
                    endDate: null
                });

                expect(customProps.onDatesChange)
                    .toHaveBeenCalledWith(momentMatcher('startDate', moment('2018-04-01')));
            });

            test('calls onDatesChange for endDate with correct dates', () => {
                instance.state.focusedInput = 'endDate';
                instance.onDatesChange({
                    startDate: null,
                    endDate: moment('2018-04-11')
                });

                expect(customProps.onDatesChange)
                    .toHaveBeenCalledWith(momentMatcher('endDate', moment('2018-04-30')));
            });
        });

        describe('when selectMode is "release week" and onDatesChange is called', () => {
            let instance;
            const customProps = {
                ...props,
                selectMode: 'release week',
                onDatesChange: jest.fn()
            };

            beforeAll(() => {
                const render = renderShallow(
                    <RangeDateInput
                        { ...customProps }
                    />
                );
                instance = render.instance();
            });

            test('calls onDatesChange for startDate with correct dates', () => {
                instance.state.focusedInput = 'startDate';
                instance.onDatesChange({
                    startDate: moment('2018-04-11'),
                    endDate: null
                });

                expect(customProps.onDatesChange)
                    .toHaveBeenCalledWith(momentMatcher('startDate', moment('2018-04-06')));
            });

            test('calls onDatesChange for endDate with correct dates', () => {
                instance.state.focusedInput = 'endDate';
                instance.onDatesChange({
                    startDate: null,
                    endDate: moment('2018-04-11')
                });

                expect(customProps.onDatesChange)
                    .toHaveBeenCalledWith(momentMatcher('endDate', moment('2018-04-12')));
            });
        });
    });

    describe('when startFormatter is passed as a prop', () => {
        let component;
        const startFormatter = date => `Wk start ${date.format(dateFormat)}`;
        const customProps = {
            ...props,
            startFormatter
        };

        beforeAll(() => {
            component = renderShallow(
                <RangeDateInput { ...customProps } />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when endFormatter is passed as a prop', () => {
        let component;
        const endFormatter = date => `Wk start ${date.format(dateFormat)}`;
        const customProps = {
            ...props,
            endFormatter
        };

        beforeAll(() => {
            component = renderShallow(
                <RangeDateInput { ...customProps } />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
