import React from 'react';
import { RadioButton } from 'src/index';
import noop from 'src/utils/noop';

const children = [
    React.createElement(
        RadioButton,
        {
            key: 0,
            name: 'Radio',
            value: 'Radio',
            label: 'Radio',
            onChange: noop,
            checked: true
        },
        null
    ),
    React.createElement(
        RadioButton,
        {
            key: 1,
            name: 'Raheem',
            value: 'Raheem',
            label: 'Raheem',
            onChange: noop,
            checked: false
        }
    )
];

export default {
    children,
    id: '#demo-radio-group',
    className: 'demo-radio-button-group'
};
