import PropTypes from 'prop-types';
import React from 'react';
import { Alert as BsAlert } from 'react-bootstrap';

const Alert = (props) => (<BsAlert { ...props } />);

Alert.displayName = 'Alert';

Alert.propTypes = {
    bsClass: PropTypes.string,
    bsStyle: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    closeLabel: PropTypes.string,
    onDismiss: PropTypes.func
};

export default Alert;
