import React from 'react';
import ButtonsRow from '../buttons-row';
import { Digital, Physical, Film } from 'src/icons';
import renderShallow from 'render-shallow';

describe('<ButtonsRow/>', () => {
    describe('when it renders without onSelect', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'first button',
                    id: 'first-button',
                    className: 'first-button'
                },
                {
                    icon: <Physical />,
                    text: 'second button',
                    id: 'second-button',
                    className: 'second-button'
                }
            ],
            selectedIndex: 1,
            className: 'ButtonsRow-custom'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow bsStyle="danger" { ...props } />).output;
        });

        test('renders button for each childElement passed', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with onSelect passed', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'first button',
                    id: 'first-button'
                },
                {
                    icon: <Physical />,
                    text: 'second button',
                    id: 'second-button'
                },
            ],
            onSelect: jest.fn()
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow { ...props } />).output;
            component.props.children[0].props.onClick();
        });

        test('calls onSelect prop', () => {
            expect(props.onSelect).toHaveBeenCalledWith(
                {
                    icon: <Digital />,
                    text: 'first button',
                    id: 'first-button'
                },
                0
            );
        });

        test('renders button for each childElement passed', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a disabled prop passed', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'Off limits'
                },
                {
                    icon: <Physical />,
                    text: 'No touching'
                },
            ],
            disabled: true
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow { ...props } />).output;
        });

        test('renders a disabled button for each childElement passed', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders without a button id supplied', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'Off limits'
                },
                {
                    icon: <Physical />,
                    text: 'No touching'
                },
            ]
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow { ...props } />).output;
        });

        test('renders the buttons without any ids', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders without a button className supplied', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'Off limits',
                    className: ''
                },
                {
                    icon: <Physical />,
                    text: 'No touching'
                },
            ]
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow { ...props } />).output;
        });

        test('renders the buttons without any classNames', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders and equalWidth was set to false', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'Off limits'
                },
                {
                    icon: <Physical />,
                    text: 'No touching'
                },
            ],
            autoSetWidth: false
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow { ...props } />).output;
        });

        test('has buttons with style set to null', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with multi prop set to true', () => {
        const props = {
            childElements: [
                {
                    icon: <Digital />,
                    text: 'Off limits'
                },
                {
                    icon: <Physical />,
                    text: 'No touching'
                },
                {
                    icon: <Film />,
                    text: 'Movie is our all'
                },
            ],
            multi: true,
            selectedIndexes: [0, 2],
            autoSetWidth: false
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ButtonsRow { ...props } />).output;
        });

        test('has buttons with style set to null', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
