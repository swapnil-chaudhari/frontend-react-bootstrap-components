import React from 'react';
import renderShallow from 'render-shallow';
import { MenuItem } from 'src/index';
import noop from 'src/utils/noop';
import DropdownButton from '../dropdown-button';

describe('<DropdownButton>', () => {
    describe('when it renders', () => {
        const props = {
            id: '#id',
            dropup: true,
            disabled: true,
            pullRight: true,
            open: true,
            onToggle: noop,
            onSelect: noop,
            onClose: noop,
            title: 'Create',
            withCaret: true,
            className: 'Dropdown-variant'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(
                <DropdownButton { ...props }>
                    <MenuItem eventKey="1">Item</MenuItem>
                </DropdownButton>
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
