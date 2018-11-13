import React from 'react';
import { mount, shallow } from 'enzyme';
import { Calendar } from 'src/icons';
import Input from '../input';

describe('<Input>', () => {
    const props = { name: 'input-name' };

    describe('when rendered with props', () => {
        let component;

        beforeAll(() => {
            component = shallow(<Input { ...props } />);
        });

        test('has input field with Calendar icon', () => {
            expect(component.find('.DayPickerInput-wrapper input[name="input-name"]'))
                .toHaveLength(1);
            expect(component.find(Calendar)).toHaveLength(1);
        });
    });
    describe('when focused is called', () => {
        let input;

        beforeAll(() => {
            const instance = mount(<Input { ...props } />).instance();
            input = instance.input;
            jest.spyOn(input, 'focus');
            instance.focus();
        });

        afterAll(() => {
            jest.restoreAllMocks();
        });

        test('has focused input', () => {
            expect(input.focus).toHaveBeenCalled();
        });
    });

    describe('when value is called', () => {
        const propsForTest = { ...props, defaultValue: 'test' };
        let value;

        beforeAll(() => {
            const instance = mount(<Input { ...propsForTest } />).instance();
            value = instance.value;
        });

        test('returns "test" value', () => {
            expect(value).toEqual('test');
        });
    });

    describe('when handleBeforeKeyDown is called', () => {
        const result = [];
        const onBeforeKeyDown = jest.fn(() => { result.push(1); });
        const onKeyDown = jest.fn(() => { result.push(2); });
        const propsForTest = { ...props, onBeforeKeyDown, onKeyDown };

        beforeAll(() => {
            const instance = shallow(<Input { ...propsForTest } />).instance();
            instance.handleBeforeKeyDown({});
        });

        afterAll(() => {
            jest.restoreAllMocks();
        });

        test('has called handleBeforeKeyDown before onKeyDown event', () => {
            expect(onBeforeKeyDown).toHaveBeenCalled();
            expect(onKeyDown).toHaveBeenCalled();
            expect(result).toEqual([1, 2]);
        });
    });
});
