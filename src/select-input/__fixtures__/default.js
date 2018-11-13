import noop from 'src/utils/noop';

export default {
    className: 'demo-select-input',
    id: 'Demo-Select-Input',
    inputProps: { id: 'Demo-Select-Input' },
    placeholder: 'Placeholder text',
    value: 'Demo Option',
    options: [
        {
            label: 'Demo Option',
            value: 'Demo Option'
        }
    ],
    menuRenderer: noop,
    onChange: noop,
    disabled: false,
    required: false,
    qaid: 'qaid'
};
