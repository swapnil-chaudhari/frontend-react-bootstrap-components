import PropTypes from 'prop-types';
import React from 'react';
import { RadioButton } from 'src/index';
import cx from 'classnames';
import './radio-button-group.scss';

const radioButtonComponentPropType = (propValue, key, componentName, location, propFullName) => {
    if (propValue[key].type !== RadioButton)
        return new Error(
            `Invalid prop \`${propFullName}\` supplied to \'${componentName}\' Validation failed.`
        );
};

const RadioButtonGroup = ({ children, id, className }) => (
    <div className={ cx('RadioButtonGroup', className) } id={ id }>
        { children }
    </div>
);

RadioButtonGroup.displayName = 'RadioButtonGroup';
RadioButtonGroup.propTypes = {
    children: PropTypes.arrayOf(radioButtonComponentPropType).isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default RadioButtonGroup;
