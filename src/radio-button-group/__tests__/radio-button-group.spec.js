import React from 'react';
import renderShallow from 'render-shallow';
import { RadioButtonGroup, RadioButton } from 'src/index';
import noop from 'src/utils/noop';

const _getRequiredRadioButtonProps = () => ({
    name: 'applesauce',
    value: 'chunky',
    onChange: noop,
    checked: true
});

const _getRequiredRadioButtonGroupProps = () => ({
    children: [
        <RadioButton key={ 0 } { ..._getRequiredRadioButtonProps() } />,
        <RadioButton key={ 1 } { ..._getRequiredRadioButtonProps() } />
    ],
    id: 'applesauce'
});

describe(`${RadioButtonGroup.displayName}`, () => {
    test('has the display name "RadioButtonGroup"', () => {
        expect(RadioButtonGroup.displayName).toEqual('RadioButtonGroup');
    });

    describe('when it renders with required props', () => {
        const props = _getRequiredRadioButtonGroupProps();
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButtonGroup { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a style class', () => {
        const props = {
            ..._getRequiredRadioButtonGroupProps(),
            className: 'SnazzyComponent-radio-button-group'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButtonGroup { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe(`when it renders with non-${RadioButton.displayName} children`, () => {
        const props = {
            ..._getRequiredRadioButtonGroupProps(),
            children: [<div key={ 0 } ></div>]
        };

        test('throws an error', () => {
            expect(() => renderShallow(<RadioButtonGroup { ...props } />)).toThrow(Error);
        });
    });
});
