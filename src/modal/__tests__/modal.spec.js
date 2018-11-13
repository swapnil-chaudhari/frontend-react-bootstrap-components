import Modal from '../modal';
import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass } from 'react-shallow-testutils';

describe('<Modal>', () => {

    let props;
    let component;
    let onRequestCloseSpy;

    beforeEach(() => {
        onRequestCloseSpy = jest.fn();
        props = {
            className: 'MyClass',
            isOpen: true,
            onRequestClose: onRequestCloseSpy
        };

    });

    describe('when rendered with all props', () => {
        beforeEach(() => {
            component = renderShallow(<Modal { ...props } >Some stuff</Modal>).output;
        });

        test('renders <ReactModal> with the right props', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when passed a value for `shouldCloseOnOverlayClick`', () => {
        beforeEach(() => {
            props.shouldCloseOnOverlayClick = false;
            component = renderShallow(<Modal { ...props } >Some stuff</Modal>).output;
        });

        test('renders <ReactModal> with the right props', () => {
            expect(component.props.shouldCloseOnOverlayClick).toEqual(false);
        });
    });

    describe('when zindex is passed', () => {
        beforeEach(() => {
            props.zIndex = 5;
            component = renderShallow(<Modal { ...props } >Some stuff</Modal>).output;
        });

        test('renders <ReactModal> with the right props', () => {
            expect(component.props.style.overlay.zIndex).toEqual(5);
        });
    });

    describe('when passed a value for `headerLabel`', () => {
        beforeEach(() => {
            props.headerLabel = 'Billy Yo';
            component = renderShallow(<Modal { ...props } >Some stuff</Modal>).output;
        });

        test('renders <ReactModal> with the right props', () => {
            findWithClass(component, 'ReactModal-close').props.onClick();
            expect(component).toMatchSnapshot();
            expect(props.onRequestClose).toHaveBeenCalledWith();
        });
    });

    describe('when passed a value for `footer`', () => {
        beforeEach(() => {
            props.footer = <div className="yummy">Hi</div>;
            component = renderShallow(<Modal { ...props } >Some stuff</Modal>).output;
        });

        test('renders with a footer', () => {
            const footer = findWithClass(component, 'ReactModal-footer');
            expect(footer).toMatchSnapshot();
        });
    });
});
