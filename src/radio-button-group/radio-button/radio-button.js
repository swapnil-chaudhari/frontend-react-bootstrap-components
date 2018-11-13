import PropTypes from 'prop-types';
import React from 'react';
import { FormControl } from 'react-bootstrap';
import cx from 'classnames';
import './radio-button.scss';

const RadioButton = ({
    name,
    value,
    disabled,
    onChange,
    checked,
    label,
    addon,
    labelClassName,
    labelContentsClassName,
    inputClassName
}) => (
    <div className="RadioButton-wrapper">
        <label className={ cx('RadioButton-label', labelClassName) }>
            <span className={ cx(labelContentsClassName, { 'Opm-disabled': disabled }) }>
                <FormControl
                    type="radio"
                    bsClass=""
                    className={ cx('RadioButton-radio', inputClassName) }
                    name={ name }
                    value={ value }
                    onChange={ onChange }
                    checked={ checked }
                    disabled={ disabled }
                />
                { label }
            </span>
            { addon }
        </label>
    </div>
);

RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = {
    addon: PropTypes.any,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    inputClassName: PropTypes.string,
    label: PropTypes.any,
    labelClassName: PropTypes.string,
    labelContentsClassName: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default RadioButton;
