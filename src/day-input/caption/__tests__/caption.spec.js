import React from 'react';
import { shallow, mount } from 'enzyme';
import { LocaleUtils } from 'react-day-picker';
import noop from 'src/utils/noop';
import Caption from '../caption';

describe('<InputComponent>', () => {
    const props = { date: new Date(2000, 3), localeUtils: LocaleUtils, onChange: noop };

    describe('when rendered with required props', () => {
        let component;

        beforeAll(() => {
            component = shallow(<Caption { ...props } />);
        });

        test('has default range of 200 years and 12 month', () => {
            expect(component.find('.DayPicker-Year-Picker option')).toHaveLength(200);
            expect(component.find('.DayPicker-Month-Picker option')).toHaveLength(12);
        });
    });

    describe('when date boundaries are defined', () => {
        let component;

        beforeAll(() => {
            component = shallow(
                <Caption
                    { ...props }
                    fromMonth={ new Date(2000, 3, 1) }
                    toMonth={ new Date(2005, 8, 1) }
                    date={ new Date(2000, 5, 1) }
                />
            );
        });

        test('has 5 years in select', () => {
            expect(component.find('.DayPicker-Year-Picker option')).toHaveLength(6);
        });

        test('has 9 month available in 2000', () => {
            expect(component.find('.DayPicker-Month-Picker option')).toHaveLength(9);
        });
    });

    describe('when date is changing', () => {
        const onChange = jest.fn();
        let component;

        beforeAll(() => {
            component = mount(
                <Caption
                    { ...props }
                    fromMonth={ new Date(2000, 0) }
                    toMonth={ new Date(2005, 0) }
                    onChange={ onChange }
                />
            );
            component.find('.DayPicker-Year-Picker').simulate(
                'change',
                { target: { form: { year: { value: 2003 }, month: { value: 11 } } } }
            );
        });

        test('has exact number of items in select', () => {
            expect(onChange).toHaveBeenCalledWith(new Date(2003, 11));
        });
    });
});
