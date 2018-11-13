import React from 'react';
import noop from 'src/utils/noop';

export default {
    className: 'demo-select-input',
    children: React.createElement('input', { name: 'add-input' }, null),
    id: 'Demo-Select-Input',
    inputProps: { id: 'Demo-Select-Input' },
    placeholder: 'Placeholder text',
    value: 'Demo Option',
    addButtonText: 'Add something',
    saveButtonText: 'Save something',
    cancelButtonText: 'Cancel it',
    name: 'Some Add New',
    options: [
        {
            label: 'Demo Option',
            value: 'Demo Option'
        }
    ],
    menuRenderer: noop,
    onChange: noop,
    disabled: false,
    required: false
};
