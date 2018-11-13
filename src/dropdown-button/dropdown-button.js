import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from './dropdown-toggle';
import './dropdown-button.scss';
import cx from 'classnames';

const DropdownButton = ({
    id,
    dropup,
    disabled,
    pullRight,
    open,
    onToggle,
    onClose,
    onSelect,
    bsSize,
    bsStyle,
    title,
    children,
    withCaret,
    className
}) => (
    <div className={ cx('DropdownButton', className) }>
        <Dropdown
            id={ id }
            dropup={ dropup }
            disabled={ disabled }
            pullRight={ pullRight }
            open={ open }
            onToggle={ onToggle }
            onClose={ onClose }
            onSelect={ onSelect }
            bsSize={ bsSize }
            bsStyle={ bsStyle }
        >
            <DropdownToggle
                bsRole="toggle"
                bsClass="btn"
                bsSize={ bsSize }
                bsStyle={ bsStyle }
                withCaret={ withCaret }
            >
                { title }
            </DropdownToggle>

            <Dropdown.Menu>
                { children }
            </Dropdown.Menu>
        </Dropdown>
    </div>
);

DropdownButton.displayName = 'DropdownButton';

DropdownButton.propTypes = {
    id: PropTypes.string,
    dropup: PropTypes.bool,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    pullRight: PropTypes.bool,
    open: PropTypes.bool,
    onToggle: PropTypes.func,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    bsStyle: PropTypes.string,
    bsSize: PropTypes.string,
    title: PropTypes.node.isRequired,
    withCaret: PropTypes.bool,
    className: PropTypes.string
};

DropdownButton.defaultProps = {
    withCaret: true
};

export default DropdownButton;
