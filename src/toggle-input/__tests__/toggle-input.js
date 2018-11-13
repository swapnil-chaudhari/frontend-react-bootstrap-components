import { shallow } from 'enzyme';
import React from 'react';
import { ToggleInput } from '../toggle-input';

describe('ToggleInput', () => {
    let props;

    beforeEach(() => {
        props = {
            leftLabel: 'Yes',
            rightLabel: 'No',
            leftValue: false,
            rightValue: true,
            value: true,
            onClick: jest.fn(),
            qaid: 'qaid',
            className: 'className'
        };
    });

    it('renders the toggle input', () => {
        const component = shallow(<ToggleInput { ...props } />);
        expect(component).toMatchSnapshot();
    });

    it('toggles', () => {
        const component = shallow(<ToggleInput { ...props } />);

        component.find('.ToggleInput-toggle-bg').first().props().onClick();
        expect(props.onClick).toHaveBeenCalledWith(false);
    });

    it('will be the left if you click left label', () => {
        const component = shallow(<ToggleInput { ...props } />);

        component.find('.ToggleInput-label').first().props().onClick();
        expect(props.onClick).toHaveBeenCalledWith(false);
    });

    it('will be the right if you click right label', () => {
        const component = shallow(<ToggleInput { ...props } />);

        component.find('.ToggleInput-label').last().props().onClick();
        expect(props.onClick).toHaveBeenCalledWith(true);
    });

    it('will change classnames when on the left', () => {
        props.value = false;
        const component = shallow(<ToggleInput { ...props } />);

        expect(component.find('.ToggleInput-label').first())
            .toHaveClassName('ToggleInput-label-enabled');
        expect(component.find('.ToggleInput-toggle').first())
            .toHaveClassName('ToggleInput-toggle-left');
    });
});
