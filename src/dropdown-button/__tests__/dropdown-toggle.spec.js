import React from 'react';
import renderShallow from 'render-shallow';
import DropdownToggle from '../dropdown-toggle';

describe('<DropdownToggle>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <DropdownToggle
                    withCaret={ false }
                    bsClass="btn"
                    title="Create"
                />
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
