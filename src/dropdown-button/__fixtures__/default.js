import React from 'react';
import noop from 'src/utils/noop';

export default {
    id: '#demo-dropdown-button',
    children: React.createElement('span', null, 'Item #1'),
    dropup: false,
    disabled: false,
    pullRight: true,
    open: true,
    onToggle: noop,
    onSelect: noop,
    onClose: noop,
    title: 'Demo Dropdown Button',
    withCaret: true,
    bsStyle: 'default',
    bsSize: 'small'
};
