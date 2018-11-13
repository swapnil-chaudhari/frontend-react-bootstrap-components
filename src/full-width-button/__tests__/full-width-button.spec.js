import React from 'react';
import renderShallow from 'render-shallow';
import noop from 'src/utils/noop';
import FullWidthButton from '../full-width-button';

describe('<FullWidthButton/>', () => {
    describe('when it renders', () => {
        const props = {
            handleClick: noop,
            buttonContent: 'Button',
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<FullWidthButton { ...props } />).output;
        });

        test('should render add-button div', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with disabled true but without disabled layout', () => {
        const props = {
            handleClick: noop,
            buttonContent: 'Button',
            disabled: true
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<FullWidthButton { ...props } />).output;
        });

        test('should render add-button Button with disabled prop', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with disabled true and with disabled layout', () => {
        const props = {
            handleClick: noop,
            buttonContent: 'Button',
            disabled: true,
            disabledLayout: <span>Some Custom Disabled Layout</span>
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<FullWidthButton { ...props } />).output;
        });

        test('should render add-button div without Button', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with note', () => {
        const props = {
            handleClick: noop,
            buttonContent: 'Button',
            note: 'Some note'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<FullWidthButton { ...props } />).output;
        });

        test('should render add-note div', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
