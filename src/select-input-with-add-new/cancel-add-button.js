import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'src/index';

const CancelAddButton = ({ onClick, text }) =>
    <Button onClick={ onClick } bsStyle="link">
        { text }
    </Button>;

CancelAddButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

CancelAddButton.defaultProps = { text: 'Cancel' };

export default CancelAddButton;
