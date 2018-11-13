import React from 'react';
import renderShallow from 'render-shallow';
import { findWithType } from 'react-shallow-testutils';
import { RadioButton } from 'src/index';
import { FormControl } from 'react-bootstrap';
import noop from 'src/utils/noop';

const _getRequiredRadioButtonProps = () => ({
    name: 'applesauce',
    value: 'chunky',
    onChange: noop,
    checked: true
});

describe(`${RadioButton.displayName}`, () => {
    test('has the display name "RadioButton"', () => {
        expect(RadioButton.displayName).toEqual('RadioButton');
    });

    describe('when it renders with required props', () => {
        const props = _getRequiredRadioButtonProps();
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });

        test('attaches the change handler', () => {
            expect(findWithType(component, FormControl).props.onChange).toEqual(noop);
        });
    });

    describe('when it renders in a disabled state', () => {
        const props = {
            ..._getRequiredRadioButtonProps(),
            disabled: true
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with string label text', () => {
        const props = {
            ..._getRequiredRadioButtonProps(),
            label: 'sauce'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with an addon', () => {
        const props = {
            ..._getRequiredRadioButtonProps(),
            addon: <input />
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a label style class', () => {
        const props = {
            ..._getRequiredRadioButtonProps(),
            labelClassName: 'SnazzyComponent-label'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a input style class', () => {
        const props = {
            ..._getRequiredRadioButtonProps(),
            inputClassName: 'SnazzyComponent-input'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a label contents style class', () => {
        const props = {
            ..._getRequiredRadioButtonProps(),
            labelContentsClassName: 'SnazzyComponent-label-contents'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<RadioButton { ...props } />).output;
        });

        test('produces expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
