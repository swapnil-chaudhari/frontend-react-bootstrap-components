import noop from 'src/utils/noop';

export default {
    addKeys: [9, 13],
    addOnBlur: false,
    addOnPaste: false,
    className: 'form-control TagsInput',
    disabled: false,
    focusedClassName: 'TagsInput-focused',
    inputProps: { className: 'TagsInput-input', placeholder: '' },
    maxTags: -1,
    onChange: noop,
    onlyUnique: false,
    pasteSplit: noop,
    removeKeys: [8],
    tagDisplayProp: null,
    tagProps: {
        className: 'TagsInput-tag',
        classNameRemove: 'TagsInput-remove'
    },
    validationRegex: /.*/,
    value: ['Tags Input Value'],
};
