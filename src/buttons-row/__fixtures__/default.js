import noop from 'src/utils/noop';

export default {
    childElements: [
        {
            text: 'first button',
            id: 'first-button'
        },
        {
            text: 'second button',
            id: 'second-button'
        }
    ],
    onSelect: noop,
    selectedIndex: 1,
    className: 'ButtonsRow-custom',
    disabled: false,
    bsStyle: 'primary',
    bsSize: 'large'
};
