import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import Chevron from 'src/icons/chevron';
import { Button } from 'src/index';

const DropdownToggle = ({
    children,
    className,
    bsClass,
    title,
    withCaret,
    bsRole, // eslint-disable-line no-unused-vars
    ...props
}) => (
    <Button { ...props } className={ cx(className, bsClass) }>
        { children || title }
        {
            withCaret ? (
                <span> <Chevron /></span>
            ) : null
        }
    </Button>
);

DropdownToggle.displayName = 'DropdownToggle';

DropdownToggle.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    bsClass: PropTypes.string,
    title: PropTypes.string,
    bsRole: PropTypes.string,
    withCaret: PropTypes.bool
};

export default DropdownToggle;
