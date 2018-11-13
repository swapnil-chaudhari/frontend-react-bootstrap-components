import React from 'react';
import Icon from '../icon';
import renderShallow from 'render-shallow';
import { ICON_IDS } from 'src/svg-definitions/svgs';

describe('<Icon>', () => {

    describe('when it renders', () => {
        const id = ICON_IDS.CALENDAR;
        let component;

        beforeAll(() => {
            component = renderShallow(<Icon id={ id } />).output;
        });

        test('renders an <svg> with the id from props.id', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a className prop', () => {
        const className = 'some-more-specific-class';
        const id = ICON_IDS.CALENDAR;
        let component;

        beforeAll(() => {
            component = renderShallow(<Icon className={ className } id={ id } />).output;
        });

        test('renders an <svg> with the additional className(s)', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with an onClick prop', () => {
        const props = {
            id: ICON_IDS.CALENDAR,
            onClick: () => {}
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Icon { ...props } />).output;
        });

        test('renders an <Icon> and passes the onClick prop to it', () => {
            expect(component.props.onClick).toEqual(props.onClick);
        });
    });

});
