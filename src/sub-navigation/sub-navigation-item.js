import PropTypes from 'prop-types';
import React from 'react';

const SubNavigationItem = ({ eventKey, href, children, onClick, className }) => {
    const handleClick = e => {
        if (onClick) {
            e.preventDefault();
            onClick(eventKey, e);
        }
    };

    return (
        <a
            href={ href }
            className={ className }
            onClick={ handleClick }
        >{ children }</a>
    );
};

SubNavigationItem.displayName = 'SubNavigationItem';

SubNavigationItem.propTypes = {
    eventKey: PropTypes.any,
    href: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default SubNavigationItem;
