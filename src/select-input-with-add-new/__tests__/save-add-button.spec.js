import React from 'react';
import SaveAddButton from '../save-add-button';
import renderShallow from 'render-shallow';

describe('<SaveAddButton>', () => {

    describe('when it renders with required props', () => {
        const props = {
            text: 'Add me',
            name: 'artist',
            onClick: jest.fn()
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SaveAddButton { ...props } />).output;
        });

        test('renders a button with an onClick and the right text', () => {
            expect(component).toMatchSnapshot();
        });

    });

    describe('when props.disabled is passed in and true', () => {
        const props = {
            text: 'Add artist',
            disabled: true,
            onClick: jest.fn()

        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SaveAddButton { ...props } />).output;
        });

        test('sets the button.disabled to true', () => {
            expect(component.props.disabled).toBeTruthy();
        });

    });

    describe('when props.disabled is passed in and false', () => {
        const props = {
            disabled: false,
            text: 'Add artist',
            onClick: jest.fn()

        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SaveAddButton { ...props } />).output;
        });

        test('sets the button.disabled to false', () => {
            expect(component.props.disabled).toBeFalsy();
        });

    });

});
