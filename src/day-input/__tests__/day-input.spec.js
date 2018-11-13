import React from 'react';
import { Calendar as CalendarIcon, RightPaginationArrow, LeftPaginationArrow } from 'src/icons';
import { shallow, mount } from 'enzyme';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { KEYS } from 'src/constants';
import DayInput from '../day-input';
import Input from '../input/input';

describe('<DayInput>', () => {
    const commonProps = {
        name: 'my-day-input',
        formatMessage: m => m.defaultMessage,
        messages: {
            todayLabel: { defaultMessage: 'todayLabel' }
        }
    };

    describe('when rendered with required props', () => {
        const props = { ...commonProps, disabled: false };
        let component;

        beforeAll(() => {
            component = shallow(<DayInput { ...props } />);
        });

        test('renders <DayInput> with the right props', () => {
            expect(component.props()).toMatchSnapshot();
        });

        test('renders the <CalendarIcon> inside <Input>', () => {
            const navBar = component.find(DayPickerInput).dive().find(Input).dive();
            expect(navBar.find(CalendarIcon)).toHaveLength(1);
        });
    });

    describe('when today button is hidden', () => {
        const props = {
            ...commonProps,
            renderTodayButton: false,
            dayPickerInputOptions: {
                showOverlay: true
            }
        };
        let component;

        beforeAll(() => {
            component = mount(<DayInput { ...props } />);
        });

        test('does not render the Today button', () => {
            expect(component.find('.DayPicker-wrapper')).toHaveLength(1);
            expect(component.find('.DayPicker-TodayButton')).toHaveLength(0);
        });
    });

    describe('when rendered <Navbar>', () => {
        const props = {
            ...commonProps,
            disabled: false,
            dayPickerInputOptions: {
                showOverlay: true
            }
        };
        let component;

        beforeAll(() => {
            component = mount(<DayInput { ...props } />);
        });

        test('renders the <LeftPaginationArrow> and <RightPaginationArrow>', () => {
            expect(component.find(LeftPaginationArrow)).toHaveLength(1);
            expect(component.find(RightPaginationArrow)).toHaveLength(1);
        });

        test('renders Today button', () => {
            expect(component.find('.DayPicker-TodayButton')).toHaveLength(1);
        });
    });

    describe('when date is changed', () => {
        let instance;

        beforeEach(() => {
            const props = { ...commonProps, disabled: false, onChange: jest.fn() };
            instance = shallow(<DayInput { ...props } />).instance();
        });

        test('has correct parameters if correct date is passed to onChange handler', () => {
            instance.handleChange(new Date(2000, 0, 1));
            expect(instance.props.onChange.mock.calls[0][0]).toEqual('2000-01-01');
            expect(instance.props.onChange.mock.calls[0][1].dateMoment.isValid()).toBeTruthy();
        });

        test('has correct parameters if incorrect date is passed to onChange handler', () => {
            instance.handleChange(null);
            expect(instance.props.onChange.mock.calls[0][0]).toEqual('');
            expect(instance.props.onChange.mock.calls[0][1].dateMoment.isValid()).toBeFalsy();
        });

        test('has correct parameters if undefined date is passed to onChange handler', () => {
            instance.handleChange(undefined);
            expect(instance.props.onChange.mock.calls[0][0]).toEqual('');
            expect(instance.props.onChange.mock.calls[0][1].dateMoment.isValid()).toBeFalsy();
        });
    });

    describe('when event allowed in onChange handler', () => {
        describe('when the date is invalid', () => {
            let instance;

            beforeEach(() => {
                const props = { ...commonProps, onChange: jest.fn(), returnEventIfError: true };
                instance = shallow(<DayInput { ...props } />).instance();
            });

            test('has event as a first argument', () => {
                instance.handleChange(undefined);
                expect(instance.props.onChange.mock.calls[0][0]).toEqual({ target: { value: '' } });
                expect(instance.props.onChange.mock.calls[0][1].dateMoment.isValid()).toBeFalsy();
            });
        });

        describe('when date is correct', () => {
            let instance;

            beforeEach(() => {
                const props = { ...commonProps, onChange: jest.fn(), returnEventIfError: true };
                instance = shallow(<DayInput { ...props } />).instance();
            });

            test('has string date as a first argument', () => {
                instance.handleChange(new Date(2000, 0, 1));
                expect(instance.props.onChange.mock.calls[0][0]).toEqual('2000-01-01');
                expect(instance.props.onChange.mock.calls[0][1].dateMoment.isValid()).toBeTruthy();
            });
        });
    });

    describe('with dateFormat', () => {
        test('has default format if nothing passed in props', () => {
            const instance = shallow(<DayInput { ...commonProps } />).instance();
            expect(instance.dateFormat).toEqual('YYYY-MM-DD');
        });

        test('has format from props', () => {
            const component = shallow(<DayInput { ...commonProps } dateFormat="DD-MM-YYYY" />);
            expect(component.instance().dateFormat).toEqual('DD-MM-YYYY');
        });
    });

    describe('when date is parsed', () => {
        const props = { ...commonProps, disabled: false };
        let instance;

        beforeAll(() => {
            instance = shallow(<DayInput { ...props } />).instance();
        });

        test('returns date if correct string is passed to parseDate handler', () => {
            expect(instance.parseDate('2000-01-05')).toEqual(new Date(2000, 0, 5));
        });

        test('returns undefined if incomplete date string is passed to parseDate handler', () => {
            expect(instance.parseDate('2000-01')).toBeUndefined();
        });

        test('returns undefined if incorrect string is passed to parseDate handler', () => {
            expect(instance.parseDate(null)).toBeUndefined();
            expect(instance.parseDate(undefined)).toBeUndefined();
            expect(instance.parseDate('Invalid date string')).toBeUndefined();
        });
    });

    describe('when date is formatted', () => {
        const props = { ...commonProps, disabled: false };
        let instance;

        beforeAll(() => {
            instance = shallow(<DayInput { ...props } />).instance();
        });

        test('returns date string if correct date is passed to formatDate handler', () => {
            expect(instance.formatDate(new Date(2000, 0, 5))).toEqual('2000-01-05');
        });

        test('returns empty string if incorrect date is passed to formatDate handler', () => {
            expect(instance.formatDate(null)).toEqual('');
        });
    });

    describe('when focusing the input field', () => {
        const props = { ...commonProps, disabled: false, focus: true };
        let instance;

        beforeAll(() => {
            instance = mount(<DayInput { ...props } />).instance();
            jest.spyOn(instance.dayPickerInput.input, 'focus');
            instance.componentDidMount();
        });

        afterAll(() => {
            jest.restoreAllMocks();
        });

        test('calls focus method', () => {
            expect(instance.dayPickerInput.input.focus).toHaveBeenCalled();
        });
    });

    describe('when handleYearMonthChange is called', () => {
        const mayMonth = new Date(2000, 4).getMonth();
        const props = { ...commonProps, disabled: false };
        let instance;

        beforeAll(() => {
            instance = mount(<DayInput { ...props } />).instance();
            instance.handleYearMonthChange(mayMonth);
        });

        test('has May month with value 4 in state', () => {
            expect(instance.state.date).toEqual(mayMonth);
        });
    });

    describe('when getLocaleUtils is called', () => {
        const props = { ...commonProps, disabled: false };
        let instance;

        beforeAll(() => {
            instance = shallow(<DayInput { ...props } />).instance();
        });

        test('has short month name (without dot) in localized month string', () => {
            const januarySpain = instance.getLocaleUtils(true).getMonths('es')[0];
            expect(januarySpain).toEqual('ene');
        });

        test('has long month name (without dot) in localized month string', () => {
            const januaryFrance = instance.getLocaleUtils().getMonths('fr')[0];
            expect(januaryFrance).toEqual('janvier');
        });
    });

    describe('when Enter key is pressed', () => {
        const mockToday = new Date(Date.UTC(2000, 0, 1, 12));
        const eventForProps = ({ value }) => ({
            keyCode: KEYS.ENTER,
            target: { value },
            persist: jest.fn(),
            preventDefault: jest.fn(),
            stopPropagation: jest.fn()
        });

        describe('when input is empty', () => {
            const props = { ...commonProps, value: '' };
            const event = eventForProps(props);
            let component;

            beforeAll(() => {
                jest.spyOn(Date, 'now').mockImplementation(() => mockToday.getTime());
                component = mount(<DayInput { ...props } />);
            });

            afterAll(() => {
                jest.restoreAllMocks();
            });

            test('renders input field with today\'s date and calendar', () => {
                const input = component.find('input');
                input.prop('onKeyDown')(event);
                input.prop('onKeyUp')(event);
                component.update();
                expect(event.preventDefault).toHaveBeenCalledTimes(1);
                expect(component.find('.DayPickerInput-Overlay').exists()).toBeTruthy();
                expect(component.instance().dayPickerInput.state.value).toEqual('2000-01-01');
            });
        });

        describe('when date is specified', () => {
            const props = { ...commonProps, value: '2010-05-05' };
            const event = eventForProps(props);
            let component;

            beforeAll(() => {
                jest.spyOn(Date, 'now').mockImplementation(() => mockToday.getTime());
                component = mount(<DayInput { ...props } />);
                component.find('input').prop('onFocus')();
                component.update();
            });

            afterAll(() => {
                jest.restoreAllMocks();
            });

            test('renders input field with date and hides the calendar', () => {
                expect(component.find('.DayPickerInput-Overlay').exists()).toBeTruthy();

                const input = component.find('input');
                input.prop('onKeyDown')(event);
                input.prop('onKeyUp')(event);
                component.update();
                expect(event.preventDefault).toHaveBeenCalledTimes(1);
                expect(component.find('.DayPickerInput-Overlay').exists()).toBeFalsy();

                input.prop('onKeyDown')(event);
                input.prop('onKeyUp')(event);
                component.update();
                expect(event.preventDefault).toHaveBeenCalledTimes(2);
                expect(component.find('.DayPickerInput-Overlay').exists()).toBeTruthy();
                expect(component.instance().dayPickerInput.state.value).toEqual('2010-05-05');
            });
        });
    });
});
