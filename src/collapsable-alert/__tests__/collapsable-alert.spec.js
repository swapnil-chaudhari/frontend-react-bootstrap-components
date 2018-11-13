import React from 'react';
import renderShallow from 'render-shallow';
import CollapsableAlert from '../collapsable-alert';
import { findWithClass } from 'react-shallow-testutils';

describe('<CollapsableAlert>', () => {
    describe('when rendered with default props', () => {
        let component;
        const props = {
            titleText: 'Rejection Reasons',
            subtitleText: 'You have been rejected. No hard feelings, bub.'
        };

        beforeAll(() => {
            component = renderShallow(<CollapsableAlert { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with custom props', () => {
        let component;
        const props = {
            style: 'warning',
            titleText: 'Rejection Reasons',
            subtitleText: 'You have been rejected. No hard feelings, bub.',
            collapsedText: 'BEHOLD'
        };

        beforeAll(() => {
            component = renderShallow(<CollapsableAlert { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rendered with children and expand is clicked', () => {
        let component;
        const props = {
            style: 'warning',
            titleText: 'Rejection Reasons',
            subtitleText: 'You have been rejected. No hard feelings, bub.',
            collapsedText: 'BEHOLD',
            expandedText: 'BEGONE',
            children: 'I am a child'
        };

        beforeAll(() => {
            const { rerender, output } = renderShallow(<CollapsableAlert { ...props } />);

            const collapseButton = findWithClass(output, 'CollapsableAlert-button');
            collapseButton.props.onClick();

            component = rerender();
        });

        test('renders in an expanded state with provided children', () => {
            expect(component).toMatchSnapshot();
        });
    });

});
