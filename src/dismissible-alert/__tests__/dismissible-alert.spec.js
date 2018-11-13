import React from 'react';
import renderShallow from 'render-shallow';
import DismissibleAlert from '../dismissible-alert';
import { findWithType } from 'react-shallow-testutils';

describe('<DismissibleAlert>', () => {
    describe('when rendered with default props', () => {
        let component;
        const props = {
            titleText: 'Do Stuff Please',
            subtitleText: 'Please do things to dismiss',
            onDismiss: () => {}
        };

        beforeAll(() => {
            component = renderShallow(<DismissibleAlert { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with custom props', () => {
        let component;
        const props = {
            style: 'warning',
            titleText: 'Do Stuff Please',
            subtitleText: 'Please do things to dismiss',
            buttonText: 'DISMISS',
            onDismiss: () => {}
        };

        beforeAll(() => {
            component = renderShallow(<DismissibleAlert { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with description', () => {
        let component;
        const props = {
            style: 'warning',
            titleText: 'Do Stuff Please',
            subtitleText: 'Please do things to dismiss',
            buttonText: 'DISMISS',
            description: 'Some description',
            onDismiss: () => {}
        };

        beforeAll(() => {
            component = renderShallow(<DismissibleAlert { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with style success', () => {
        let component;
        const props = {
            buttonText: 'Discard',
            onDismiss: () => {},
            style: 'success',
            subtitleText: 'Subtitle',
            titleText: 'Hi there'
        };

        beforeAll(() => {
            component = renderShallow(<DismissibleAlert { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });


    describe('when the alert is dismissed', () => {
        const props = {
            titleText: 'Do Stuff Please',
            subtitleText: 'Please do things to dismiss',
            buttonText: 'DISMISS',
            onDismiss: jest.fn()
        };

        beforeAll(() => {
            const component = renderShallow(<DismissibleAlert { ...props } />).output;
            const button = findWithType(component, 'button');
            button.props.onClick();
        });

        test('calls the onDismiss property', () => {
            expect(props.onDismiss).toHaveBeenCalledTimes(1);
        });
    });

    describe('when rendered with a blank button text', () => {
        let component;
        const props = {
            titleText: 'Do Stuff Please',
            subtitleText: 'Please do things to dismiss',
            buttonText: '',
            style: 'danger',
            onDismiss: () => {}
        };

        beforeAll(() => {
            component = renderShallow(<DismissibleAlert { ...props } />).output;
        });

        test('renders the component without the dismiss button', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
