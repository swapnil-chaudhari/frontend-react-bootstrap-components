import PropTypes from 'prop-types';
import React from 'react';
import ReactTagsInput from 'react-tagsinput';
import cx from 'classnames';
import './tags-input.scss';


const TagsInput = ({ qaid, ...props }) => (
    <div id={ qaid }>
        <ReactTagsInput
            className={
                cx(
                    'form-control TagsInput',
                    { 'TagsInput-disabled': props.disabled }
                )
            }
            { ...props }
        />
    </div>
);


TagsInput.displayName = 'TagsInput';

TagsInput.propTypes = {
    focusedClassName: PropTypes.string,
    addKeys: PropTypes.array,
    addOnBlur: PropTypes.bool,
    addOnPaste: PropTypes.bool,
    currentValue: PropTypes.string,
    inputValue: PropTypes.string,
    inputProps: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func,
    removeKeys: PropTypes.array,
    renderInput: PropTypes.func,
    renderTag: PropTypes.func,
    renderLayout: PropTypes.func,
    pasteSplit: PropTypes.func,
    tagProps: PropTypes.object,
    onlyUnique: PropTypes.bool,
    value: PropTypes.array.isRequired,
    maxTags: PropTypes.number,
    validationRegex: PropTypes.instanceOf(RegExp),
    disabled: PropTypes.bool,
    tagDisplayProp: PropTypes.string,
    qaid: PropTypes.string
};

TagsInput.defaultProps = {
    focusedClassName: 'TagsInput-focused',
    inputProps: { className: 'TagsInput-input', placeholder: '' },
    tagProps: { className: 'TagsInput-tag', classNameRemove: 'TagsInput-remove' }
};

export default TagsInput;
