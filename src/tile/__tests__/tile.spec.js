import React from 'react';
import renderShallow from 'render-shallow';
import noop from 'src/utils/noop';
import Tile from '../tile';

describe('<Tile>', () => {
    describe('when it renders without image', () => {
        const props = {
            children: <div />,
            onClick: noop
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Tile { ...props } />).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with image', () => {
        const props = {
            image: 'https://google.com/images/1',
            children: <div />,
            onClick: noop
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<Tile { ...props } />).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
