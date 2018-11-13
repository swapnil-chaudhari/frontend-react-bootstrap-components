import SelectInput from '../select-input';
import React from 'react';
import ReactSelect from 'react-select';
import renderShallow from 'render-shallow';
import { findWithType } from 'react-shallow-testutils';
import noop from 'src/utils/noop';

describe('<SelectInput>', () => {

    describe('when it renders with required properties', () => {
        const props = {};
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with dropUpIfOutOfViewport', () => {
        test('retains any old onOpens', () => {
            const onOpenSpy = jest.fn();
            const component = renderShallow(
                <SelectInput dropUpIfOutOfViewport={ true } onOpen={ onOpenSpy } />
            ).output;

            const childComponent = findWithType(component, ReactSelect);
            childComponent.props.onOpen();
            expect(onOpenSpy).toHaveBeenCalledTimes(1);
        });

        test('flips the dropdown up', () => {
            const viewportBottom = 999;
            const { instance: getInstance } = renderShallow(
                <SelectInput dropUpIfOutOfViewport={ true } />
            );

            const dropdown = {
                getBoundingClientRect: () => ({
                    bottom: 1000,
                    height: 500
                }),
                style: {
                    top: '0'
                }
            };
            getInstance().flipDropdownIfOutOfViewport(dropdown, viewportBottom);
            expect(dropdown.style.top).toEqual('-500px');
        });

        test('does not flip if not past viewport', () => {
            const viewportBottom = 1001;
            const { instance: getInstance } = renderShallow(
                <SelectInput dropUpIfOutOfViewport={ true } />
            );

            const dropdown = {
                getBoundingClientRect: () => ({
                    bottom: 1000,
                    height: 500
                }),
                style: {
                    top: '0'
                }
            };
            getInstance().flipDropdownIfOutOfViewport(dropdown, viewportBottom);
            expect(dropdown.style.top).toEqual('0');
        });
    });


    describe('when props.className is supplied', () => {
        const props = {
            className: 'apples orange-kiwi'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with props.className', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.containerClassName is supplied', () => {
        const props = {
            containerClassName: 'apples orange-kiwi'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with props.containerClassName', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.onChange is supplied and the input changes', () => {
        describe('when multi prop is eql true', () => {
            const props = { onChange: jest.fn(), multi: true };
            const mockSelectionEvent = { label: 1, value: 'multi' };

            beforeAll(() => {
                const parentDivComponent = renderShallow(<SelectInput { ...props } />).output;
                const childComponent = findWithType(parentDivComponent, ReactSelect);
                childComponent.props.onChange(mockSelectionEvent);
            });

            test('calls props.onChange with the selection value', () => {
                expect(props.onChange).toHaveBeenCalledWith(mockSelectionEvent);
            });
        });
        describe('when multi prop is eql false', () => {
            const props = { onChange: jest.fn() };
            const mockSelectionEvent = { value: 'oh hai' };

            beforeAll(() => {
                const parentDivComponent = renderShallow(<SelectInput { ...props } />).output;
                const childComponent = findWithType(parentDivComponent, ReactSelect);
                childComponent.props.onChange(mockSelectionEvent);
            });

            test('calls props.onChange with the selection value', () => {
                expect(props.onChange).toHaveBeenCalledWith(mockSelectionEvent.value);
            });
        });
    });

    describe('when props.required is passed', () => {
        const props = { required: true };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with required property', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.id is supplied', () => {
        const props = {
            id: 'Select-123'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with props.id', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.inputProps is supplied and props.id is not', () => {
        const props = {
            inputProps: {
                form: 'some-form'
            }
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with those inputProps and an undefined id', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.inputProps and props.id are supplied', () => {
        const props = {
            id: 'the-thing',
            inputProps: {
                form: 'some-form'
            }
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with those inputProps and the id', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe(
        'when props.inputProps and props.id are supplied and inputProps overrides id',
        () => {
            const props = {
                id: 'the-thing',
                inputProps: {
                    form: 'some-form',
                    id: 'another-thing'
                }
            };
            let component;

            beforeAll(() => {
                component = renderShallow(<SelectInput { ...props } />).output;
            });

            test('renders a ReactSelect with the id from inputProps', () => {
                expect(component).toMatchSnapshot();
            });
        }
    );

    describe('when props.placeholder is supplied', () => {
        const props = {
            placeholder: 'placeholder'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with props.placeholder', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.value is supplied', () => {
        const props = {
            value: 45
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with props.value', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.options is supplied', () => {
        const props = {
            options: [
                {
                    value: 1,
                    label: 'Apple'
                },
                {
                    value: 2,
                    label: 'Banana'
                },
                {
                    value: 3,
                    label: 'Kiwi'
                }
            ]
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with props.options', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.disabled is supplied', () => {

        describe('and it is true', () => {
            const props = {
                disabled: true
            };
            let component;

            beforeAll(() => {
                component = renderShallow(<SelectInput { ...props } />).output;
            });

            test('renders a ReactSelect with props.disabled === true', () => {
                expect(component).toMatchSnapshot();
            });
        });

        describe('and it is false', () => {
            const props = {
                disabled: false
            };
            let component;

            beforeAll(() => {
                component = renderShallow(<SelectInput { ...props } />).output;
            });

            test('renders a ReactSelect with props.disabled === false', () => {
                expect(component).toMatchSnapshot();
            });
        });
    });

    describe('when qaid is supplied', () => {
        const props = {
            qaid: 'SelectInput-qaid',
            menuRenderer: noop
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect with qaid', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when selectType is tether', () => {
        let component;
        const props = {
            selectType: 'tether',
            tetherProps: { classPrefix: 'prefix' }
        };
        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a TetherSelect', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when selectType is async', () => {
        let component;
        const props = {
            selectType: 'async',
            loadOptions: noop
        };
        beforeAll(() => {
            component = renderShallow(<SelectInput { ...props } />).output;
        });

        test('renders a ReactSelect.Async', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
