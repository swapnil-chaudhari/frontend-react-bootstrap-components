import Help from '../help';
import React from 'react';
import { Overlay } from 'react-bootstrap';
import renderShallow from 'render-shallow';
import { findWithType } from 'react-shallow-testutils';

describe('<Help>', () => {
    describe('when rendered with required props', () => {
        const props = {
            message: 'Here is your help',
            id: 'help-foo',
            tooltipPlacement: 'top'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders <Help> with the right props', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with children', () => {
        const props = {
            message: 'Hello World',
            id: 'hello-world',
            tooltipPlacement: 'right',
            children: <span>Hello World</span>,
            rootClose: true
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders <Help> with children', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with a popover overlay type', () => {
        const props = {
            message: 'Hello World',
            id: 'hello-world',
            tooltipPlacement: 'bottom',
            overlayType: 'popover',
            rootClose: false
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders <Help> with a <Popover />', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with a message node', () => {
        const props = {
            message: <span>'Hello World'</span>,
            id: 'hello-world',
            tooltipPlacement: 'bottom',
            rootClose: false
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders <Help> with a <Popover />', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with an overlay class name', () => {
        const props = {
            message: 'Hello World',
            id: 'hello-world',
            overlayClassName: 'overlayClassName',
            tooltipPlacement: 'bottom',
            rootClose: false
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders a <Tooltip /> in <Help /> with a custom class', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with triggerOverride = show', () => {
        const props = {
            message: 'Hello World',
            id: 'hello-world',
            triggerOverride: 'show'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders an <Overlay /> that is always visible', () => {
            const overlayProps = findWithType(component, Overlay).props;
            expect(overlayProps.show).toBeTruthy();
        });
    });

    describe('when rendered with triggerOverride = hide', () => {
        const props = {
            message: 'Hello World',
            id: 'hello-world',
            children: <span>Hello World</span>,
            triggerOverride: 'hide'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Help { ...props } />).output;
        });

        test('renders an <Overlay /> that is always hidden', () => {
            const overlayProps = findWithType(component, Overlay).props;
            expect(overlayProps.show).toBeFalsy();
        });
    });
});
