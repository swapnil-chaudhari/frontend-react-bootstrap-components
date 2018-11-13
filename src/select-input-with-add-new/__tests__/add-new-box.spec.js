import React from 'react';
import AddNewBox, { makeFormName } from '../add-new-box';
import SaveAddButton from '../save-add-button';
import CancelAddButton from '../cancel-add-button';
import renderShallow from 'render-shallow';
import { stub } from 'sinon';
import { findWithType } from 'react-shallow-testutils';

describe('<AddNewBox>', () => {

    describe('when rendered with required props', () => {
        const props = {
            saveButtonText: 'Save me',
            cancelButtonText: 'Cancel me',
            onCancel: jest.fn(),
            onSave: jest.fn(),
            fields: <input name="something" />,
            name: 'somename'
        };
        let component;

        beforeAll(() => {
            stub(document.body, 'appendChild');
            component = renderShallow(<AddNewBox { ...props } />).output;
        });

        afterAll(() => {
            document.body.appendChild.restore();
        });

        test('renders props.fields with the cancel and save buttons', () => {
            expect(component).toMatchSnapshot();
        });

        test('appends a <form> to the body, with the id matching formName', () => {
            const [element] = document.body.appendChild.firstCall.args;
            expect(element.tagName).toEqual('FORM');
            expect(element.id).toEqual('add-new-somename');
        });

    });

    describe('when the form values change and the form becomes valid', () => {
        const props = {
            onCancel: jest.fn(),
            saveButtonText: 'Save me',
            cancelButtonText: 'Cancel me',
            onSave: jest.fn(),
            fields: <input name="something" />,
            name: 'something'
        };
        const mockValidForm = { checkValidity: () => true };
        let saveButton;

        beforeAll(() => {
            stub(document.body, 'appendChild');

            const { output, rerender } = renderShallow(<AddNewBox { ...props } />);

            document.forms[makeFormName(props.name)] = mockValidForm;

            output.props.onChange();

            const component = rerender();
            saveButton = findWithType(component, SaveAddButton);
        });

        afterAll(() => {
            document.body.appendChild.restore();
            delete document.forms[makeFormName(props.name)];
        });

        test('sets the disabled property on the save button to false', () => {
            expect(saveButton.props.disabled).toBeFalsy();
        });

    });

    describe('when the form values change and the form becomes invalid', () => {
        const props = {
            saveButtonText: 'Save me',
            cancelButtonText: 'Cancel me',
            onCancel: jest.fn(),
            onSave: jest.fn(),
            fields: <input name="something" />,
            name: 'something'
        };
        const mockValidForm = { checkValidity: () => false };
        let saveButton;

        beforeAll(() => {
            stub(document.body, 'appendChild');

            const { output, rerender } = renderShallow(<AddNewBox { ...props } />);

            document.forms[makeFormName(props.name)] = mockValidForm;

            output.props.onChange();

            const component = rerender();
            saveButton = findWithType(component, SaveAddButton);
        });

        afterAll(() => {
            document.body.appendChild.restore();
            delete document.forms[makeFormName(props.name)];
        });

        test('sets the disabled property on the save button to true', () => {
            expect(saveButton.props.disabled).toBeTruthy();
        });

    });

    describe('when cancel is clicked', () => {
        const props = {
            onCancel: jest.fn(),
            saveButtonText: 'Save me',
            cancelButtonText: 'Cancel me',
            onSave: jest.fn(),
            fields: <input name="some-input" />,
            name: 'something'
        };
        const event = {
            preventDefault: jest.fn()
        };

        beforeAll(() => {
            stub(document.body, 'appendChild');

            document.forms[makeFormName(props.name)] = { checkValidity: jest.fn() };

            const component = renderShallow(<AddNewBox { ...props } />).output;
            const cancelButton = findWithType(component, CancelAddButton);

            cancelButton.props.onClick(event);
        });

        afterAll(() => {
            document.body.appendChild.restore();
            delete document.forms[makeFormName(props.name)];
        });

        test('calls props.onCancel', () => {
            expect(props.onCancel).toHaveBeenCalledTimes(1);
        });

        test('prevents the default browser action', () => {
            expect(event.preventDefault).toHaveBeenCalledTimes(1);
        });

    });

    describe('when save is clicked', () => {
        const inputName = 'something';
        const inputValue = 'some-value';
        const props = {
            onCancel: jest.fn(),
            saveButtonText: 'Save me',
            cancelButtonText: 'Cancel me',
            onSave: jest.fn(),
            fields: <input name={ inputName } value={ inputValue } />,
            name: 'something'
        };
        const formName = makeFormName(props.name);
        const event = {
            preventDefault: jest.fn()
        };

        beforeAll(() => {
            stub(document.body, 'appendChild');

            document.forms[formName] = { checkValidity: jest.fn() };

            const component = renderShallow(<AddNewBox { ...props } />).output;
            const saveButton = findWithType(component, SaveAddButton);

            document.forms[formName] = [{ name: 'something', value: 'some-value' }];

            saveButton.props.onClick(event);
        });

        afterAll(() => {
            document.body.appendChild.restore();
            delete document.forms[formName];
        });

        test('calls props.onSave with a map of field names to values', () => {
            expect(props.onSave).toHaveBeenCalledWith({
                [inputName]: inputValue
            });
        });

        test('prevents the default browser action', () => {
            expect(event.preventDefault).toHaveBeenCalledTimes(1);
        });
    });

    describe(
        'save is clicked when HTML5 form attributes are not supported (MS Edge/IE)',
        () => {
            const inputName = 'something';
            const inputValue = 'some-value';
            const props = {
                onCancel: jest.fn(),
                saveButtonText: 'Save me',
                cancelButtonText: 'Cancel me',
                onSave: jest.fn(),
                fields: <input id={ inputName } name={ inputName } value={ inputValue } />,
                inputId: inputName,
                name: 'something'
            };
            const event = {
                preventDefault: jest.fn()
            };

            beforeAll(() => {
                stub(document, 'getElementById').returns(
                    { name: inputName, value: inputValue }
                );

                const component = renderShallow(<AddNewBox { ...props } />).output;
                const saveButton = findWithType(component, SaveAddButton);

                saveButton.props.onClick(event);
            });

            afterAll(() => {
                document.getElementById.restore();
            });

            test('calls props.onSave with a map of field names to values', () => {
                expect(props.onSave).toHaveBeenCalledWith({
                    [inputName]: inputValue
                });
            });

            test('prevents the default browser action', () => {
                expect(event.preventDefault).toHaveBeenCalledTimes(1);
            });
        }
    );

    describe('when the component is unmounted', () => {
        const props = {
            onCancel: jest.fn(),
            onSave: jest.fn(),
            saveButtonText: 'Save me',
            cancelButtonText: 'Cancel me',
            fields: <input name="something" />,
            name: 'somename'
        };

        beforeAll(() => {
            jest.spyOn(document.body, 'appendChild');
            jest.spyOn(document.body, 'removeChild');

            const { instance } = renderShallow(<AddNewBox { ...props } />);

            instance().componentWillUnmount();
        });

        afterAll(() => {
            document.body.appendChild.mockRestore();
            document.body.removeChild.mockRestore();
        });

        test('removes the form from the page', () => {
            expect(document.body.removeChild).toHaveBeenCalledTimes(1);
            expect(document.body.appendChild).toHaveBeenCalledTimes(1);
        });
    });
});
