import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'src/index';

export const SaveAddButton = ({ disabled, text, onClick }) =>
    <Button disabled={ disabled } onClick={ onClick }>{ text }</Button>;

SaveAddButton.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default SaveAddButton;
