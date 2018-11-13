import React from 'react';
import renderShallow from 'render-shallow';
import { findWithClass } from 'react-shallow-testutils';
import ContinentItem from '../continent-item';
import { TERRITORIES_KEYS } from '../../../constants';


describe('<ContinentItem>', () => {
    const classes = (element) => element.props.className.split(' ');

    describe('when it renders', () => {
        let component;
        let instanceComponent;
        const props = {
            onCountrySelect: jest.fn(),
            countries: [
                {
                    orchId: 14,
                    isDisabled: false,
                    isSelected: false,
                    continent: 'Asia',
                    territoryName: 'Afghanistan'
                },
                {
                    orchId: 16,
                    isDisabled: false,
                    isSelected: false,
                    continent: 'Asia',
                    territoryName: 'Nepal'
                }
            ],
            name: 'Asia',
            territoryIdKey: TERRITORIES_KEYS.ID,
            territoryNameKey: TERRITORIES_KEYS.NAME,
        };

        beforeAll(() => {
            const { instance, output } = renderShallow(<ContinentItem { ...props } />);
            component = output;
            instanceComponent = instance();
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('ContinentItem');
        });

        test('should render only territories when collapsed', () => {
            expect(component).toMatchSnapshot();
        });

        test('renders collapsed', () => {
            expect(instanceComponent.state).toEqual({
                isCollapsed: true
            });
        });
    });

    describe('when it clicked', () => {
        let component;
        const props = {
            onCountrySelect: jest.fn(),
            countries: [
                {
                    orchId: 14,
                    isSelected: false,
                    isDisabled: false,
                    continent: 'Asia',
                    territoryName: 'Afghanistan'
                },
                {
                    orchId: 16,
                    isSelected: false,
                    isDisabled: false,
                    continent: 'Asia',
                    territoryName: 'Nepal'
                }
            ],
            name: 'Asia',
            territoryIdKey: TERRITORIES_KEYS.ID,
            territoryNameKey: TERRITORIES_KEYS.NAME,
        };

        beforeAll(() => {
            const { output, rerender } = renderShallow(<ContinentItem { ...props } />);
            findWithClass(output, 'ContinentItem-label').props.onClick();
            component = rerender();
        });

        test('should render territories and continents when clicked', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('on territory item click', () => {
        describe('should call onCountrySelect', () => {
            const props = {
                onCountrySelect: jest.fn(),
                countries: [
                    {
                        orchId: 14,
                        isSelected: false,
                        isDisabled: false,
                        continent: 'Asia',
                        territoryName: 'Afghanistan'
                    },
                ],
                name: 'Asia',
                territoryIdKey: TERRITORIES_KEYS.ID,
                territoryNameKey: TERRITORIES_KEYS.NAME,
            };

            beforeAll(() => {
                const { output } = renderShallow(<ContinentItem { ...props } />);
                const country = findWithClass(
                    output,
                    'checkbox ContinentItem-container'
                ).props.children[0];

                country.props.onHandleSelect();
            });

            test('should continent name', () => {
                expect(props.onCountrySelect).toHaveBeenCalledWith(
                    null,
                    null,
                    null,
                    props.name
                );
            });
        });
    });

    describe('on country item click', () => {
        describe('should call onCountrySelect', () => {
            let component;
            const props = {
                onCountrySelect: jest.fn(),
                countries: [
                    {
                        orchId: 14,
                        isSelected: false,
                        isDisabled: false,
                        continent: 'Asia',
                        territoryName: 'Afghanistan'
                    },
                ],
                name: 'Asia',
                territoryIdKey: TERRITORIES_KEYS.ID,
                territoryNameKey: TERRITORIES_KEYS.NAME,
            };

            beforeAll(() => {
                const { output, rerender } = renderShallow(<ContinentItem { ...props } />);
                findWithClass(output, 'ContinentItem-label').props.onClick();
                component = rerender();
                const country = component
                    .props
                    .children[1][0]
                    .props
                    .children;

                country.props.onHandleSelect();
            });

            test('with  territoryId', () => {
                expect(props.onCountrySelect).toHaveBeenCalledWith(
                    props.countries[0].orchId
                );
            });
        });
    });
});
