import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass } from 'react-shallow-testutils';
import UndoLink from '../undo-link';

describe('<UndoLink>', () => {
    describe('when it renders', () => {
        let component;
        const props = {
            handleUndoChanges: jest.fn(),
            handleNotificationClose: jest.fn(),
            movedCountriesNumber: 1,
            formatMessage: msg => msg,
            messages: {
                undoDescription: 'undo description',
                undoLabel: 'undo label'
            }
        };

        beforeAll(() => {
            component = renderShallow(<UndoLink { ...props } />).output;
        });

        test('renders correct class name', () => {
            expect(component.props.className).toEqual('UndoLink');
        });

        test('renders correct number of countries', () => {
            expect(component.props.children[0]).toMatchSnapshot();
        });

        test('should call handleUndoChanges on UNDO link click', () => {
            const undoLink = findWithClass(component, 'UndoLink-link');

            undoLink.props.onClick();

            expect(props.handleUndoChanges).toHaveBeenCalled();
        });

        test('should call handleNotificationClose on close icon click', () => {
            const closeIcon = component.props.children[1];
            closeIcon.props.onClick();

            expect(props.handleNotificationClose).toHaveBeenCalled();
        });
    });
});
