import React from 'react';
import renderShallow from 'render-shallow';
import SVGDefinitions from '../svg-definitions';

describe('<SVGDefinitions>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGDefinitions />).output;
        });

        test('wraps definitions in an <svg> tag', () => {
            expect(component.type).toEqual('svg');
        });

        test('sets the display to none', () => {
            expect(component.props.style).toEqual({
                display: 'block',
                width: 0,
                height: 0
            });
        });

        test('sets the xml namespace to the correct url', () => {
            expect(component.props.xmlns).toEqual('http://www.w3.org/2000/svg');
        });

        describe('svgs', () => {
            test('renders all of the defined svgs', () => {
                expect(component).toMatchSnapshot();
            });
        });
    });
});
