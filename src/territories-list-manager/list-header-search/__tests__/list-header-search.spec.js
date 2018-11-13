import React from 'react';
import renderShallow from 'render-shallow';
import { findWithType, findWithClass } from 'react-shallow-testutils';
import ListHeaderSearch from '../list-header-search';


describe('<ListHeaderSearch>', () => {
    const classes = (element) => element.props.className.split(' ');
    const formatMessage = msg => msg;
    const messages = { searchPlaceholder: 'search placeholder' };

    describe('when it renders', () => {
        const props = {
            onCountrySearch: jest.fn(),
            onCountrySearchCancel: jest.fn(),
            searchQuery: '',
            formatMessage,
            messages
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ListHeaderSearch { ...props } />).output;
        });

        test('renders the correct className', () => {
            expect(classes(component)).toContain('ListHeaderSearch');
        });

        test('should render search field with icons', () => {
            expect(component).toMatchSnapshot();
        });

        test('renders empty input with empty searchQuery value in state', () => {
            expect(findWithType(component, 'input').props.value).toEqual('');
        });
    });

    describe('when input not empty', () => {
        const props = {
            onCountrySearch: jest.fn(),
            onCountrySearchCancel: jest.fn(),
            searchQuery: '',
            formatMessage,
            messages
        };

        beforeAll(() => {
            const { output } = renderShallow(<ListHeaderSearch { ...props } />);

            findWithType(output, 'input').props.onChange({
                target: {
                    value: 'Asia'
                }
            });
        });

        test('should call onCountrySearch on input value change', () => {
            expect(props.onCountrySearch).toHaveBeenCalledWith(
                'Asia'
            );
        });
    });

    describe('when icon clear clicked', () => {
        let component;
        const props = {
            onCountrySearch: jest.fn(),
            onCountrySearchCancel: jest.fn(),
            searchQuery: '',
            formatMessage,
            messages
        };

        beforeAll(() => {
            const { output, rerender } = renderShallow(<ListHeaderSearch { ...props } />);
            // triggering input onChange
            findWithType(output, 'input').props.onChange({
                target: {
                    value: 'Asia'
                }
            });
            // rerender component after input changed to apply changes
            component = rerender();
            // triggering icon close click event
            findWithClass(component, 'ListHeaderSearch-close').props.onClick();
            // rerender component to get updated state
            component = rerender();
        });

        test('should clear input', () => {
            expect(findWithType(component, 'input').props.value).toEqual('');
        });

        test('should call onCountrySearchCancel on input clear', () => {
            expect(props.onCountrySearchCancel).toHaveBeenCalledTimes(1);
        });
    });
});
