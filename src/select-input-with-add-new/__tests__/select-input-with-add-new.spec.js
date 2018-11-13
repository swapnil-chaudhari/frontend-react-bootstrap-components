import SelectInputWithAddNew from '../select-input-with-add-new';
import AddNewBox from '../add-new-box';
import { SelectInput, Button } from 'src/index';
import renderShallow from 'render-shallow';
import React from 'react';
import { findWithType, findAllWithType, findWithClass } from 'react-shallow-testutils';

describe('<SelectInputWithAddNew>', () => {
    describe('when rendered with required props', () => {
        const props = {
            addButtonText: 'add new something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            onChange: jest.fn(),
            mapValuesToOption: jest.fn()
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;
        });

        test('adds the correct className to the container component', () => {
            const componentChild = findWithType(component, 'span');
            expect(componentChild.props.className).toEqual('SelectInputWithAddNew-container');
        });

        test('renders a <SelectInput> with the correct markup', () => {
            expect(component).toMatchSnapshot();
        });

        test('does not render the new input component', () => {
            expect(findAllWithType(component, AddNewBox)).toHaveLength(0);
        });

    });

    describe('when rendered with props.disabled=true', () => {
        const props = {
            addButtonText: 'add new something',
            disabled: true,
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            onChange: jest.fn(),
            mapValuesToOption: jest.fn()
        };
        let selectInput;
        let addNewButton;

        beforeAll(() => {
            const component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;

            selectInput = findWithType(component, SelectInput);
            addNewButton = findWithClass(component, 'SelectInputWithAddNew-add-button');
        });

        test('passes disabled to <SelectInput>', () => {
            expect(selectInput.props.disabled).toBeTruthy();
        });

        test('disables the Add New button', () => {
            expect(addNewButton.props.disabled).toBeTruthy();
        });

    });

    describe('when rendered with props.placeholder', () => {
        const props = {
            addButtonText: 'add new something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            onChange: jest.fn(),
            mapValuesToOption: jest.fn(),
            placeholder: 'Peter likes Teslas'
        };
        let selectInput;

        beforeAll(() => {
            const component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;

            selectInput = findWithType(component, SelectInput);
        });

        test('passes the placeholder to the <SelectInputWithAddNew>', () => {
            expect(selectInput.props.placeholder).toEqual(props.placeholder);
        });
    });

    describe('when rendered with props.value', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            mapValuesToOption: jest.fn(),
            name: 'something',
            onChange: jest.fn()
        };
        let selectInput;

        beforeAll(() => {
            const component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;

            selectInput = findWithType(component, SelectInput);
        });

        test('renders a <SelectInput> with the value of props.value', () => {
            expect(selectInput.props.value).toEqual(props.value);
        });
    });

    describe('when rendered with quality assurance id', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            mapValuesToOption: jest.fn(),
            name: 'something',
            onChange: jest.fn(),
            qaid: 'SelectInputWithAddNew-QA-wrapper'
        };

        let component;

        beforeAll(() => {
            component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;
        });

        test('renders a select input with correct id on enclosing <div>.', () => {
            expect(component.props.id).toEqual(props.qaid);
        });
    });

    describe('when props.value is updated', () => {
        const props = {
            addButtonText: 'add something',
            children: <input name="hey" />,
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            mapValuesToOption: jest.fn(),
            name: 'something',
            onChange: jest.fn()
        };
        const newProps = {
            ...props,
            value: 'Charles'
        };
        let selectInput;

        beforeAll(() => {
            const { rerenderElement } =
                renderShallow(<SelectInputWithAddNew { ...props } />);
            const component = rerenderElement(<SelectInputWithAddNew { ...newProps } />).output;

            selectInput = findWithType(component, SelectInput);
        });

        test('renders a <SelectInput> with the value of newProps.value', () => {
            expect(selectInput.props.value).toEqual(newProps.value);
        });
    });

    describe('when rendered with props.defaultExpanded=true', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            defaultExpanded: true,
            mapValuesToOption: jest.fn(),
            name: 'something',
            onChange: jest.fn()
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;
        });

        test('renders the new input component', () => {
            expect(findAllWithType(component, AddNewBox)).toHaveLength(1);
        });

    });

    describe('when rendered with props.options', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            children: <input name="hi" />,
            options: [{ label: 'ian', value: 'Ian' }],
            mapValuesToOption: jest.fn(),
            onChange: jest.fn()
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;
        });

        test('renders the <SelectInput> with props.options', () => {
            expect(component).toMatchSnapshot();
        });

    });

    describe('when props.options is updated', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            children: <input name="hi" />,
            options: [{ label: 'ian', value: 'Ian' }],
            mapValuesToOption: jest.fn(),
            onChange: jest.fn()
        };
        const newProps = {
            ...props,
            options: [{ label: 'Scott', value: 'Scott' }]
        };
        let selectInput;

        beforeAll(() => {
            const { rerenderElement } =
                renderShallow(<SelectInputWithAddNew { ...props } />);

            const component = rerenderElement(<SelectInputWithAddNew { ...newProps } />).output;

            selectInput = findWithType(component, SelectInput);
        });

        test('renders the <SelectInput> with the new options', () => {
            expect(selectInput.props.options).toEqual(newProps.options);
        });

    });

    describe('when rendered with props.inputProps', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            inputProps: {
                form: 'some-form'
            },
            mapValuesToOption: jest.fn(),
            onChange: jest.fn()
        };
        let selectInput;

        beforeAll(() => {
            const component = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            ).output;

            selectInput = findWithType(component, SelectInput);
        });

        test('passes that value to <SelectInput>', () => {
            expect(selectInput.props.inputProps).toEqual(props.inputProps);
        });

    });

    describe('when the <SelectInput> changes', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            onChange: jest.fn(),
            mapValuesToOption: jest.fn(),
            children: <input name="hi" />
        };
        const selectionValue = 'sup';
        let selectInput;

        beforeAll(() => {
            const { output, rerender } = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            );

            selectInput = findWithType(output, SelectInput);

            selectInput.props.onChange(selectionValue);

            const component = rerender();

            selectInput = findWithType(component, SelectInput);
        });

        test('calls props.onChange with the selection value', () => {
            expect(props.onChange).toHaveBeenCalledWith(selectionValue);
        });

    });

    describe('when the add new button is clicked', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            mapValuesToOption: jest.fn(),
            children: <input name="hi" />,
            onChange: jest.fn(),
            inputId: 'someId'
        };
        const event = { preventDefault: jest.fn() };
        let component;

        beforeAll(() => {
            const { output, rerender } = renderShallow(
                <SelectInputWithAddNew { ...props } />
            );

            const button = findWithType(output, Button);

            button.props.onClick(event);

            component = rerender();
        });

        test('renders AddNewBox with the right props mapping', () => {
            expect(component).toMatchSnapshot();
        });

        test('prevents the default behavior for the event', () => {
            expect(event.preventDefault).toHaveBeenCalledTimes(1);
        });

    });

    describe('when a new value is added without onSave', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            mapValuesToOption: values => ({ label: values.hi, value: values.hi }),
            onChange: jest.fn()
        };
        const event = { preventDefault: jest.fn() };
        const newValue = 'hello there';
        const newFormValues = { hi: newValue };
        let component;
        let selectInput;

        beforeAll(() => {
            const { output, rerender } = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            );

            // click Add New button
            const button = findWithType(output, Button);
            button.props.onClick(event);
            component = rerender();

            // Trigger save
            const addNewBox = findWithType(component, AddNewBox);
            addNewBox.props.onSave(newFormValues);

            component = rerender();
            selectInput = findWithType(component, SelectInput);
        });

        test('closes the add new component', () => {
            expect(findAllWithType(component, AddNewBox)).toHaveLength(0);
        });

        test('adds the new option to the list of options', () => {
            expect(selectInput.props.options).toEqual([{
                value: newValue,
                label: newValue
            }]);
        });

        test('calls props.onChange with the new option value', () => {
            expect(props.onChange).toHaveBeenCalledWith(newValue);
        });

    });

    describe('when multiple new values are added without onSave', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            mapValuesToOption: values => ({ label: values.hi, value: values.hi }),
            onChange: jest.fn()
        };
        const newValues = ['hi', 'how are you'];
        const event = { preventDefault: jest.fn() };
        let component;
        let selectInput;

        beforeAll(() => {
            const { output, rerender } = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            );

            newValues.forEach(newValue => {
                const newFormValues = { hi: newValue };

                // click Add New button
                const button = findWithType(output, Button);
                button.props.onClick(event);
                component = rerender();

                // Trigger save
                const addNewBox = findWithType(component, AddNewBox);
                addNewBox.props.onSave(newFormValues);
            });

            component = rerender();
            selectInput = findWithType(component, SelectInput);
        });

        test('adds all of the new values to the list of options', () => {
            const newOptions = newValues.map(value => ({ label: value, value }));
            expect(selectInput.props.options[0]).toEqual(newOptions[1]);
        });

    });

    describe('when a new value is added with an onSave callback', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            mapValuesToOption: values => ({ label: values.hi, value: values.hi }),
            onChange: jest.fn(),
            onSave: jest.fn()
        };
        const event = { preventDefault: jest.fn() };
        const newValue = 'hello there';
        const newFormValues = { hi: newValue };
        let component;

        beforeAll(() => {
            const { output, rerender } = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            );

            // click Add New button
            const button = findWithType(output, Button);
            button.props.onClick(event);
            component = rerender();

            // Trigger save
            const addNewBox = findWithType(component, AddNewBox);
            addNewBox.props.onSave(newFormValues);

            component = rerender();
        });

        test('closes the add new component', () => {
            expect(findAllWithType(component, AddNewBox)).toHaveLength(0);
        });

        test('calls props.onSave with the form values', () => {
            expect(props.onSave).toHaveBeenCalledWith(newFormValues);
        });

        test('does not call props.onChange', () => {
            expect(props.onChange).not.toHaveBeenCalled();
        });

    });


    describe('when the add new button is clicked and cancel is clicked', () => {
        const props = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            children: <input name="hi" />,
            mapValuesToOption: jest.fn(),
            onChange: jest.fn()
        };
        const event = { preventDefault: jest.fn() };
        let component;

        beforeAll(() => {
            const { output, rerender } = renderShallow(
                <SelectInputWithAddNew { ...props }>
                    <input name="hey" />
                </SelectInputWithAddNew>
            );

            // click Add New button
            const button = findWithType(output, Button);
            button.props.onClick(event);
            component = rerender();

            // Trigger cancel
            const addNewBox = findWithType(component, AddNewBox);
            addNewBox.props.onCancel();

            component = rerender();
        });

        test('closes the add new component', () => {
            expect(findAllWithType(component, AddNewBox)).toHaveLength(0);
        });

        test('does not save an updated value', () => {
            const selectInput = findWithType(component, SelectInput).props.options;
            expect(selectInput).toEqual([]);
        });

    });

    describe('when it is rendered and the "add new" is expanded', () => {
        const selectInputProps = {
            addButtonText: 'add something',
            saveButtonText: 'Add something',
            cancelButtonText: 'Cancel me',
            name: 'something',
            defaultExpanded: true,
            children: <input id="yo" />,
            mapValuesToOption: jest.fn(),
            onChange: jest.fn(),
            inputId: 'gangstas'
        };

        let component;

        beforeAll(() => {
            const render = renderShallow(
                <SelectInputWithAddNew { ...selectInputProps } />
            );

            component = render.output;
        });

        test('renders without error and contains the add new box', () => {
            expect(component).toMatchSnapshot();
        });

    });

});
