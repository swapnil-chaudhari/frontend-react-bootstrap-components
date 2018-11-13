import React from 'react';
import noop from 'src/utils/noop';

const child = React.createElement(
    'input',
    {
        className: 'form-control',
        id: 'character-limit-form-field',
        onChange: noop,
        value: 'Character Limit Indicator'
    },
    null
);

export default {
    children: child,
    limit: 1234,
    formatMessage: (message, { limit }) => `${message} ${limit}`,
    formatNumber: (number) => number,
    message: 'some default message',
    value: 'Character Limit Indicator'
};
