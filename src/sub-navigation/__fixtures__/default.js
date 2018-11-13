import React from 'react';
import { SubNavigationItem } from 'src/index';
import noop from 'src/utils/noop';

const children = [
    React.createElement(
        SubNavigationItem,
        { href: 'project/1', className: 'active', key: 0 },
        'Project #1'
    ),
    React.createElement(
        SubNavigationItem,
        { href: 'project/2', key: 1 },
        'Project #2'
    )
];

export default {
    children,
    onSelect: noop
};
