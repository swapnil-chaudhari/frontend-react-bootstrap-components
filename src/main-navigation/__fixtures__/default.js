import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const children = [
    React.createElement(Nav, { key: 1 },
        React.createElement(NavItem, { eventKey: 1, href: '#' }, 'Link'),
        React.createElement(NavItem, { eventKey: 2, href: '#' }, 'Link'),
        React.createElement(
            NavDropdown,
            {
                eventKey: 3,
                title: 'Dropdown',
                id: 'basic-nav-dropdown'
            },
            React.createElement(MenuItem, { eventKey: 3.1 }, 'Action')
        )
    ),
    React.createElement(
        Nav,
        { className: 'pullRight', key: 2 },
        React.createElement(NavItem, { eventKey: 1, href: '#' }, 'Link Right')
    )
];

export default {
    children,
    logoHref: '#',
    logo: null
};
