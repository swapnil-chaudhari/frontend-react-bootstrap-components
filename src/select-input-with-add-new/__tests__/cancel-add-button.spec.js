import React from 'react';
import CancelAddButton from '../cancel-add-button';
import renderShallow from 'render-shallow';

describe('<CancelAddButton>', () => {
    describe('when it renders', () => {
        const props = {
            text: 'Cancel',
            onClick: jest.fn()
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<CancelAddButton { ...props } />).output;
        });

        test('renders a button with an onClick and the right text', () => {
            expect(component).toMatchSnapshot();
        });

    });

});
