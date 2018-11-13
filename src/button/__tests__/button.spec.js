import React from 'react';
import renderShallow from 'render-shallow';
import Button from '../button';

describe('<Button>', () => {
    describe('when it is rendered with default props', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<Button />).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
