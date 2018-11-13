import FormField from '../form-field';
import { Help } from 'src/index';
import React from 'react';
import renderShallow from 'render-shallow';
import { findWithType } from 'react-shallow-testutils';

describe('<FormField>', () => {
    describe('when it renders with required properties', () => {

        describe('and its child is an html input', () => {
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders a form field wrapping the supplied child component', () => {
                expect(component.type).toEqual('div');
                expect(component.props.className).toEqual('form-group');
                expect(findWithType(component, 'label').props.htmlFor).toMatch(/^\d+$/);
            });
        });

        describe('and its child is a React Component', () => {
            const ChildComponent = () => <input />;
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField>
                        <ChildComponent />
                    </FormField>
                ).output;
            });

            test('renders a form field wrapping the supplied child component', () => {
                expect(component.type).toEqual('div');
                expect(component.props.className).toEqual('form-group');
                expect(findWithType(component, 'label').props.htmlFor)
                    .toMatch(/^\d+$/);
            });
        });

    });

    describe('when it is rendered with a single child array', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField>
                    { [<input key="1" id="its-ian" />] }
                </FormField>
            ).output;
        });

        test('renders the child', () => {
            expect(component).toBeTruthy();
        });

    });

    describe('when it is rendered with multiple children', () => {
        let render;

        beforeAll(() => {
            render = () => renderShallow(
                <FormField>
                [
                    <input type="text" key="1" />,
                    <input type="text" key="2" />
                ]
                </FormField>
            );
        });

        test('throws an error', () => {
            expect(render).toThrow();
        });

    });

    describe('when it has a value for props.className', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField className="test-class">
                    <div id="test-div"></div>
                </FormField>
            ).output;
        });

        test(
            'augments the style classes on the outermost div with the supplied classes',
            () => {
                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('when the child component has a value for props.className', () => {
        const childClass = 'child-class';
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField>
                    <input className={ childClass } />
                </FormField>
            ).output;
        });

        test(
            "will augment the child's props.className with the FormField-form-control class",
            () => {
                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('when the child component has a value for props.id', () => {
        const childId = 'child-id';
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField>
                    <input id={ childId } />
                </FormField>
            ).output;
        });

        test('will preserve the child component\'s id', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.label is supplied', () => {
        const props = {
            label: 'label'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField { ...props }>
                    <input />
                </FormField>
            ).output;
        });

        test('renders a labeled input', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when props.help is supplied', () => {
        describe('and it is simple text', () => {
            const props = {
                help: 'Please help me, please.'
            };
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders a help icon', () => {
                expect(component).toMatchSnapshot();
            });
        });

        describe('and it is React.element', () => {
            const props = {
                help: <Help id="help" message="Please help me, please." />
            };

            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders a help icon', () => {
                expect(component).toMatchSnapshot();
            });
        });
    });

    describe('when props.isRequired is passed in', () => {

        describe('and it is true', () => {
            const props = {
                isRequired: true
            };
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders a required icon and title', () => {
                expect(component).toMatchSnapshot();
            });

        });

        describe('and it is false', () => {
            const props = {
                isRequired: false
            };
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('does not render a required icon and title', () => {
                expect(component).toMatchSnapshot();
            });

        });

    });


    describe('when props.help and props.isRequired are supplied', () => {
        const props = {
            help: 'Please help me, please.',
            isRequired: true
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField { ...props }>
                    <input />
                </FormField>
            ).output;
        });

        test('renders help and required icon in the proper order', () => {
            expect(component).toMatchSnapshot();
        });
    });


    describe('when props note is', () => {
        describe('supplied and it', () => {
            const props = {
                note: 'When I wore a younger mans clothes'
            };
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders a note', () => {
                expect(component).toMatchSnapshot();
            });

        });
    });

    describe('when props errorMessage is', () => {
        describe('supplied and it simple string', () => {
            const props = {
                errorMessage: 'Everybody knows ducks come from volcanoes.'
            };
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders an error message', () => {
                expect(component).toMatchSnapshot();
            });

        });

        describe('supplied and it is node', () => {
            const props = {
                errorMessage: (
                    <span>Everybody knows ducks come from volcanoes.</span>
                )
            };
            let component;

            beforeAll(() => {
                component = renderShallow(
                    <FormField { ...props }>
                        <input />
                    </FormField>
                ).output;
            });

            test('renders an error message', () => {
                expect(component).toMatchSnapshot();
            });

        });
    });

    describe('when props.label and labelAppendix are supplied', () => {
        const props = {
            label: 'label',
            labelAppendix: <a>appendix</a>
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <FormField { ...props }>
                    <input />
                </FormField>
            ).output;
        });

        test('renders a label with an appendix', () => {
            expect(component).toMatchSnapshot();
        });
    });


});
